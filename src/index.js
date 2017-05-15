// @ts-check @flow
import antlr4, {InputStream, CommonTokenStream} from 'antlr4';
import {COOLLexer} from './antlrGenerated/COOLLexer';
import {COOLParser} from './antlrGenerated/COOLParser';
import COOLListener from './antlrGenerated/COOLListener';
import fs from 'fs-transaction';
import path from 'path';


export async function readFile(): Promise<string> {
  const filePath: string = path.resolve(process.cwd(), './examples/hairyscary.cl');
  const program: string = await fs.readFile(filePath, 'utf-8');
  return program;
}

export function parseCOOL(coolProgram: string) {
  const inputStream = new InputStream(coolProgram);
  const lexer = new COOLLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new COOLParser(tokenStream);
  parser.buildParseTrees = true;
  const coolAst = parser.program();
  // console.log(coolAst);
}

readFile().then(parseCOOL);
