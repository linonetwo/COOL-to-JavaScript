// @ts-check @flow
import antlr4, {InputStream, CommonTokenStream} from 'antlr4';
import {COOLLexer} from './antlrGenerated/COOLLexer';
import {COOLParser} from './antlrGenerated/COOLParser';

export function parseCOOL(coolProgram: string) {
  const inputStream = new InputStream(coolProgram);
  const lexer = new COOLLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new COOLParser(tokenStream);
  parser.buildParseTrees = true;
  const coolAst = parser.program();
  return coolAst;
}
