// @ts-check @flow
import { override } from 'core-decorators';
import * as types from 'babel-types';
import traverse from 'babel-traverse';
import template from 'babel-template';
import generate from 'babel-generator';
import { COOLParser } from './antlrGenerated/COOLParser';
import { COOLListener } from './antlrGenerated/COOLListener';
import JSASTBuilder from './JSASTBuilder';

type GeneratedOutput = { code: string, map: any, rawMappings: any };

type ClassNames = [string, ?string];

export default class GenerateJSListener extends COOLListener {
  jsAST: JSASTBuilder = new JSASTBuilder();

  @override
  exitFalse(context: COOLParser.FalseContext): void {
    this.jsAST.False();
  }

  @override
  exitTrue(context: COOLParser.TrueContext): void {
    this.jsAST.True();
  }

  @override
  exitString(context: COOLParser.StringContext): void {
    this.jsAST.String(context.STRING().symbol.text);
  }

  @override
  exitInt(context: COOLParser.IntContext): void {
    this.jsAST.Int(context.INT().symbol.text);
  }

  @override
  exitId(context: COOLParser.IdContext): void {
    this.jsAST.Id(context.OBJECTID().symbol.text);
  }

  @override
  exitParentheses(context: COOLParser.ParenthesesContext): void {
    // This is a non-terminal, we should pop it's sub-AST from stack
    this.jsAST.Parentheses();
  }

  @override
  exitBoolNot(context: COOLParser.BoolNotContext): void {
    // This is a non-terminal, we should pop it's sub-AST from stack
    this.jsAST.BoolNot();
  }

  @override
  exitEqual(context: COOLParser.EqualContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.Equal();
  }

  @override
  exitLessEqual(context: COOLParser.LessEqualContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.LessEqual();
  }

  @override
  exitLessThan(context: COOLParser.LessThanContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.LessThan();
  }

  @override
  exitNegative(context: COOLParser.NegativeContext): void {
    // This is a non-terminal, we should pop it's sub-AST from stack
    this.jsAST.Negative();
  }

  @override
  exitDivision(context: COOLParser.DivisionContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.Division();
  }

  @override
  exitMultiply(context: COOLParser.MultiplyContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.Multiply();
  }

  @override
  exitMinus(context: COOLParser.MinusContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.Minus();
  }

  @override
  exitAdd(context: COOLParser.AddContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.Add();
  }

  @override
  exitIsvoid(context: COOLParser.IsvoidContext): void {
    // This is a non-terminal, we should pop it's sub-AST from stack
    this.jsAST.Isvoid();
  }

  @override
  exitNew(context: COOLParser.NewContext): void {
    // Note that TypeID will not present in the JSAST
    this.jsAST.NewClass(context.TYPEID().symbol.text);
  }

  @override
  exitCase(context: COOLParser.CaseContext): void {
    const IDs = context.OBJECTID().filter(i => i).map(item => item.symbol.text);
    const types = context.TYPEID().filter(i => i).map(item => item.symbol.text);
    this.jsAST.Case();
  }

  @override
  exitBlock(context: COOLParser.BlockContext): void {
    // This is a multi-diverse non-terminal, we should pop it's several sub-ASTs from stack
    const bodyLength = context.expression().length;
    this.jsAST.Block(bodyLength);
  }

  @override
  exitWhile(context: COOLParser.WhileContext): void {
    // This is a T diverse non-terminal, we should pop it's two sub-ASTs from stack
    this.jsAST.While();
  }

  @override
  exitIf(context: COOLParser.IfContext): void {
    // This is a 3 diverse non-terminal, we should pop it's three sub-ASTs from stack
    this.jsAST.If();
  }

  @override
  exitOwnMethodCall(context: COOLParser.OwnMethodCallContext): void {
    // shorthand for self.<id>(<expr>, ...)
    const functionName = context.OBJECTID().symbol.text;
    const argumentLength = context.expression().length;
    this.jsAST.OwnMethodCall(functionName, argumentLength);
  }

  @override
  exitMethodCall(context: COOLParser.MethodCallContext): void {
    // shorthand for self.<id>(<expr>, ...)
    const functionName = context.OBJECTID().symbol.text;
    // console.log(context.TYPEID())
    const superClassName: ?string = context.TYPEID() ? context.TYPEID().symbol.text : null;
    const argumentLength = context.expression().length - 1; // there are one expression is the callee Object
    this.jsAST.MethodCall(functionName, argumentLength, superClassName);
  }

  @override
  exitAssignment(context: COOLParser.AssignmentContext): void {
    const variableName = context.OBJECTID().symbol.text;
    this.jsAST.Assignment(variableName);
  }

  // @override
  // enterProgram(context: COOLParser.ProgramContext): void {
  //   // 1. init root JSAST
  //   this.jsAST = types.file(types.program([]));
  //   // 2. set currentPath to AST root
  //   traverse(this.jsAST, {
  //     Program: (path) => {
  //       this.currentPath = path;
  //     }
  //   });
  // }

  // @override
  // enterClassDefine(context: COOLParser.ClassDefineContext): void {
  //   // from 'class Main inherits IO' get 'Main' and 'IO', though some class may not have superClassName
  //   const [ className, superClassName ]: ClassNames = context.TYPEID().filter(i => i).map(item => item.symbol.text);
  //   // 1. get JS AST
  //   let classDeclaration;
  //   if (className === 'Main') {
  //     // 1.a If Class is Main, turn it into an IIFE
  //     const IIFEBuilder = template(`
  //       (function FUNCTION_NAME(props) {
  //       })()
  //     `);
  //     classDeclaration = IIFEBuilder({
  //       FUNCTION_NAME: types.identifier(className),
  //     });
  //   } else {
  //     // 1.b For normal classes, Declare the class
  //     classDeclaration = types.classDeclaration(
  //       types.Identifier(className),
  //       superClassName ? types.Identifier(superClassName) : null,
  //       types.classBody([]),
  //       []
  //     );
  //   }

  //   // 2. Put this class declearation into program
  //   if (types.isProgram(this.currentPath.node)) {
  //     traverse(this.currentPath, {
  //       enter: (path) => {
  //         console.log(path);
  //       }
  //     });
  //     this.currentPath.node.body.push(classDeclaration);
  //     this.currentPath = this.currentPath.node.body;
  //   }
  // }

  // @override
  // exitClassDefine(context: COOLParser.ClassDefineContext): void {
  //   // set currentPath to AST root
  //   this.currentPath = this.currentPath;
  // }

  // @override
  // enterMethod(context: COOLParser.MethodContext): void {
  //   // 1. prepare class method AST
  //   const className = context.parentCtx.TYPEID(0).symbol.text;
  //   const methodName: string = context.OBJECTID().symbol.text;
  //   const method = types.classMethod(
  //     'method',
  //     types.Identifier(methodName),
  //     [],
  //     types.blockStatement([], [])
  //   );
  //   // 2. for each method we found, found the class it belongs to, then put it in
  //   traverse(this.jsAST, {
  //     enter(path) {
  //       if (types.isClassDeclaration(path.node) && path.node.id.name === className) {
  //         path.node.body.body.push(method);
  //       }
  //     }
  //   });
  // }

  // @override
  // enterClassProperty(context: COOLParser.ClassPropertyContext): void {
  //   // 1. prepare class property AST
  //   const className = context.parentCtx.TYPEID(0).symbol.text;
  //   const objectName: string = context.OBJECTID().symbol.text;
  //   // const value: string = context.expression().symbol.text; // ?
  //   const typeName: string = context.TYPEID().symbol.text;
  //   const property = types.classProperty(
  //     types.Identifier(objectName),
  //     null,
  //     types.Identifier(typeName),
  //     []
  //   );
  //   // 2. for each property we found, found the class it belongs to, then put it in
  //   traverse(this.jsAST, {
  //     enter(path) {
  //       if (types.isClassDeclaration(path.node) && path.node.id.name === className) {
  //         path.node.body.body.push(property);
  //       }
  //     }
  //   });
  // }

  generateJS(): string {
    console.log(this.jsAST.codes);
    return '';
    // const output: GeneratedOutput = generate(this.jsAST.pop(1), { quotes: 'single' });
    // return output.code;
  }
}
