// @ts-check @flow
import { takeRight, dropRight } from 'lodash';
import * as t from 'babel-types';
import template from 'babel-template';
import generate from 'babel-generator';

type JSASTNode = {
  type: string;
  key: ?JSASTNode;
  value: any;
};

export class ASTStack {
  // We use stack to temporarly store subtree of AST, then you can use popFor() to load subtree in the stack into a container tree node
  jsASTStack: Array<JSASTNode> = [];
  // root of AST, last to finish
  jsProgramAST: JSASTNode = t.file(t.program([]));

  push(subAST: JSASTNode): void {
    this.jsASTStack.push(subAST);
  }

  pop(quentity: number, returnArray: boolean = false): JSASTNode | Array<JSASTNode> {
    if (this.jsASTStack.length < quentity) {
      throw new Error(`Poping too many sub-AST from JSASTStack, poping ${quentity} but stack with length ${this.jsASTStack.length} is:`, this.jsASTStack);
    }
    if (quentity !== 1) {
      const nodes = takeRight(this.jsASTStack, quentity);
      this.jsASTStack = dropRight(this.jsASTStack, quentity);
      return nodes;
    }
    return returnArray ? [this.jsASTStack.pop()] : this.jsASTStack.pop();
  }

  // For debug usage, return generated codes for ASTs
  get codes(): Array<string> {
    return this.jsASTStack
      .map(ast => generate(ast, { quotes: 'single' }))
      .map(output => output.code);
  }
}

export class ASTBuilder extends ASTStack {
  // templateString should contains an 'EXPRESSION'
  unaryExpression(templateString: string): JSASTNode {
    const expression = this.pop(1);
    const buildUnitaryExpression = template(templateString);
    const newUnitaryExpressionStatement = buildUnitaryExpression({ EXPRESSION: expression });
    const newUnitaryExpression = newUnitaryExpressionStatement.expression;
    return newUnitaryExpression;
  }


  // templateString should contains a 'LEFT', a 'RIGHT'
  binaryExpression(templateString: string): JSASTNode {
    const [ left, right ] = this.pop(2);
    const buildBinaryExpression = template(templateString);
    const newBinaryExpressionStatement = buildBinaryExpression({ LEFT: left, RIGHT: right });
    const newBinaryExpression = newBinaryExpressionStatement.expression;
    return newBinaryExpression;
  }

  static iief(ast: any, functionName: string, statementInsertBefore: ?Array<JSASTNode>): JSASTNode {
    // 1. if it is a expression, which in JS is a IIEF, or it's a function call
    if (t.isExpression(ast)) {
      const buildIIEF = template(`
        (function ${functionName}() {return null}.bind(this)())
      `);
      const IIEF = buildIIEF({
      }).expression;
      // 1.1 set return value
      IIEF.callee.callee.object.body.body[0].argument = ast;
      // 1.2 set statements before return
      if (statementInsertBefore) {
        IIEF.callee.callee.object.body.body = [...statementInsertBefore, ...IIEF.callee.callee.object.body.body];
      }
      return IIEF;
    } else {
      // 2. if it is a statement
      const buildIIEF = template(`
        (function ${functionName}() {return null}.bind(this)())
      `);
      const IIEF = buildIIEF({
      }).expression;
      IIEF.callee.callee.object.body.body = [ast];
      return IIEF;
    }
  }

  static typeAnnotation(typeName: string): JSASTNode {
    switch (typeName) {
      case 'Int':
        return t.typeAnnotation(t.numberTypeAnnotation());
      case 'Bool':
        return t.typeAnnotation(t.booleanTypeAnnotation());
      case 'String':
        return t.typeAnnotation(t.stringTypeAnnotation());
      default:
        return t.typeAnnotation(t.identifier(typeName));
    }
  }
}

export default class JSASTBuilder extends ASTBuilder {
  False(): void {
    // booleanLiteral, stringLiteral, and identifier are all extends Expression
    this.push(t.booleanLiteral(false));
  }

  True(): void {
    this.push(t.booleanLiteral(true));
  }

  String(content: string): void {
    // use JSON.parse() to remove "" double quote
    this.push(t.stringLiteral(JSON.parse(content)));
  }

  Int(content: string): void {
    // use JSON.parse() to convert '1' to 1
    this.push(t.numericLiteral(JSON.parse(content)));
  }

  Id(content: string): void {
    this.push(content === 'self' ? t.identifier('this') : t.identifier(content));
  }

  Parentheses(): void {
    const expression = this.pop(1);
    this.push(t.parenthesizedExpression(expression));
  }

  BoolNot(): void {
    this.push(this.unaryExpression(`
      !EXPRESSION
    `));
  }

  Equal(): void {
    this.push(this.binaryExpression(`
      LEFT === RIGHT
    `));
  }

  LessEqual(): void {
    this.push(this.binaryExpression(`
      LEFT <= RIGHT
    `));
  }

  LessThan(): void {
    this.push(this.binaryExpression(`
      LEFT < RIGHT
    `));
  }

  Negative(): void {
    this.push(this.unaryExpression(`
      -EXPRESSION
    `));
  }

  Division(): void {
    this.push(this.binaryExpression(`
      Math.round( LEFT / RIGHT )
    `));
  }

  Multiply(): void {
    this.push(this.binaryExpression(`
      LEFT * RIGHT
    `));
  }

  Minus(): void {
    this.push(this.binaryExpression(`
      LEFT - RIGHT
    `));
  }

  Add(): void {
    this.push(this.binaryExpression(`
      LEFT + RIGHT
    `));
  }

  Isvoid(): void {
    this.push(this.unaryExpression(`
      !!EXPRESSION
    `));
  }

  NewClass(className: string): void {
    // Not using unaryExpression() since TypeID will not present in the JSAST
    const buildNewClass = template(`
      new CLASS_NAME()
    `);
    const newClassExpressionStatement = buildNewClass({ CLASS_NAME: t.identifier(className) });
    const newClassExpression = newClassExpressionStatement.expression;
    this.push(newClassExpression);
  }

  Case(IDs: Array<string>, types: Array<string>): void {
    const consequentLength = IDs.length;
    const consequents = this.pop(consequentLength, true);
    const test = this.pop(1);
    const ifElseStatementWithReturn = consequents.reduce((prev, current, index) => {
      // use instanceof to perform runtime typecheck
      const test = t.binaryExpression('instanceof', t.identifier(IDs[index]), t.identifier(types[index]));
      // put if statement in previous' else statement, and accept next else statement
      return (alternate) => prev(t.ifStatement(test, t.returnStatement(current), alternate));
    }, i => i)(null);
    this.push(JSASTBuilder.iief(ifElseStatementWithReturn, 'caseStatement'));
  }

  Block(bodyLength: number): void {
    // 1. If there were only one or less expression, with or without this is the same
    if (bodyLength <= 1) return;
    // 2. If there were more than one expression, execute some first, then return last one
    const expressions = this.pop(bodyLength, true);
    // 2.1 get lastExpression out
    const lastExpression = expressions.pop();
    // 2.2 get IIEF with 'return lastExpression'
    const IIEF = ASTBuilder.iief(lastExpression, 'codeBlock', expressions.map(expression => t.expressionStatement(expression)));
    this.push(IIEF);
  }

  While(): void {
    const [ test, body ] = this.pop(2);

    this.push(t.whileStatement(test, ASTBuilder.iief(body, 'whileBody')));
  }

  If(): void {
    const [ test, consequent, alternate ] = this.pop(3);

    this.push(t.conditionalExpression(test, ASTBuilder.iief(consequent, 'Ifconsequent'), ASTBuilder.iief(alternate, 'Ifalternate')));
  }

  OwnMethodCall(functionName: string, argumentLength: number): void {
    // Invoke build-in functions inherits from Object type, or own methods
    const functionArguments = [...this.pop(argumentLength, true)];
    const buildOwnMethodCall = template(`
      this.FUNCTION()
    `);
    const ownMethodCall = buildOwnMethodCall({
      FUNCTION: t.identifier(functionName)
    }).expression;
    ownMethodCall.arguments = functionArguments;
    this.push(ownMethodCall);
  }

  MethodCall(functionName: string, argumentLength: number, superClassName: ?string): void {
    // Invoke someObject.method()
    // superClassName currently unavailable
    const functionArguments = [...this.pop(argumentLength, true)];
    const calleeObject = this.pop(1);
    // if callee is something like (new A()) them it don't need this. , else do
    const buildMethodCall = t.isIdentifier(calleeObject)
      ? template(`this.CALLEE.FUNCTION()`)
      : template(`CALLEE.FUNCTION()`);
    const methodCall = buildMethodCall({
      CALLEE: calleeObject,
      FUNCTION: t.identifier(functionName)
    }).expression;
    methodCall.arguments = functionArguments;
    this.push(methodCall);
  }

  Assignment(variableName: string): void {
    const expression = this.pop(1);
    const buildAssignment = template(`
      let VARIABLE = EXPRESSION
    `);
    this.push(
      buildAssignment({
        VARIABLE: t.identifier(variableName), EXPRESSION: expression
      })
    );
  }

  Formal(variableName: string, typeName: string): void {
    const identifier = t.identifier(variableName);
    identifier.typeAnnotation = ASTBuilder.typeAnnotation(typeName);
    this.push(identifier);
  }

  Property(variableName: string, typeName: string): void {
    const value = this.pop(1);
    const classProperty = t.classProperty(t.identifier(variableName), value, ASTBuilder.typeAnnotation(typeName), []);
    this.push(classProperty);
  }

  Method(variableName: string, typeName: string, argumentLength: number): void {
    // 1. pop method body expression, and at least one formals(arguments)
    const expression = this.pop(1);
    const formals = [...this.pop(argumentLength, true)];
    // 2. return this expression in body block
    const returnBlock = t.blockStatement([t.returnStatement(expression)], []);
    const classMethod = t.classMethod('method', t.identifier(variableName), formals, returnBlock);
    this.push(classMethod);
  }

  ClassDefine(className: string, superClassName: ?string, featureLength: number): void {
    let methodAndProperty = [...this.pop(featureLength, true)];
    const classDeclaration = t.classDeclaration(t.identifier(className), superClassName && t.identifier(superClassName), t.classBody(methodAndProperty), []);
    this.push(classDeclaration);
  }

  Classes(): void {
    const classDefination = this.pop(1);
    this.jsProgramAST.program.body.unshift(classDefination);
  }

  Program(): void {
    // 1. put runtime on the front
    const runtimeBuilder = template(`
      class IO {
        out_string(content: ?string) {
          content ? console.log(content) : console.log();
        }
      }
    `, {
      plugins: [
        'flow'
      ]
    });
    this.jsProgramAST.program.body.unshift(runtimeBuilder({}));
    // 2. put Main class executing statement on the back
    const mainRunBuilder = template(`
      (new Main()).main();
    `);
    this.jsProgramAST.program.body.push(mainRunBuilder({}));
  }
}
