// Generated from ./src/COOL.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var COOLListener = require('./COOLListener').COOLListener;
var COOLVisitor = require('./COOLVisitor').COOLVisitor;

var grammarFileName = "COOL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00036\u00ca\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0018\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001e\n",
    "\u0003\f\u0003\u000e\u0003!\u000b\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004*",
    "\n\u0004\f\u0004\u000e\u0004-\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004;\n\u0004\u0005",
    "\u0004=\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006L\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006",
    "\u0006a\n\u0006\r\u0006\u000e\u0006b\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "m\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0005\u0006u\n\u0006\u0007\u0006w\n\u0006\f\u0006\u000e",
    "\u0006z\u000b\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0006\u0006\u0088\n\u0006\r\u0006\u000e\u0006",
    "\u0089\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0005\u0006\u009f\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u00b9\n",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u00c1\n\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    "\u00c5\n\u0006\f\u0006\u000e\u0006\u00c8\u000b\u0006\u0003\u0006\u0002",
    "\u0003\n\u0007\u0002\u0004\u0006\b\n\u0002\u0002\u0002\u00ea\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0004\u0013\u0003\u0002\u0002\u0002\u0006<",
    "\u0003\u0002\u0002\u0002\b>\u0003\u0002\u0002\u0002\n\u009e\u0003\u0002",
    "\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e\u0007\u0003\u0002\u0002",
    "\u000e\u0010\u0003\u0002\u0002\u0002\u000f\f\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002",
    "\u0011\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002",
    "\u0013\u0014\u0007\u0004\u0002\u0002\u0014\u0017\u00070\u0002\u0002",
    "\u0015\u0016\u0007\u0005\u0002\u0002\u0016\u0018\u00070\u0002\u0002",
    "\u0017\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002",
    "\u0018\u0019\u0003\u0002\u0002\u0002\u0019\u001f\u0007\u0006\u0002\u0002",
    "\u001a\u001b\u0005\u0006\u0004\u0002\u001b\u001c\u0007\u0003\u0002\u0002",
    "\u001c\u001e\u0003\u0002\u0002\u0002\u001d\u001a\u0003\u0002\u0002\u0002",
    "\u001e!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002",
    "\u001f \u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001f\u0003",
    "\u0002\u0002\u0002\"#\u0007\u0007\u0002\u0002#\u0005\u0003\u0002\u0002",
    "\u0002$%\u00071\u0002\u0002%&\u0007\b\u0002\u0002&+\u0005\b\u0005\u0002",
    "\'(\u0007\t\u0002\u0002(*\u0005\b\u0005\u0002)\'\u0003\u0002\u0002\u0002",
    "*-\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002",
    "\u0002,.\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\u0007\n",
    "\u0002\u0002/0\u0007\u000b\u0002\u000201\u00070\u0002\u000212\u0007",
    "\u0006\u0002\u000223\u0005\n\u0006\u000234\u0007\u0007\u0002\u00024",
    "=\u0003\u0002\u0002\u000256\u00071\u0002\u000267\u0007\u000b\u0002\u0002",
    "7:\u00070\u0002\u000289\u00072\u0002\u00029;\u0005\n\u0006\u0002:8\u0003",
    "\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;=\u0003\u0002\u0002\u0002",
    "<$\u0003\u0002\u0002\u0002<5\u0003\u0002\u0002\u0002=\u0007\u0003\u0002",
    "\u0002\u0002>?\u00071\u0002\u0002?@\u0007\u000b\u0002\u0002@A\u0007",
    "0\u0002\u0002A\t\u0003\u0002\u0002\u0002BC\b\u0006\u0001\u0002CD\u0007",
    "1\u0002\u0002DE\u00072\u0002\u0002E\u009f\u0005\n\u0006\u001bFG\u0007",
    "1\u0002\u0002GH\u0007\b\u0002\u0002HK\u0005\n\u0006\u0002IJ\u0007\t",
    "\u0002\u0002JL\u0005\n\u0006\u0002KI\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MN\u0007\n\u0002\u0002N",
    "\u009f\u0003\u0002\u0002\u0002OP\u0007\u001f\u0002\u0002PQ\u0005\n\u0006",
    "\u0002QR\u0007&\u0002\u0002RS\u0005\n\u0006\u0002ST\u0007\u001c\u0002",
    "\u0002TU\u0007\u001e\u0002\u0002U\u009f\u0003\u0002\u0002\u0002VW\u0007",
    "\'\u0002\u0002WX\u0005\n\u0006\u0002XY\u0007$\u0002\u0002YZ\u0005\n",
    "\u0006\u0002Z[\u0007%\u0002\u0002[\u009f\u0003\u0002\u0002\u0002\\`",
    "\u0007\u0006\u0002\u0002]^\u0005\n\u0006\u0002^_\u0007\u0003\u0002\u0002",
    "_a\u0003\u0002\u0002\u0002`]\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002de\u0007\u0007\u0002\u0002e\u009f\u0003\u0002\u0002\u0002",
    "fg\u0007#\u0002\u0002gh\u00071\u0002\u0002hi\u0007\u000b\u0002\u0002",
    "il\u00070\u0002\u0002jk\u00072\u0002\u0002km\u0005\n\u0006\u0002lj\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mx\u0003\u0002\u0002\u0002",
    "no\u0007\t\u0002\u0002op\u00071\u0002\u0002pq\u0007\u000b\u0002\u0002",
    "qt\u00070\u0002\u0002rs\u00072\u0002\u0002su\u0005\n\u0006\u0002tr\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002",
    "vn\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002y{\u0003\u0002\u0002\u0002zx\u0003\u0002",
    "\u0002\u0002{|\u0007 \u0002\u0002|\u009f\u0005\n\u0006\u0015}~\u0007",
    "(\u0002\u0002~\u007f\u0005\n\u0006\u0002\u007f\u0087\u0007+\u0002\u0002",
    "\u0080\u0081\u00071\u0002\u0002\u0081\u0082\u0007\u000b\u0002\u0002",
    "\u0082\u0083\u00070\u0002\u0002\u0083\u0084\u00074\u0002\u0002\u0084",
    "\u0085\u0005\n\u0006\u0002\u0085\u0086\u0007\u0003\u0002\u0002\u0086",
    "\u0088\u0003\u0002\u0002\u0002\u0087\u0080\u0003\u0002\u0002\u0002\u0088",
    "\u0089\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089",
    "\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b",
    "\u008c\u0007)\u0002\u0002\u008c\u009f\u0003\u0002\u0002\u0002\u008d",
    "\u008e\u0007*\u0002\u0002\u008e\u009f\u00070\u0002\u0002\u008f\u0090",
    "\u0007\"\u0002\u0002\u0090\u009f\u0005\n\u0006\u0012\u0091\u0092\u0007",
    "\u0012\u0002\u0002\u0092\u009f\u0005\n\u0006\r\u0093\u0094\u0007,\u0002",
    "\u0002\u0094\u009f\u0005\n\u0006\t\u0095\u0096\u0007\b\u0002\u0002\u0096",
    "\u0097\u0005\n\u0006\u0002\u0097\u0098\u0007\n\u0002\u0002\u0098\u009f",
    "\u0003\u0002\u0002\u0002\u0099\u009f\u00071\u0002\u0002\u009a\u009f",
    "\u0007/\u0002\u0002\u009b\u009f\u0007.\u0002\u0002\u009c\u009f\u0007",
    "-\u0002\u0002\u009d\u009f\u0007\u001d\u0002\u0002\u009eB\u0003\u0002",
    "\u0002\u0002\u009eF\u0003\u0002\u0002\u0002\u009eO\u0003\u0002\u0002",
    "\u0002\u009eV\u0003\u0002\u0002\u0002\u009e\\\u0003\u0002\u0002\u0002",
    "\u009ef\u0003\u0002\u0002\u0002\u009e}\u0003\u0002\u0002\u0002\u009e",
    "\u008d\u0003\u0002\u0002\u0002\u009e\u008f\u0003\u0002\u0002\u0002\u009e",
    "\u0091\u0003\u0002\u0002\u0002\u009e\u0093\u0003\u0002\u0002\u0002\u009e",
    "\u0095\u0003\u0002\u0002\u0002\u009e\u0099\u0003\u0002\u0002\u0002\u009e",
    "\u009a\u0003\u0002\u0002\u0002\u009e\u009b\u0003\u0002\u0002\u0002\u009e",
    "\u009c\u0003\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f",
    "\u00c6\u0003\u0002\u0002\u0002\u00a0\u00a1\f\u0011\u0002\u0002\u00a1",
    "\u00a2\u0007\u000e\u0002\u0002\u00a2\u00c5\u0005\n\u0006\u0012\u00a3",
    "\u00a4\f\u0010\u0002\u0002\u00a4\u00a5\u0007\u000f\u0002\u0002\u00a5",
    "\u00c5\u0005\n\u0006\u0011\u00a6\u00a7\f\u000f\u0002\u0002\u00a7\u00a8",
    "\u0007\u0010\u0002\u0002\u00a8\u00c5\u0005\n\u0006\u0010\u00a9\u00aa",
    "\f\u000e\u0002\u0002\u00aa\u00ab\u0007\u0011\u0002\u0002\u00ab\u00c5",
    "\u0005\n\u0006\u000f\u00ac\u00ad\f\f\u0002\u0002\u00ad\u00ae\u0007\u0013",
    "\u0002\u0002\u00ae\u00c5\u0005\n\u0006\r\u00af\u00b0\f\u000b\u0002\u0002",
    "\u00b0\u00b1\u00073\u0002\u0002\u00b1\u00c5\u0005\n\u0006\f\u00b2\u00b3",
    "\f\n\u0002\u0002\u00b3\u00b4\u0007\u0014\u0002\u0002\u00b4\u00c5\u0005",
    "\n\u0006\u000b\u00b5\u00b8\f\u001a\u0002\u0002\u00b6\u00b7\u0007\f\u0002",
    "\u0002\u00b7\u00b9\u00070\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003\u0002\u0002",
    "\u0002\u00ba\u00bb\u0007\r\u0002\u0002\u00bb\u00bc\u00071\u0002\u0002",
    "\u00bc\u00bd\u0007\b\u0002\u0002\u00bd\u00c0\u0005\n\u0006\u0002\u00be",
    "\u00bf\u0007\t\u0002\u0002\u00bf\u00c1\u0005\n\u0006\u0002\u00c0\u00be",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u00c2",
    "\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007\n\u0002\u0002\u00c3\u00c5",
    "\u0003\u0002\u0002\u0002\u00c4\u00a0\u0003\u0002\u0002\u0002\u00c4\u00a3",
    "\u0003\u0002\u0002\u0002\u00c4\u00a6\u0003\u0002\u0002\u0002\u00c4\u00a9",
    "\u0003\u0002\u0002\u0002\u00c4\u00ac\u0003\u0002\u0002\u0002\u00c4\u00af",
    "\u0003\u0002\u0002\u0002\u00c4\u00b2\u0003\u0002\u0002\u0002\u00c4\u00b5",
    "\u0003\u0002\u0002\u0002\u00c5\u00c8\u0003\u0002\u0002\u0002\u00c6\u00c4",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0003\u0002\u0002\u0002\u00c7\u000b",
    "\u0003\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u0013\u0011",
    "\u0017\u001f+:<Kbltx\u0089\u009e\u00b8\u00c0\u00c4\u00c6"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'class'", "'inherits'", "'{'", "'}'", 
                     "'('", "','", "')'", "':'", "'@'", "'.'", "'+'", "'-'", 
                     "'*'", "'/'", "'~'", "'<'", "'='", null, null, null, 
                     null, "'(*'", "'*)'", null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     "'<-'", "'<='", "'=>'", "'\n'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "DIGIT", "LETTER", "WHITESPACE", "ONE_LINE_COMMENT", 
                      "OPEN_COMMENT", "CLOSE_COMMENT", "CLASS", "ELSE", 
                      "FALSE", "FI", "IF", "IN", "INHERITS", "ISVOID", "LET", 
                      "LOOP", "POOL", "THEN", "WHILE", "CASE", "ESAC", "NEW", 
                      "OF", "NOT", "TRUE", "STRING_CONST", "INT_CONST", 
                      "TYPEID", "OBJECTID", "ASSIGNMENT", "LESS_EQUAL", 
                      "CASE_ARROW", "NEWLINE", "ERROR" ];

var ruleNames =  [ "prog", "classDefine", "feature", "formal", "expression" ];

function COOLParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

COOLParser.prototype = Object.create(antlr4.Parser.prototype);
COOLParser.prototype.constructor = COOLParser;

Object.defineProperty(COOLParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

COOLParser.EOF = antlr4.Token.EOF;
COOLParser.T__0 = 1;
COOLParser.T__1 = 2;
COOLParser.T__2 = 3;
COOLParser.T__3 = 4;
COOLParser.T__4 = 5;
COOLParser.T__5 = 6;
COOLParser.T__6 = 7;
COOLParser.T__7 = 8;
COOLParser.T__8 = 9;
COOLParser.T__9 = 10;
COOLParser.T__10 = 11;
COOLParser.T__11 = 12;
COOLParser.T__12 = 13;
COOLParser.T__13 = 14;
COOLParser.T__14 = 15;
COOLParser.T__15 = 16;
COOLParser.T__16 = 17;
COOLParser.T__17 = 18;
COOLParser.DIGIT = 19;
COOLParser.LETTER = 20;
COOLParser.WHITESPACE = 21;
COOLParser.ONE_LINE_COMMENT = 22;
COOLParser.OPEN_COMMENT = 23;
COOLParser.CLOSE_COMMENT = 24;
COOLParser.CLASS = 25;
COOLParser.ELSE = 26;
COOLParser.FALSE = 27;
COOLParser.FI = 28;
COOLParser.IF = 29;
COOLParser.IN = 30;
COOLParser.INHERITS = 31;
COOLParser.ISVOID = 32;
COOLParser.LET = 33;
COOLParser.LOOP = 34;
COOLParser.POOL = 35;
COOLParser.THEN = 36;
COOLParser.WHILE = 37;
COOLParser.CASE = 38;
COOLParser.ESAC = 39;
COOLParser.NEW = 40;
COOLParser.OF = 41;
COOLParser.NOT = 42;
COOLParser.TRUE = 43;
COOLParser.STRING_CONST = 44;
COOLParser.INT_CONST = 45;
COOLParser.TYPEID = 46;
COOLParser.OBJECTID = 47;
COOLParser.ASSIGNMENT = 48;
COOLParser.LESS_EQUAL = 49;
COOLParser.CASE_ARROW = 50;
COOLParser.NEWLINE = 51;
COOLParser.ERROR = 52;

COOLParser.RULE_prog = 0;
COOLParser.RULE_classDefine = 1;
COOLParser.RULE_feature = 2;
COOLParser.RULE_formal = 3;
COOLParser.RULE_expression = 4;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.classDefine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ClassDefineContext);
    } else {
        return this.getTypedRuleContext(ClassDefineContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitProg(this);
	}
};

ProgContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitProg(this);
    } else {
        return visitor.visitChildren(this);
    }
};




COOLParser.ProgContext = ProgContext;

COOLParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, COOLParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 10;
            this.classDefine();
            this.state = 11;
            this.match(COOLParser.T__0);
            this.state = 15; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===COOLParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ClassDefineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_classDefine;
    return this;
}

ClassDefineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ClassDefineContext.prototype.constructor = ClassDefineContext;

ClassDefineContext.prototype.TYPEID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.TYPEID);
    } else {
        return this.getToken(COOLParser.TYPEID, i);
    }
};


ClassDefineContext.prototype.feature = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FeatureContext);
    } else {
        return this.getTypedRuleContext(FeatureContext,i);
    }
};

ClassDefineContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterClassDefine(this);
	}
};

ClassDefineContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitClassDefine(this);
	}
};

ClassDefineContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitClassDefine(this);
    } else {
        return visitor.visitChildren(this);
    }
};




COOLParser.ClassDefineContext = ClassDefineContext;

COOLParser.prototype.classDefine = function() {

    var localctx = new ClassDefineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, COOLParser.RULE_classDefine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17;
        this.match(COOLParser.T__1);
        this.state = 18;
        this.match(COOLParser.TYPEID);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===COOLParser.T__2) {
            this.state = 19;
            this.match(COOLParser.T__2);
            this.state = 20;
            this.match(COOLParser.TYPEID);
        }

        this.state = 23;
        this.match(COOLParser.T__3);
        this.state = 29;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===COOLParser.OBJECTID) {
            this.state = 24;
            this.feature();
            this.state = 25;
            this.match(COOLParser.T__0);
            this.state = 31;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 32;
        this.match(COOLParser.T__4);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FeatureContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_feature;
    return this;
}

FeatureContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FeatureContext.prototype.constructor = FeatureContext;

FeatureContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

FeatureContext.prototype.formal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalContext);
    } else {
        return this.getTypedRuleContext(FormalContext,i);
    }
};

FeatureContext.prototype.TYPEID = function() {
    return this.getToken(COOLParser.TYPEID, 0);
};

FeatureContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FeatureContext.prototype.ASSIGNMENT = function() {
    return this.getToken(COOLParser.ASSIGNMENT, 0);
};

FeatureContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterFeature(this);
	}
};

FeatureContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitFeature(this);
	}
};

FeatureContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitFeature(this);
    } else {
        return visitor.visitChildren(this);
    }
};




COOLParser.FeatureContext = FeatureContext;

COOLParser.prototype.feature = function() {

    var localctx = new FeatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, COOLParser.RULE_feature);
    var _la = 0; // Token type
    try {
        this.state = 58;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 34;
            this.match(COOLParser.OBJECTID);
            this.state = 35;
            this.match(COOLParser.T__5);
            this.state = 36;
            this.formal();
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===COOLParser.T__6) {
                this.state = 37;
                this.match(COOLParser.T__6);
                this.state = 38;
                this.formal();
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 44;
            this.match(COOLParser.T__7);
            this.state = 45;
            this.match(COOLParser.T__8);
            this.state = 46;
            this.match(COOLParser.TYPEID);
            this.state = 47;
            this.match(COOLParser.T__3);
            this.state = 48;
            this.expression(0);
            this.state = 49;
            this.match(COOLParser.T__4);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 51;
            this.match(COOLParser.OBJECTID);
            this.state = 52;
            this.match(COOLParser.T__8);
            this.state = 53;
            this.match(COOLParser.TYPEID);
            this.state = 56;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===COOLParser.ASSIGNMENT) {
                this.state = 54;
                this.match(COOLParser.ASSIGNMENT);
                this.state = 55;
                this.expression(0);
            }

            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FormalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_formal;
    return this;
}

FormalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormalContext.prototype.constructor = FormalContext;

FormalContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

FormalContext.prototype.TYPEID = function() {
    return this.getToken(COOLParser.TYPEID, 0);
};

FormalContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterFormal(this);
	}
};

FormalContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitFormal(this);
	}
};

FormalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitFormal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




COOLParser.FormalContext = FormalContext;

COOLParser.prototype.formal = function() {

    var localctx = new FormalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, COOLParser.RULE_formal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 60;
        this.match(COOLParser.OBJECTID);
        this.state = 61;
        this.match(COOLParser.T__8);
        this.state = 62;
        this.match(COOLParser.TYPEID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.OBJECTID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.OBJECTID);
    } else {
        return this.getToken(COOLParser.OBJECTID, i);
    }
};


ExpressionContext.prototype.ASSIGNMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.ASSIGNMENT);
    } else {
        return this.getToken(COOLParser.ASSIGNMENT, i);
    }
};


ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.IF = function() {
    return this.getToken(COOLParser.IF, 0);
};

ExpressionContext.prototype.THEN = function() {
    return this.getToken(COOLParser.THEN, 0);
};

ExpressionContext.prototype.ELSE = function() {
    return this.getToken(COOLParser.ELSE, 0);
};

ExpressionContext.prototype.FI = function() {
    return this.getToken(COOLParser.FI, 0);
};

ExpressionContext.prototype.WHILE = function() {
    return this.getToken(COOLParser.WHILE, 0);
};

ExpressionContext.prototype.LOOP = function() {
    return this.getToken(COOLParser.LOOP, 0);
};

ExpressionContext.prototype.POOL = function() {
    return this.getToken(COOLParser.POOL, 0);
};

ExpressionContext.prototype.LET = function() {
    return this.getToken(COOLParser.LET, 0);
};

ExpressionContext.prototype.TYPEID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.TYPEID);
    } else {
        return this.getToken(COOLParser.TYPEID, i);
    }
};


ExpressionContext.prototype.IN = function() {
    return this.getToken(COOLParser.IN, 0);
};

ExpressionContext.prototype.CASE = function() {
    return this.getToken(COOLParser.CASE, 0);
};

ExpressionContext.prototype.OF = function() {
    return this.getToken(COOLParser.OF, 0);
};

ExpressionContext.prototype.ESAC = function() {
    return this.getToken(COOLParser.ESAC, 0);
};

ExpressionContext.prototype.CASE_ARROW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.CASE_ARROW);
    } else {
        return this.getToken(COOLParser.CASE_ARROW, i);
    }
};


ExpressionContext.prototype.NEW = function() {
    return this.getToken(COOLParser.NEW, 0);
};

ExpressionContext.prototype.ISVOID = function() {
    return this.getToken(COOLParser.ISVOID, 0);
};

ExpressionContext.prototype.NOT = function() {
    return this.getToken(COOLParser.NOT, 0);
};

ExpressionContext.prototype.INT_CONST = function() {
    return this.getToken(COOLParser.INT_CONST, 0);
};

ExpressionContext.prototype.STRING_CONST = function() {
    return this.getToken(COOLParser.STRING_CONST, 0);
};

ExpressionContext.prototype.TRUE = function() {
    return this.getToken(COOLParser.TRUE, 0);
};

ExpressionContext.prototype.FALSE = function() {
    return this.getToken(COOLParser.FALSE, 0);
};

ExpressionContext.prototype.LESS_EQUAL = function() {
    return this.getToken(COOLParser.LESS_EQUAL, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



COOLParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, COOLParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 65;
            this.match(COOLParser.OBJECTID);
            this.state = 66;
            this.match(COOLParser.ASSIGNMENT);
            this.state = 67;
            this.expression(25);
            break;

        case 2:
            this.state = 68;
            this.match(COOLParser.OBJECTID);
            this.state = 69;
            this.match(COOLParser.T__5);
            this.state = 70;
            this.expression(0);
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===COOLParser.T__6) {
                this.state = 71;
                this.match(COOLParser.T__6);
                this.state = 72;
                this.expression(0);
            }

            this.state = 75;
            this.match(COOLParser.T__7);
            break;

        case 3:
            this.state = 77;
            this.match(COOLParser.IF);
            this.state = 78;
            this.expression(0);
            this.state = 79;
            this.match(COOLParser.THEN);
            this.state = 80;
            this.expression(0);
            this.state = 81;
            this.match(COOLParser.ELSE);
            this.state = 82;
            this.match(COOLParser.FI);
            break;

        case 4:
            this.state = 84;
            this.match(COOLParser.WHILE);
            this.state = 85;
            this.expression(0);
            this.state = 86;
            this.match(COOLParser.LOOP);
            this.state = 87;
            this.expression(0);
            this.state = 88;
            this.match(COOLParser.POOL);
            break;

        case 5:
            this.state = 90;
            this.match(COOLParser.T__3);
            this.state = 94; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 91;
                this.expression(0);
                this.state = 92;
                this.match(COOLParser.T__0);
                this.state = 96; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__3) | (1 << COOLParser.T__5) | (1 << COOLParser.T__15) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (COOLParser.ISVOID - 32)) | (1 << (COOLParser.LET - 32)) | (1 << (COOLParser.WHILE - 32)) | (1 << (COOLParser.CASE - 32)) | (1 << (COOLParser.NEW - 32)) | (1 << (COOLParser.NOT - 32)) | (1 << (COOLParser.TRUE - 32)) | (1 << (COOLParser.STRING_CONST - 32)) | (1 << (COOLParser.INT_CONST - 32)) | (1 << (COOLParser.OBJECTID - 32)))) !== 0));
            this.state = 98;
            this.match(COOLParser.T__4);
            break;

        case 6:
            this.state = 100;
            this.match(COOLParser.LET);
            this.state = 101;
            this.match(COOLParser.OBJECTID);
            this.state = 102;
            this.match(COOLParser.T__8);
            this.state = 103;
            this.match(COOLParser.TYPEID);
            this.state = 106;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===COOLParser.ASSIGNMENT) {
                this.state = 104;
                this.match(COOLParser.ASSIGNMENT);
                this.state = 105;
                this.expression(0);
            }

            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===COOLParser.T__6) {
                this.state = 108;
                this.match(COOLParser.T__6);
                this.state = 109;
                this.match(COOLParser.OBJECTID);
                this.state = 110;
                this.match(COOLParser.T__8);
                this.state = 111;
                this.match(COOLParser.TYPEID);
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===COOLParser.ASSIGNMENT) {
                    this.state = 112;
                    this.match(COOLParser.ASSIGNMENT);
                    this.state = 113;
                    this.expression(0);
                }

                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 121;
            this.match(COOLParser.IN);
            this.state = 122;
            this.expression(19);
            break;

        case 7:
            this.state = 123;
            this.match(COOLParser.CASE);
            this.state = 124;
            this.expression(0);
            this.state = 125;
            this.match(COOLParser.OF);
            this.state = 133; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 126;
                this.match(COOLParser.OBJECTID);
                this.state = 127;
                this.match(COOLParser.T__8);
                this.state = 128;
                this.match(COOLParser.TYPEID);
                this.state = 129;
                this.match(COOLParser.CASE_ARROW);
                this.state = 130;
                this.expression(0);
                this.state = 131;
                this.match(COOLParser.T__0);
                this.state = 135; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===COOLParser.OBJECTID);
            this.state = 137;
            this.match(COOLParser.ESAC);
            break;

        case 8:
            this.state = 139;
            this.match(COOLParser.NEW);
            this.state = 140;
            this.match(COOLParser.TYPEID);
            break;

        case 9:
            this.state = 141;
            this.match(COOLParser.ISVOID);
            this.state = 142;
            this.expression(16);
            break;

        case 10:
            this.state = 143;
            this.match(COOLParser.T__15);
            this.state = 144;
            this.expression(11);
            break;

        case 11:
            this.state = 145;
            this.match(COOLParser.NOT);
            this.state = 146;
            this.expression(7);
            break;

        case 12:
            this.state = 147;
            this.match(COOLParser.T__5);
            this.state = 148;
            this.expression(0);
            this.state = 149;
            this.match(COOLParser.T__7);
            break;

        case 13:
            this.state = 151;
            this.match(COOLParser.OBJECTID);
            break;

        case 14:
            this.state = 152;
            this.match(COOLParser.INT_CONST);
            break;

        case 15:
            this.state = 153;
            this.match(COOLParser.STRING_CONST);
            break;

        case 16:
            this.state = 154;
            this.match(COOLParser.TRUE);
            break;

        case 17:
            this.state = 155;
            this.match(COOLParser.FALSE);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 196;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 194;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 158;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 159;
                    this.match(COOLParser.T__11);
                    this.state = 160;
                    this.expression(16);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 161;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 162;
                    this.match(COOLParser.T__12);
                    this.state = 163;
                    this.expression(15);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 164;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 165;
                    this.match(COOLParser.T__13);
                    this.state = 166;
                    this.expression(14);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 167;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 168;
                    this.match(COOLParser.T__14);
                    this.state = 169;
                    this.expression(13);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 170;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 171;
                    this.match(COOLParser.T__16);
                    this.state = 172;
                    this.expression(11);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 173;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 174;
                    this.match(COOLParser.LESS_EQUAL);
                    this.state = 175;
                    this.expression(10);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 176;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 177;
                    this.match(COOLParser.T__17);
                    this.state = 178;
                    this.expression(9);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 179;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 182;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===COOLParser.T__9) {
                        this.state = 180;
                        this.match(COOLParser.T__9);
                        this.state = 181;
                        this.match(COOLParser.TYPEID);
                    }

                    this.state = 184;
                    this.match(COOLParser.T__10);
                    this.state = 185;
                    this.match(COOLParser.OBJECTID);
                    this.state = 186;
                    this.match(COOLParser.T__5);
                    this.state = 187;
                    this.expression(0);
                    this.state = 190;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===COOLParser.T__6) {
                        this.state = 188;
                        this.match(COOLParser.T__6);
                        this.state = 189;
                        this.expression(0);
                    }

                    this.state = 192;
                    this.match(COOLParser.T__7);
                    break;

                } 
            }
            this.state = 198;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


COOLParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 4:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

COOLParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 15);
		case 1:
			return this.precpred(this._ctx, 14);
		case 2:
			return this.precpred(this._ctx, 13);
		case 3:
			return this.precpred(this._ctx, 12);
		case 4:
			return this.precpred(this._ctx, 10);
		case 5:
			return this.precpred(this._ctx, 9);
		case 6:
			return this.precpred(this._ctx, 8);
		case 7:
			return this.precpred(this._ctx, 24);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.COOLParser = COOLParser;
