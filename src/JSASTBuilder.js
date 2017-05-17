// @ts-check @flow
import { takeRight, dropRight } from 'lodash';
import * as t from 'babel-types';
import template from 'babel-template';
import generate from 'babel-generator';

type JSASTNode = {
  type: string;
  value: string | number | boolean | void;
};

export class ASTStack {
  // We use stack to temporarly store subtree of AST, then you can use popFor() to load subtree in the stack into a container tree node
  jsASTStack: Array<JSASTNode> = [];

  push(subAST: JSASTNode): void {
    this.jsASTStack.push(subAST);
  }

  pop(quentity: number): JSASTNode | Array<JSASTNode> {
    if (this.jsASTStack.length < quentity) {
      throw new Error(`Poping too many sub-AST from JSASTStack, poping ${quentity} but stack with length ${this.jsASTStack.length} is:`, this.jsASTStack);
    }
    if (quentity > 1) {
      const nodes = takeRight(this.jsASTStack, quentity);
      this.jsASTStack = dropRight(this.jsASTStack, quentity);
      return nodes;
    }
    return this.jsASTStack.pop();
  }


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

  iief(ast: any, functionName: string): JSASTNode {
    // 1. if it is a code block, which in JS is a IIEF
    if (t.isCallExpression(ast)) {
      const buildIIEF = template(`
        (function ${functionName}() {return null})()
      `);
      const IIEF = buildIIEF({
      }).expression;
      // set return value
      IIEF.callee.body.body[0].argument = ast;
      return IIEF;
    } else
    // 2. if it is a single assignment, how can a humen do this?
    if (t.isVariableDeclaration(ast)) {
      const buildIIEF = template(`
        (function ${functionName}() {STATEMENT})()
      `);
      const IIEF = buildIIEF({
        STATEMENT: ast
      }).expression;
      return IIEF;
    } else {
    // 3. it is a expression
      return ast;
    }
  }

  // For debug usage, return generated codes for ASTs
  get codes(): Array<string> {
    return this.jsASTStack
      .map(ast => generate(ast, { quotes: 'single' }))
      .map(output => output.code);
  }
}

export default class JSASTBuilder extends ASTStack {
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
    this.push(t.identifier(content));
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

  Case() {
  }

  If(): void {
    const [ test, consequent, alternate ] = this.pop(3);

    this.push(t.conditionalExpression(test, this.iief(consequent, 'Ifconsequent'), this.iief(alternate, 'Ifalternate')));
  }

  OwnMethod(functionName: string, argumentLength: number): void {
    // Invoke build-in functions
    const functionArguments = [...this.pop(argumentLength)];
    const buildFunctionCall = template(`
      this.FUNCTION()
    `);
    const ownMethod = buildOwnMethod({
      FUNCTION: t.identifier(functionName)
    }).expression;
    ownMethod.arguments = functionArguments;
    this.push(ownMethod);
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
}
