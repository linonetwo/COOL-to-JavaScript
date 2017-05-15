// @ts-check @flow
import {parse} from 'babylon';
import * as types from 'babel-types';
import generate from 'babel-generator';

const ast = types.VariableDeclaration(
  'var',
  [
    types.VariableDeclarator(
      types.Identifier('a'),
      types.NumericLiteral(1)
    )
  ]
);
const output = generate(ast, { quotes: 'single' });
// console.log(JSON.stringify(ast, null, '  '));

console.log(output);
