// @ts-check @flow
import { takeRight, dropRight } from 'lodash';
import * as t from 'babel-types';
import template from 'babel-template';
import generate from 'babel-generator';

type JSASTNode = {
  type: string;
  value: string | number | void;
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
    const expression = this.pop(1);
    const buildBoolNot = template(`
      !EXPRESSION
    `);
    const newBoolNotStatement = buildBoolNot({ EXPRESSION: expression });
    const newBoolNot = newBoolNotStatement.expression;
    this.push(newBoolNot);
  }

  Equal(): void {
    const [ left, right ] = this.pop(2);
    const buildBoolNot = template(`
      LEFT === RIGHT
    `);
    const newBoolNotStatement = buildBoolNot({ LEFT: left, RIGHT: right });
    const newBoolNot = newBoolNotStatement.expression;
    this.push(newBoolNot);
  }

  NewClass(className: string): void {
    const buildNewClass = template(`
      new CLASS_NAME()
    `);
    const newClassExpressionStatement = buildNewClass({ CLASS_NAME: t.identifier(className) });
    const newClassExpression = newClassExpressionStatement.expression;
    this.push(newClassExpression);
  }
}
