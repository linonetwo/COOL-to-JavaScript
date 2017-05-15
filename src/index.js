// @ts-check @flow
import COOLListener from './antlrGenerated/COOLListener';
import fs from 'fs-transaction';
import path from 'path';

import { parseCOOL } from './parseCOOL';
import { JSBuilderVisitor } from './visitor';

async function readFile(): Promise<string> {
  const filePath: string = path.resolve(process.cwd(), './examples/hello_world.cl');
  const program: string = await fs.readFile(filePath, 'utf-8');
  return program;
}

function visitCOOL(ast) {
  const visitor = new JSBuilderVisitor();
  visitor.visit(ast);
}

readFile().then(parseCOOL).then(visitCOOL);
