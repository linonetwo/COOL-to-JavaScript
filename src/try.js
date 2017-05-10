var input = 'your text to parse here'
var chars = CharStreams.fromString(input)
var lexer = new MyGrammarLexer.MyGrammarLexer(chars)
var tokens = new antlr4.CommonTokenStream(lexer)
var parser = new MyGrammarParser.MyGrammarParser(tokens)
parser.buildParseTrees = true
var tree = parser.MyStartRule()