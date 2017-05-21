// @ts-check @flow
// using babel-plugin-static-fs
import { readFileSync } from 'fs';
import { join } from 'path';
import { ParseTreeWalker } from 'antlr4/tree';

import parseCOOL from './parseCOOL';
import GenerateJSListener from './GenerateJSListener';

const exampleFiles = {
  // using babel-plugin-static-fs
  arith: readFileSync(join(__dirname, '../examples/arith.cl'), 'utf8'),
  atoi: readFileSync(join(__dirname, '../examples/atoi.cl'), 'utf8'),
  atoi_test: readFileSync(join(__dirname, '../examples/atoi_test.cl'), 'utf8'),
  list: readFileSync(join(__dirname, '../examples/list.cl'), 'utf8'),
  book_list: readFileSync(join(__dirname, '../examples/book_list.cl'), 'utf8'),
  cells: readFileSync(join(__dirname, '../examples/cells.cl'), 'utf8'),
  cool: readFileSync(join(__dirname, '../examples/cool.cl'), 'utf8'),
  io: readFileSync(join(__dirname, '../examples/io.cl'), 'utf8'),
  hairyscary: readFileSync(join(__dirname, '../examples/hairyscary.cl'), 'utf8'),
  hello_world: readFileSync(join(__dirname, '../examples/hello_world.cl'), 'utf8'),
  primes: readFileSync(join(__dirname, '../examples/primes.cl'), 'utf8'),
  graph: readFileSync(join(__dirname, '../examples/graph.cl'), 'utf8'),
  g1: readFileSync(join(__dirname, '../examples/g1.graph'), 'utf8'),
  palindrome: readFileSync(join(__dirname, '../examples/palindrome.cl'), 'utf8'),
  complex: readFileSync(join(__dirname, '../examples/complex.cl'), 'utf8'),
  life: readFileSync(join(__dirname, '../examples/life.cl'), 'utf8'),
  sort_list: readFileSync(join(__dirname, '../examples/sort_list.cl'), 'utf8')
};

async function readFile(): Promise<string> {
  const program: string = exampleFiles['hairyscary'];
  return program;
}

function visitCOOL(ast) {
  const generateJSListener = new GenerateJSListener();
  const walker = new ParseTreeWalker();
  walker.walk(generateJSListener, ast);
  return generateJSListener;
}

function generateJS(generateJSListener) {
  return generateJSListener.generateJS();
}

readFile().then(parseCOOL).then(visitCOOL).then(generateJS).then(console.log).catch(error => console.error(error));
