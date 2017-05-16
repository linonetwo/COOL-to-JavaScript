// @ts-check @flow
import { override } from 'core-decorators';
import * as types from 'babel-types';
import traverse from 'babel-traverse';
import template from 'babel-template';
import generate from 'babel-generator';
import { COOLParser } from './antlrGenerated/COOLParser';
import { COOLListener } from './antlrGenerated/COOLListener';

type GeneratedOutput = { code: string, map: any, rawMappings: any };

type ClassNames = [string, ?string];

export default class GenerateJSListener extends COOLListener {
  jsAST: any = types.file(types.program([]))

  @override
  @override
  enterClassDefine(context: COOLParser.ClassDefineContext): void {
    // from 'class Main inherits IO' get 'Main' and 'IO', though some class may not have superClassName
    const [ className, superClassName ]: ClassNames = context.TYPEID().filter(i => i).map(item => item.symbol.text);
    // 1. get JS AST
    let classDeclaration;
    if (className === 'Main') {
      // 1.a If Class is Main, turn it into an IIFE
      const IIFEBuilder = template(`
        (function FUNCTION_NAME(props) {
        })()
      `);
      classDeclaration = IIFEBuilder({
        FUNCTION_NAME: types.identifier(className),
      });
    } else {
      // 1.b For normal classes, Declare the class
      classDeclaration = types.classDeclaration(
        types.Identifier(className),
        superClassName ? types.Identifier(superClassName) : null,
        types.classBody([]),
        []
      );
    }

    // 2. Put this class declearation into program
    traverse(this.jsAST, {
      enter(path) {
        if (types.isProgram(path.node)) {
          path.node.body.push(classDeclaration);
        }
      }
    });
  }

  @override
  enterMethod(context: COOLParser.MethodContext): void {
    // 1. prepare class method AST
    const className = context.parentCtx.TYPEID(0).symbol.text;
    const methodName: string = context.OBJECTID().symbol.text;
    const method = types.classMethod(
      'method',
      types.Identifier(methodName),
      [],
      types.blockStatement([], [])
    );
    // 2. for each method we found, found the class it belongs to, then put it in
    traverse(this.jsAST, {
      enter(path) {
        if (types.isClassDeclaration(path.node) && path.node.id.name === className) {
          path.node.body.body.push(method);
        }
      }
    });
  }

  @override
  enterClassProperty(context: COOLParser.ClassPropertyContext): void {
    // 1. prepare class property AST
    const className = context.parentCtx.TYPEID(0).symbol.text;
    const objectName: string = context.OBJECTID().symbol.text;
    // const value: string = context.expression().symbol.text; // ?
    const typeName: string = context.TYPEID().symbol.text;
    const property = types.classProperty(
      types.Identifier(objectName),
      null,
      types.Identifier(typeName),
      []
    );
    // 2. for each property we found, found the class it belongs to, then put it in
    traverse(this.jsAST, {
      enter(path) {
        if (types.isClassDeclaration(path.node) && path.node.id.name === className) {
          path.node.body.body.push(property);
        }
      }
    });
  }

  getJS(): string {
    const output: GeneratedOutput = generate(this.jsAST, { quotes: 'single' });
    return output.code;
  }
}
