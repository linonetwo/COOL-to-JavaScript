# COOL-to-JavaScript

Compile ClassroomObjectOrientedLanguage to EcmaScript6+, and provide a single .html playground for GUI user.

## dataflow

1. user choose a *.cl file
1. load *.cl file, show in editor
1. on editor change, send content to lexer, to parser, get a COOL AST
1. visit COOL AST, build an ES6 AST
1. generate ES6 code from ES6 AST
1. show ES6 code in UI
1. transform ES6 to vanilla JS (maybe optional)
1. execute JS in an iframe, given *.std as input
1. user feeling happy, choose another *.cl

## referencce

[antlr-ts 使用经验（过时的）](http://www.jianshu.com/p/0438cfa74a3c)
[antlr4使用经验](https://abcdabcd987.com/using-antlr4/)
[antlr4小教程](https://dohkoos.gitbooks.io/antlr4-short-course/content/basic-concept.html)
[JSON.g4 example](https://github.com/antlr/grammars-v4/blob/master/json/JSON.g4)
[剖析Babel——Babel总览](http://www.alloyteam.com/2017/04/analysis-of-babel-babel-overview/)
[babel-types at npm](https://www.npmjs.com/package/babel-types)
[babel-types usage at its test](https://github.com/babel/babel/blob/7.0/packages/babel-types/test/converters.js)
[Understanding ASTs by Building Your Own Babel Plugin（illustrating ES AST）](https://www.sitepoint.com/understanding-asts-building-babel-plugin/)

## sponsor

[songfu](http://sist.shanghaitech.edu.cn/faculty/songfu/course/spring2017/cs131/)
[linonetwo](http://onetwo.ren/)
