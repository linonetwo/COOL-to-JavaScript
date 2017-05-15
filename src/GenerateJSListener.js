// @ts-check @flow
import * as types from 'babel-types';
import traverse from 'babel-traverse';
import template from 'babel-template';
import generate from 'babel-generator';
import { COOLParser } from './antlrGenerated/COOLParser';
import { COOLListener } from './antlrGenerated/COOLListener';

type GeneratedOutput = { code: string, map: any, rawMappings: any };

type ClassNames = [string, ?string];

export default class GenerateJSListener extends COOLListener {
  jsAST: any = types.file(types.program([]))

  enterClassDefine(context: COOLParser.ClassDefineContext): void {
    // from 'class Main inherits IO' get 'Main' and 'IO'
    const [ className, superClassName ]: ClassNames = context.TYPEID().filter(i => i).map(item => item.symbol.text);
    // 1. get JS AST
    let classDeclaration;
    if (className === 'Main') {
      // 1.a If Class is Main, turn it into an IIFE
      const IIFEBuilder = template(`
        (function FUNCTION_NAME(props) {
        })()
      `);
      classDeclaration = IIFEBuilder({
        FUNCTION_NAME: types.identifier(className),
      });
    } else {
      // 1.b For normal classes, Declare the class
      classDeclaration = types.classDeclaration(
        types.Identifier(className),
        superClassName ? types.Identifier(superClassName) : null,
        types.classBody([]),
        []
      );
    }

    // 2. Put this class declearation into program
    traverse(this.jsAST, {
      enter(path) {
        if (types.isProgram(path.node)) {
          path.node.body.push(classDeclaration);
        }
      }
    });
  }

  exitInt(context: COOLParser.IntContext): void {

  }

  getJS(): string {
    const output: GeneratedOutput = generate(this.jsAST, { quotes: 'single' });
    return output.code;
  }
}
