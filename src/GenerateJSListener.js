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
    const functionName: string = context.OBJECTID().symbol.text;
    const argumentLength: number = context.expression().length;
    this.jsAST.OwnMethodCall(functionName, argumentLength);
  }

  @override
  exitMethodCall(context: COOLParser.MethodCallContext): void {
    // shorthand for self.<id>(<expr>, ...)
    const functionName: string = context.OBJECTID().symbol.text;
    // console.log(context.TYPEID())
    const superClassName: ?string = context.TYPEID() ? context.TYPEID().symbol.text : null;
    const argumentLength: number = context.expression().length - 1; // there are one expression is the callee Object
    this.jsAST.MethodCall(functionName, argumentLength, superClassName);
  }

  @override
  exitAssignment(context: COOLParser.AssignmentContext): void {
    const variableName: string = context.OBJECTID().symbol.text;
    this.jsAST.Assignment(variableName);
  }

  @override
  exitFormal(context: COOLParser.FormalContext): void {
    const variableName: string = context.OBJECTID().symbol.text;
    const typeName: string = context.TYPEID().symbol.text;
    this.jsAST.Formal(variableName, typeName);
  }

  @override
  exitProperty(context: COOLParser.PropertyContext): void {
    // This is a non-terminal, we should pop it's sub-AST from stack
    const variableName: string = context.OBJECTID().symbol.text;
    const typeName: string = context.TYPEID().symbol.text;
    this.jsAST.Property(variableName, typeName);
  }

  @override
  exitMethod(context: COOLParser.MethodContext): void {
    // This is a multi-diverse non-terminal, we should pop it's several "formal" and one "expression" sub-ASTs from stack
    const variableName: string = context.OBJECTID().symbol.text;
    const typeName: string = context.TYPEID().symbol.text;
    const argumentLength: number = context.formal().length;
    this.jsAST.Method(variableName, typeName, argumentLength);
  }

  @override
  exitClassDefine(context: COOLParser.ClassDefineContext): void {
    // This is a multi-diverse non-terminal, we should pop it's several "feature" sub-ASTs from stack
    const typeIDs = context.TYPEID();
    const className: string = typeIDs[0].symbol.text;
    const featureLength: number = context.feature().length;
    const hasSuperClass: boolean = !!context.INHERITS();
    const superClassName: ?string = hasSuperClass ? typeIDs[1].symbol.text : null;
    this.jsAST.ClassDefine(className, superClassName, featureLength);
  }

  @override
  exitClasses(context: COOLParser.ClassesContext): void {
    // Everytime we build a class defination, just add it to probram body
    this.jsAST.Classes();
  }

  @override
  exitProgram(context: COOLParser.ProgramContext): void {
    // Inject runtimes
    this.jsAST.Program();
  }

  generateJS(): string {
    const output: GeneratedOutput = generate(this.jsAST.jsProgramAST, { quotes: 'single', auxiliaryCommentBefore: ' @flow ' });
    return output.code;
  }
}
