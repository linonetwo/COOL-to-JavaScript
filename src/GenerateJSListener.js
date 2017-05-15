// @ts-check @flow
import * as types from 'babel-types';
import generate from 'babel-generator';
import { COOLParser } from './antlrGenerated/COOLParser';
import { COOLListener } from './antlrGenerated/COOLListener';

type GeneratedOutput = { code: string, map: any, rawMappings: any };


export default class GenerateJSListener extends COOLListener {
  jsAST: any

  exitClass(context: COOLParser.ClassContext) {
    this.jsAST = types.VariableDeclaration(
      'var',
      [
        types.VariableDeclarator(
          types.Identifier('a'),
          types.NumericLiteral(1)
        )
      ]
    );
  }

  getJS(): string {
    const output: GeneratedOutput = generate(this.jsAST, { quotes: 'single' });
    return output.code;
  }
}
