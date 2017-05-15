// @ts-check @flow
import fs from 'fs-transaction';
import path from 'path';
import { ParseTreeWalker } from 'antlr4/tree';

import parseCOOL from './parseCOOL';
import GenerateJSListener from './GenerateJSListener';

async function readFile(): Promise<string> {
  const filePath: string = path.resolve(process.cwd(), './examples/io.cl');
  const program: string = await fs.readFile(filePath, 'utf-8');
  return program;
}

function visitCOOL(ast) {
  const generateJSListener = new GenerateJSListener();
  const walker = new ParseTreeWalker();
  walker.walk(generateJSListener, ast);
  console.log(generateJSListener.getJS());
}

readFile().then(parseCOOL).then(visitCOOL).catch(error => console.error(error));
