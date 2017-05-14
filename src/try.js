// @ts-check @flow
import antlr4, {InputStream, CommonTokenStream} from 'antlr4';
import {COOLLexer} from './antlrGenerated/COOLLexer';
import {COOLParser} from './antlrGenerated/COOLParser';
import COOLListener from './antlrGenerated/COOLListener';


const input: string = 'hello parrt';
const inputStream = new InputStream(input);
const lexer = new COOLLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new COOLParser(tokenStream);


// Parse the input, where `compilationUnit` is whatever entry point you defined
let result = parser.r();

console.log(result.toStringTree());
