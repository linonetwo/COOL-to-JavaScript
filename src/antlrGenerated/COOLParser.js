// Generated from ./src/COOL.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var COOLListener = require('./COOLListener').COOLListener;
var COOLVisitor = require('./COOLVisitor').COOLVisitor;

var grammarFileName = "COOL.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00031\u00e2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003\u0016\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004\u001c\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004\"\n\u0004\f\u0004\u000e\u0004%\u000b",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005.\n\u0005\f\u0005\u000e\u00051\u000b\u0005",
    "\u0007\u00053\n\u0005\f\u0005\u000e\u00056\u000b\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005D",
    "\n\u0005\u0005\u0005F\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007U\n\u0007\f\u0007",
    "\u000e\u0007X\u000b\u0007\u0007\u0007Z\n\u0007\f\u0007\u000e\u0007]",
    "\u000b\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0006\u0007r\n\u0007\r\u0007\u000e\u0007s\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007~\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0086\n\u0007",
    "\u0007\u0007\u0088\n\u0007\f\u0007\u000e\u0007\u008b\u000b\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0006",
    "\u0007\u0099\n\u0007\r\u0007\u000e\u0007\u009a\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u00b0\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007\u00ca\n\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00d2\n",
    "\u0007\f\u0007\u000e\u0007\u00d5\u000b\u0007\u0007\u0007\u00d7\n\u0007",
    "\f\u0007\u000e\u0007\u00da\u000b\u0007\u0003\u0007\u0007\u0007\u00dd",
    "\n\u0007\f\u0007\u000e\u0007\u00e0\u000b\u0007\u0003\u0007\u0002\u0003",
    "\f\b\u0002\u0004\u0006\b\n\f\u0002\u0002\u0002\u0104\u0002\u000e\u0003",
    "\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002\u0002\u0006\u0017\u0003",
    "\u0002\u0002\u0002\bE\u0003\u0002\u0002\u0002\nG\u0003\u0002\u0002\u0002",
    "\f\u00af\u0003\u0002\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002",
    "\u000f\u0003\u0003\u0002\u0002\u0002\u0010\u0011\u0005\u0006\u0004\u0002",
    "\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0013\u0005\u0004\u0003\u0002",
    "\u0013\u0016\u0003\u0002\u0002\u0002\u0014\u0016\u0007\u0002\u0002\u0003",
    "\u0015\u0010\u0003\u0002\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002",
    "\u0016\u0005\u0003\u0002\u0002\u0002\u0017\u0018\u0007\u0011\u0002\u0002",
    "\u0018\u001b\u0007&\u0002\u0002\u0019\u001a\u0007\u0017\u0002\u0002",
    "\u001a\u001c\u0007&\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002",
    "\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002",
    "\u001d#\u0007\u0004\u0002\u0002\u001e\u001f\u0005\b\u0005\u0002\u001f",
    " \u0007\u0003\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u001e\u0003\u0002",
    "\u0002\u0002\"%\u0003\u0002\u0002\u0002#!\u0003\u0002\u0002\u0002#$",
    "\u0003\u0002\u0002\u0002$&\u0003\u0002\u0002\u0002%#\u0003\u0002\u0002",
    "\u0002&\'\u0007\u0005\u0002\u0002\'\u0007\u0003\u0002\u0002\u0002()",
    "\u0007\'\u0002\u0002)4\u0007\u0006\u0002\u0002*/\u0005\n\u0006\u0002",
    "+,\u0007\u0007\u0002\u0002,.\u0005\n\u0006\u0002-+\u0003\u0002\u0002",
    "\u0002.1\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u00022*\u0003",
    "\u0002\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u0002",
    "45\u0003\u0002\u0002\u000257\u0003\u0002\u0002\u000264\u0003\u0002\u0002",
    "\u000278\u0007\b\u0002\u000289\u0007\t\u0002\u00029:\u0007&\u0002\u0002",
    ":;\u0007\u0004\u0002\u0002;<\u0005\f\u0007\u0002<=\u0007\u0005\u0002",
    "\u0002=F\u0003\u0002\u0002\u0002>?\u0007\'\u0002\u0002?@\u0007\t\u0002",
    "\u0002@C\u0007&\u0002\u0002AB\u0007(\u0002\u0002BD\u0005\f\u0007\u0002",
    "CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DF\u0003\u0002\u0002",
    "\u0002E(\u0003\u0002\u0002\u0002E>\u0003\u0002\u0002\u0002F\t\u0003",
    "\u0002\u0002\u0002GH\u0007\'\u0002\u0002HI\u0007\t\u0002\u0002IJ\u0007",
    "&\u0002\u0002J\u000b\u0003\u0002\u0002\u0002KL\b\u0007\u0001\u0002L",
    "M\u0007\'\u0002\u0002MN\u0007(\u0002\u0002N\u00b0\u0005\f\u0007\u001b",
    "OP\u0007\'\u0002\u0002P[\u0007\u0006\u0002\u0002QV\u0005\f\u0007\u0002",
    "RS\u0007\u0007\u0002\u0002SU\u0005\f\u0007\u0002TR\u0003\u0002\u0002",
    "\u0002UX\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002VW\u0003\u0002",
    "\u0002\u0002WZ\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002YQ\u0003",
    "\u0002\u0002\u0002Z]\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002",
    "[\\\u0003\u0002\u0002\u0002\\^\u0003\u0002\u0002\u0002][\u0003\u0002",
    "\u0002\u0002^\u00b0\u0007\b\u0002\u0002_`\u0007\u0015\u0002\u0002`a",
    "\u0005\f\u0007\u0002ab\u0007\u001c\u0002\u0002bc\u0005\f\u0007\u0002",
    "cd\u0007\u0012\u0002\u0002de\u0005\f\u0007\u0002ef\u0007\u0014\u0002",
    "\u0002f\u00b0\u0003\u0002\u0002\u0002gh\u0007\u001d\u0002\u0002hi\u0005",
    "\f\u0007\u0002ij\u0007\u001a\u0002\u0002jk\u0005\f\u0007\u0002kl\u0007",
    "\u001b\u0002\u0002l\u00b0\u0003\u0002\u0002\u0002mq\u0007\u0004\u0002",
    "\u0002no\u0005\f\u0007\u0002op\u0007\u0003\u0002\u0002pr\u0003\u0002",
    "\u0002\u0002qn\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002sq\u0003",
    "\u0002\u0002\u0002st\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002",
    "uv\u0007\u0005\u0002\u0002v\u00b0\u0003\u0002\u0002\u0002wx\u0007\u0019",
    "\u0002\u0002xy\u0007\'\u0002\u0002yz\u0007\t\u0002\u0002z}\u0007&\u0002",
    "\u0002{|\u0007(\u0002\u0002|~\u0005\f\u0007\u0002}{\u0003\u0002\u0002",
    "\u0002}~\u0003\u0002\u0002\u0002~\u0089\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0007\u0007\u0002\u0002\u0080\u0081\u0007\'\u0002\u0002\u0081",
    "\u0082\u0007\t\u0002\u0002\u0082\u0085\u0007&\u0002\u0002\u0083\u0084",
    "\u0007(\u0002\u0002\u0084\u0086\u0005\f\u0007\u0002\u0085\u0083\u0003",
    "\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088\u0003",
    "\u0002\u0002\u0002\u0087\u007f\u0003\u0002\u0002\u0002\u0088\u008b\u0003",
    "\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003",
    "\u0002\u0002\u0002\u008a\u008c\u0003\u0002\u0002\u0002\u008b\u0089\u0003",
    "\u0002\u0002\u0002\u008c\u008d\u0007\u0016\u0002\u0002\u008d\u00b0\u0005",
    "\f\u0007\u0015\u008e\u008f\u0007\u001e\u0002\u0002\u008f\u0090\u0005",
    "\f\u0007\u0002\u0090\u0098\u0007!\u0002\u0002\u0091\u0092\u0007\'\u0002",
    "\u0002\u0092\u0093\u0007\t\u0002\u0002\u0093\u0094\u0007&\u0002\u0002",
    "\u0094\u0095\u0007)\u0002\u0002\u0095\u0096\u0005\f\u0007\u0002\u0096",
    "\u0097\u0007\u0003\u0002\u0002\u0097\u0099\u0003\u0002\u0002\u0002\u0098",
    "\u0091\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002\u0002\u009a",
    "\u0098\u0003\u0002\u0002\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b",
    "\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0007\u001f\u0002\u0002\u009d",
    "\u00b0\u0003\u0002\u0002\u0002\u009e\u009f\u0007 \u0002\u0002\u009f",
    "\u00b0\u0007&\u0002\u0002\u00a0\u00a1\u00071\u0002\u0002\u00a1\u00b0",
    "\u0005\f\u0007\u0012\u00a2\u00a3\u0007\u0018\u0002\u0002\u00a3\u00b0",
    "\u0005\f\u0007\u0011\u00a4\u00a5\u0007\"\u0002\u0002\u00a5\u00b0\u0005",
    "\f\u0007\t\u00a6\u00a7\u0007\u0006\u0002\u0002\u00a7\u00a8\u0005\f\u0007",
    "\u0002\u00a8\u00a9\u0007\b\u0002\u0002\u00a9\u00b0\u0003\u0002\u0002",
    "\u0002\u00aa\u00b0\u0007\'\u0002\u0002\u00ab\u00b0\u0007%\u0002\u0002",
    "\u00ac\u00b0\u0007$\u0002\u0002\u00ad\u00b0\u0007#\u0002\u0002\u00ae",
    "\u00b0\u0007\u0013\u0002\u0002\u00afK\u0003\u0002\u0002\u0002\u00af",
    "O\u0003\u0002\u0002\u0002\u00af_\u0003\u0002\u0002\u0002\u00afg\u0003",
    "\u0002\u0002\u0002\u00afm\u0003\u0002\u0002\u0002\u00afw\u0003\u0002",
    "\u0002\u0002\u00af\u008e\u0003\u0002\u0002\u0002\u00af\u009e\u0003\u0002",
    "\u0002\u0002\u00af\u00a0\u0003\u0002\u0002\u0002\u00af\u00a2\u0003\u0002",
    "\u0002\u0002\u00af\u00a4\u0003\u0002\u0002\u0002\u00af\u00a6\u0003\u0002",
    "\u0002\u0002\u00af\u00aa\u0003\u0002\u0002\u0002\u00af\u00ab\u0003\u0002",
    "\u0002\u0002\u00af\u00ac\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002",
    "\u0002\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00b0\u00de\u0003\u0002",
    "\u0002\u0002\u00b1\u00b2\f\u0010\u0002\u0002\u00b2\u00b3\u0007,\u0002",
    "\u0002\u00b3\u00dd\u0005\f\u0007\u0011\u00b4\u00b5\f\u000f\u0002\u0002",
    "\u00b5\u00b6\u0007-\u0002\u0002\u00b6\u00dd\u0005\f\u0007\u0010\u00b7",
    "\u00b8\f\u000e\u0002\u0002\u00b8\u00b9\u0007*\u0002\u0002\u00b9\u00dd",
    "\u0005\f\u0007\u000f\u00ba\u00bb\f\r\u0002\u0002\u00bb\u00bc\u0007+",
    "\u0002\u0002\u00bc\u00dd\u0005\f\u0007\u000e\u00bd\u00be\f\f\u0002\u0002",
    "\u00be\u00bf\u0007.\u0002\u0002\u00bf\u00dd\u0005\f\u0007\r\u00c0\u00c1",
    "\f\u000b\u0002\u0002\u00c1\u00c2\u0007/\u0002\u0002\u00c2\u00dd\u0005",
    "\f\u0007\f\u00c3\u00c4\f\n\u0002\u0002\u00c4\u00c5\u00070\u0002\u0002",
    "\u00c5\u00dd\u0005\f\u0007\u000b\u00c6\u00c9\f\u001a\u0002\u0002\u00c7",
    "\u00c8\u0007\n\u0002\u0002\u00c8\u00ca\u0007&\u0002\u0002\u00c9\u00c7",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007\u000b\u0002\u0002\u00cc\u00cd",
    "\u0007\'\u0002\u0002\u00cd\u00d8\u0007\u0006\u0002\u0002\u00ce\u00d3",
    "\u0005\f\u0007\u0002\u00cf\u00d0\u0007\u0007\u0002\u0002\u00d0\u00d2",
    "\u0005\f\u0007\u0002\u00d1\u00cf\u0003\u0002\u0002\u0002\u00d2\u00d5",
    "\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d3\u00d4",
    "\u0003\u0002\u0002\u0002\u00d4\u00d7\u0003\u0002\u0002\u0002\u00d5\u00d3",
    "\u0003\u0002\u0002\u0002\u00d6\u00ce\u0003\u0002\u0002\u0002\u00d7\u00da",
    "\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002\u0002\u0002\u00d8\u00d9",
    "\u0003\u0002\u0002\u0002\u00d9\u00db\u0003\u0002\u0002\u0002\u00da\u00d8",
    "\u0003\u0002\u0002\u0002\u00db\u00dd\u0007\b\u0002\u0002\u00dc\u00b1",
    "\u0003\u0002\u0002\u0002\u00dc\u00b4\u0003\u0002\u0002\u0002\u00dc\u00b7",
    "\u0003\u0002\u0002\u0002\u00dc\u00ba\u0003\u0002\u0002\u0002\u00dc\u00bd",
    "\u0003\u0002\u0002\u0002\u00dc\u00c0\u0003\u0002\u0002\u0002\u00dc\u00c3",
    "\u0003\u0002\u0002\u0002\u00dc\u00c6\u0003\u0002\u0002\u0002\u00dd\u00e0",
    "\u0003\u0002\u0002\u0002\u00de\u00dc\u0003\u0002\u0002\u0002\u00de\u00df",
    "\u0003\u0002\u0002\u0002\u00df\r\u0003\u0002\u0002\u0002\u00e0\u00de",
    "\u0003\u0002\u0002\u0002\u0016\u0015\u001b#/4CEV[s}\u0085\u0089\u009a",
    "\u00af\u00c9\u00d3\u00d8\u00dc\u00de"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'{'", "'}'", "'('", "','", "')'", "':'", 
                     "'@'", "'.'", null, "'(*'", "'*)'", null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, "'<-'", "'=>'", "'+'", "'-'", 
                     "'*'", "'/'", "'<'", "'<='", "'='", "'~'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "WHITESPACE", "OPEN_COMMENT", "CLOSE_COMMENT", 
                      "COMMENT", "ONE_LINE_COMMENT", "CLASS", "ELSE", "FALSE", 
                      "FI", "IF", "IN", "INHERITS", "ISVOID", "LET", "LOOP", 
                      "POOL", "THEN", "WHILE", "CASE", "ESAC", "NEW", "OF", 
                      "NOT", "TRUE", "STRING", "INT", "TYPEID", "OBJECTID", 
                      "ASSIGNMENT", "CASE_ARROW", "ADD", "MINUS", "MULTIPLY", 
                      "DIVISION", "LESS_THAN", "LESS_EQUAL", "EQUAL", "INTEGER_NEGATIVE" ];

var ruleNames =  [ "program", "programBlocks", "classDefine", "feature", 
                   "formal", "expression" ];

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
COOLParser.WHITESPACE = 10;
COOLParser.OPEN_COMMENT = 11;
COOLParser.CLOSE_COMMENT = 12;
COOLParser.COMMENT = 13;
COOLParser.ONE_LINE_COMMENT = 14;
COOLParser.CLASS = 15;
COOLParser.ELSE = 16;
COOLParser.FALSE = 17;
COOLParser.FI = 18;
COOLParser.IF = 19;
COOLParser.IN = 20;
COOLParser.INHERITS = 21;
COOLParser.ISVOID = 22;
COOLParser.LET = 23;
COOLParser.LOOP = 24;
COOLParser.POOL = 25;
COOLParser.THEN = 26;
COOLParser.WHILE = 27;
COOLParser.CASE = 28;
COOLParser.ESAC = 29;
COOLParser.NEW = 30;
COOLParser.OF = 31;
COOLParser.NOT = 32;
COOLParser.TRUE = 33;
COOLParser.STRING = 34;
COOLParser.INT = 35;
COOLParser.TYPEID = 36;
COOLParser.OBJECTID = 37;
COOLParser.ASSIGNMENT = 38;
COOLParser.CASE_ARROW = 39;
COOLParser.ADD = 40;
COOLParser.MINUS = 41;
COOLParser.MULTIPLY = 42;
COOLParser.DIVISION = 43;
COOLParser.LESS_THAN = 44;
COOLParser.LESS_EQUAL = 45;
COOLParser.EQUAL = 46;
COOLParser.INTEGER_NEGATIVE = 47;

COOLParser.RULE_program = 0;
COOLParser.RULE_programBlocks = 1;
COOLParser.RULE_classDefine = 2;
COOLParser.RULE_feature = 3;
COOLParser.RULE_formal = 4;
COOLParser.RULE_expression = 5;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.programBlocks = function() {
    return this.getTypedRuleContext(ProgramBlocksContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




COOLParser.ProgramContext = ProgramContext;

COOLParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, COOLParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.programBlocks();
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

function ProgramBlocksContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = COOLParser.RULE_programBlocks;
    return this;
}

ProgramBlocksContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramBlocksContext.prototype.constructor = ProgramBlocksContext;


 
ProgramBlocksContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function ClassContext(parser, ctx) {
	ProgramBlocksContext.call(this, parser);
    ProgramBlocksContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ClassContext.prototype = Object.create(ProgramBlocksContext.prototype);
ClassContext.prototype.constructor = ClassContext;

COOLParser.ClassContext = ClassContext;

ClassContext.prototype.classDefine = function() {
    return this.getTypedRuleContext(ClassDefineContext,0);
};

ClassContext.prototype.programBlocks = function() {
    return this.getTypedRuleContext(ProgramBlocksContext,0);
};
ClassContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterClass(this);
	}
};

ClassContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitClass(this);
	}
};

ClassContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitClass(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EofContext(parser, ctx) {
	ProgramBlocksContext.call(this, parser);
    ProgramBlocksContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EofContext.prototype = Object.create(ProgramBlocksContext.prototype);
EofContext.prototype.constructor = EofContext;

COOLParser.EofContext = EofContext;

EofContext.prototype.EOF = function() {
    return this.getToken(COOLParser.EOF, 0);
};
EofContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterEof(this);
	}
};

EofContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitEof(this);
	}
};

EofContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitEof(this);
    } else {
        return visitor.visitChildren(this);
    }
};



COOLParser.ProgramBlocksContext = ProgramBlocksContext;

COOLParser.prototype.programBlocks = function() {

    var localctx = new ProgramBlocksContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, COOLParser.RULE_programBlocks);
    try {
        this.state = 19;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case COOLParser.CLASS:
            localctx = new ClassContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 14;
            this.classDefine();
            this.state = 15;
            this.match(COOLParser.T__0);
            this.state = 16;
            this.programBlocks();
            break;
        case COOLParser.EOF:
            localctx = new EofContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 18;
            this.match(COOLParser.EOF);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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

ClassDefineContext.prototype.CLASS = function() {
    return this.getToken(COOLParser.CLASS, 0);
};

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


ClassDefineContext.prototype.INHERITS = function() {
    return this.getToken(COOLParser.INHERITS, 0);
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
    this.enterRule(localctx, 4, COOLParser.RULE_classDefine);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this.match(COOLParser.CLASS);
        this.state = 22;
        this.match(COOLParser.TYPEID);
        this.state = 25;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===COOLParser.INHERITS) {
            this.state = 23;
            this.match(COOLParser.INHERITS);
            this.state = 24;
            this.match(COOLParser.TYPEID);
        }

        this.state = 27;
        this.match(COOLParser.T__1);
        this.state = 33;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===COOLParser.OBJECTID) {
            this.state = 28;
            this.feature();
            this.state = 29;
            this.match(COOLParser.T__0);
            this.state = 35;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 36;
        this.match(COOLParser.T__2);
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


 
FeatureContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function MethodContext(parser, ctx) {
	FeatureContext.call(this, parser);
    FeatureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MethodContext.prototype = Object.create(FeatureContext.prototype);
MethodContext.prototype.constructor = MethodContext;

COOLParser.MethodContext = MethodContext;

MethodContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

MethodContext.prototype.TYPEID = function() {
    return this.getToken(COOLParser.TYPEID, 0);
};

MethodContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

MethodContext.prototype.formal = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormalContext);
    } else {
        return this.getTypedRuleContext(FormalContext,i);
    }
};
MethodContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterMethod(this);
	}
};

MethodContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitMethod(this);
	}
};

MethodContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitMethod(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PropertyContext(parser, ctx) {
	FeatureContext.call(this, parser);
    FeatureContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropertyContext.prototype = Object.create(FeatureContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;

COOLParser.PropertyContext = PropertyContext;

PropertyContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

PropertyContext.prototype.TYPEID = function() {
    return this.getToken(COOLParser.TYPEID, 0);
};

PropertyContext.prototype.ASSIGNMENT = function() {
    return this.getToken(COOLParser.ASSIGNMENT, 0);
};

PropertyContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterProperty(this);
	}
};

PropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitProperty(this);
	}
};

PropertyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitProperty(this);
    } else {
        return visitor.visitChildren(this);
    }
};



COOLParser.FeatureContext = FeatureContext;

COOLParser.prototype.feature = function() {

    var localctx = new FeatureContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, COOLParser.RULE_feature);
    var _la = 0; // Token type
    try {
        this.state = 67;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            localctx = new MethodContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 38;
            this.match(COOLParser.OBJECTID);
            this.state = 39;
            this.match(COOLParser.T__3);
            this.state = 50;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===COOLParser.OBJECTID) {
                this.state = 40;
                this.formal();
                this.state = 45;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===COOLParser.T__4) {
                    this.state = 41;
                    this.match(COOLParser.T__4);
                    this.state = 42;
                    this.formal();
                    this.state = 47;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 52;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 53;
            this.match(COOLParser.T__5);
            this.state = 54;
            this.match(COOLParser.T__6);
            this.state = 55;
            this.match(COOLParser.TYPEID);
            this.state = 56;
            this.match(COOLParser.T__1);
            this.state = 57;
            this.expression(0);
            this.state = 58;
            this.match(COOLParser.T__2);
            break;

        case 2:
            localctx = new PropertyContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 60;
            this.match(COOLParser.OBJECTID);
            this.state = 61;
            this.match(COOLParser.T__6);
            this.state = 62;
            this.match(COOLParser.TYPEID);
            this.state = 65;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===COOLParser.ASSIGNMENT) {
                this.state = 63;
                this.match(COOLParser.ASSIGNMENT);
                this.state = 64;
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
    this.enterRule(localctx, 8, COOLParser.RULE_formal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this.match(COOLParser.OBJECTID);
        this.state = 70;
        this.match(COOLParser.T__6);
        this.state = 71;
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


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function LetInContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LetInContext.prototype = Object.create(ExpressionContext.prototype);
LetInContext.prototype.constructor = LetInContext;

COOLParser.LetInContext = LetInContext;

LetInContext.prototype.LET = function() {
    return this.getToken(COOLParser.LET, 0);
};

LetInContext.prototype.OBJECTID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.OBJECTID);
    } else {
        return this.getToken(COOLParser.OBJECTID, i);
    }
};


LetInContext.prototype.TYPEID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.TYPEID);
    } else {
        return this.getToken(COOLParser.TYPEID, i);
    }
};


LetInContext.prototype.IN = function() {
    return this.getToken(COOLParser.IN, 0);
};

LetInContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LetInContext.prototype.ASSIGNMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.ASSIGNMENT);
    } else {
        return this.getToken(COOLParser.ASSIGNMENT, i);
    }
};

LetInContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterLetIn(this);
	}
};

LetInContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitLetIn(this);
	}
};

LetInContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitLetIn(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MinusContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MinusContext.prototype = Object.create(ExpressionContext.prototype);
MinusContext.prototype.constructor = MinusContext;

COOLParser.MinusContext = MinusContext;

MinusContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MinusContext.prototype.MINUS = function() {
    return this.getToken(COOLParser.MINUS, 0);
};
MinusContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterMinus(this);
	}
};

MinusContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitMinus(this);
	}
};

MinusContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitMinus(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function StringContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StringContext.prototype = Object.create(ExpressionContext.prototype);
StringContext.prototype.constructor = StringContext;

COOLParser.StringContext = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(COOLParser.STRING, 0);
};
StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitString(this);
	}
};

StringContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitString(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IsvoidContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IsvoidContext.prototype = Object.create(ExpressionContext.prototype);
IsvoidContext.prototype.constructor = IsvoidContext;

COOLParser.IsvoidContext = IsvoidContext;

IsvoidContext.prototype.ISVOID = function() {
    return this.getToken(COOLParser.ISVOID, 0);
};

IsvoidContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
IsvoidContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterIsvoid(this);
	}
};

IsvoidContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitIsvoid(this);
	}
};

IsvoidContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitIsvoid(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function WhileContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

WhileContext.prototype = Object.create(ExpressionContext.prototype);
WhileContext.prototype.constructor = WhileContext;

COOLParser.WhileContext = WhileContext;

WhileContext.prototype.WHILE = function() {
    return this.getToken(COOLParser.WHILE, 0);
};

WhileContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

WhileContext.prototype.LOOP = function() {
    return this.getToken(COOLParser.LOOP, 0);
};

WhileContext.prototype.POOL = function() {
    return this.getToken(COOLParser.POOL, 0);
};
WhileContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterWhile(this);
	}
};

WhileContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitWhile(this);
	}
};

WhileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitWhile(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DivisionContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DivisionContext.prototype = Object.create(ExpressionContext.prototype);
DivisionContext.prototype.constructor = DivisionContext;

COOLParser.DivisionContext = DivisionContext;

DivisionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

DivisionContext.prototype.DIVISION = function() {
    return this.getToken(COOLParser.DIVISION, 0);
};
DivisionContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterDivision(this);
	}
};

DivisionContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitDivision(this);
	}
};

DivisionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitDivision(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegativeContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegativeContext.prototype = Object.create(ExpressionContext.prototype);
NegativeContext.prototype.constructor = NegativeContext;

COOLParser.NegativeContext = NegativeContext;

NegativeContext.prototype.INTEGER_NEGATIVE = function() {
    return this.getToken(COOLParser.INTEGER_NEGATIVE, 0);
};

NegativeContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NegativeContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterNegative(this);
	}
};

NegativeContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitNegative(this);
	}
};

NegativeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitNegative(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BoolNotContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BoolNotContext.prototype = Object.create(ExpressionContext.prototype);
BoolNotContext.prototype.constructor = BoolNotContext;

COOLParser.BoolNotContext = BoolNotContext;

BoolNotContext.prototype.NOT = function() {
    return this.getToken(COOLParser.NOT, 0);
};

BoolNotContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
BoolNotContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterBoolNot(this);
	}
};

BoolNotContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitBoolNot(this);
	}
};

BoolNotContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitBoolNot(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LessThanContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LessThanContext.prototype = Object.create(ExpressionContext.prototype);
LessThanContext.prototype.constructor = LessThanContext;

COOLParser.LessThanContext = LessThanContext;

LessThanContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LessThanContext.prototype.LESS_THAN = function() {
    return this.getToken(COOLParser.LESS_THAN, 0);
};
LessThanContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterLessThan(this);
	}
};

LessThanContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitLessThan(this);
	}
};

LessThanContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitLessThan(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BlockContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BlockContext.prototype = Object.create(ExpressionContext.prototype);
BlockContext.prototype.constructor = BlockContext;

COOLParser.BlockContext = BlockContext;

BlockContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitBlock(this);
	}
};

BlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IdContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdContext.prototype = Object.create(ExpressionContext.prototype);
IdContext.prototype.constructor = IdContext;

COOLParser.IdContext = IdContext;

IdContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};
IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MultiplyContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MultiplyContext.prototype = Object.create(ExpressionContext.prototype);
MultiplyContext.prototype.constructor = MultiplyContext;

COOLParser.MultiplyContext = MultiplyContext;

MultiplyContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MultiplyContext.prototype.MULTIPLY = function() {
    return this.getToken(COOLParser.MULTIPLY, 0);
};
MultiplyContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterMultiply(this);
	}
};

MultiplyContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitMultiply(this);
	}
};

MultiplyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitMultiply(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IfContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IfContext.prototype = Object.create(ExpressionContext.prototype);
IfContext.prototype.constructor = IfContext;

COOLParser.IfContext = IfContext;

IfContext.prototype.IF = function() {
    return this.getToken(COOLParser.IF, 0);
};

IfContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

IfContext.prototype.THEN = function() {
    return this.getToken(COOLParser.THEN, 0);
};

IfContext.prototype.ELSE = function() {
    return this.getToken(COOLParser.ELSE, 0);
};

IfContext.prototype.FI = function() {
    return this.getToken(COOLParser.FI, 0);
};
IfContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterIf(this);
	}
};

IfContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitIf(this);
	}
};

IfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitIf(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CaseContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CaseContext.prototype = Object.create(ExpressionContext.prototype);
CaseContext.prototype.constructor = CaseContext;

COOLParser.CaseContext = CaseContext;

CaseContext.prototype.CASE = function() {
    return this.getToken(COOLParser.CASE, 0);
};

CaseContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CaseContext.prototype.OF = function() {
    return this.getToken(COOLParser.OF, 0);
};

CaseContext.prototype.ESAC = function() {
    return this.getToken(COOLParser.ESAC, 0);
};

CaseContext.prototype.OBJECTID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.OBJECTID);
    } else {
        return this.getToken(COOLParser.OBJECTID, i);
    }
};


CaseContext.prototype.TYPEID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.TYPEID);
    } else {
        return this.getToken(COOLParser.TYPEID, i);
    }
};


CaseContext.prototype.CASE_ARROW = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(COOLParser.CASE_ARROW);
    } else {
        return this.getToken(COOLParser.CASE_ARROW, i);
    }
};

CaseContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterCase(this);
	}
};

CaseContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitCase(this);
	}
};

CaseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitCase(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function OwnMethodCallContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OwnMethodCallContext.prototype = Object.create(ExpressionContext.prototype);
OwnMethodCallContext.prototype.constructor = OwnMethodCallContext;

COOLParser.OwnMethodCallContext = OwnMethodCallContext;

OwnMethodCallContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

OwnMethodCallContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
OwnMethodCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterOwnMethodCall(this);
	}
};

OwnMethodCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitOwnMethodCall(this);
	}
};

OwnMethodCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitOwnMethodCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AddContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddContext.prototype = Object.create(ExpressionContext.prototype);
AddContext.prototype.constructor = AddContext;

COOLParser.AddContext = AddContext;

AddContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AddContext.prototype.ADD = function() {
    return this.getToken(COOLParser.ADD, 0);
};
AddContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterAdd(this);
	}
};

AddContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitAdd(this);
	}
};

AddContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitAdd(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NewContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NewContext.prototype = Object.create(ExpressionContext.prototype);
NewContext.prototype.constructor = NewContext;

COOLParser.NewContext = NewContext;

NewContext.prototype.NEW = function() {
    return this.getToken(COOLParser.NEW, 0);
};

NewContext.prototype.TYPEID = function() {
    return this.getToken(COOLParser.TYPEID, 0);
};
NewContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterNew(this);
	}
};

NewContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitNew(this);
	}
};

NewContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitNew(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ParenthesesContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParenthesesContext.prototype = Object.create(ExpressionContext.prototype);
ParenthesesContext.prototype.constructor = ParenthesesContext;

COOLParser.ParenthesesContext = ParenthesesContext;

ParenthesesContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
ParenthesesContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterParentheses(this);
	}
};

ParenthesesContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitParentheses(this);
	}
};

ParenthesesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitParentheses(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function AssignmentContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AssignmentContext.prototype = Object.create(ExpressionContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

COOLParser.AssignmentContext = AssignmentContext;

AssignmentContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

AssignmentContext.prototype.ASSIGNMENT = function() {
    return this.getToken(COOLParser.ASSIGNMENT, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitAssignment(this);
	}
};

AssignmentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitAssignment(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function FalseContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

FalseContext.prototype = Object.create(ExpressionContext.prototype);
FalseContext.prototype.constructor = FalseContext;

COOLParser.FalseContext = FalseContext;

FalseContext.prototype.FALSE = function() {
    return this.getToken(COOLParser.FALSE, 0);
};
FalseContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterFalse(this);
	}
};

FalseContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitFalse(this);
	}
};

FalseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitFalse(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(ExpressionContext.prototype);
IntContext.prototype.constructor = IntContext;

COOLParser.IntContext = IntContext;

IntContext.prototype.INT = function() {
    return this.getToken(COOLParser.INT, 0);
};
IntContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterInt(this);
	}
};

IntContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitInt(this);
	}
};

IntContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitInt(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function EqualContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

EqualContext.prototype = Object.create(ExpressionContext.prototype);
EqualContext.prototype.constructor = EqualContext;

COOLParser.EqualContext = EqualContext;

EqualContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

EqualContext.prototype.EQUAL = function() {
    return this.getToken(COOLParser.EQUAL, 0);
};
EqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterEqual(this);
	}
};

EqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitEqual(this);
	}
};

EqualContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitEqual(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TrueContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TrueContext.prototype = Object.create(ExpressionContext.prototype);
TrueContext.prototype.constructor = TrueContext;

COOLParser.TrueContext = TrueContext;

TrueContext.prototype.TRUE = function() {
    return this.getToken(COOLParser.TRUE, 0);
};
TrueContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterTrue(this);
	}
};

TrueContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitTrue(this);
	}
};

TrueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitTrue(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LessEqualContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LessEqualContext.prototype = Object.create(ExpressionContext.prototype);
LessEqualContext.prototype.constructor = LessEqualContext;

COOLParser.LessEqualContext = LessEqualContext;

LessEqualContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LessEqualContext.prototype.LESS_EQUAL = function() {
    return this.getToken(COOLParser.LESS_EQUAL, 0);
};
LessEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterLessEqual(this);
	}
};

LessEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitLessEqual(this);
	}
};

LessEqualContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitLessEqual(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function MethodCallContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MethodCallContext.prototype = Object.create(ExpressionContext.prototype);
MethodCallContext.prototype.constructor = MethodCallContext;

COOLParser.MethodCallContext = MethodCallContext;

MethodCallContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

MethodCallContext.prototype.OBJECTID = function() {
    return this.getToken(COOLParser.OBJECTID, 0);
};

MethodCallContext.prototype.TYPEID = function() {
    return this.getToken(COOLParser.TYPEID, 0);
};
MethodCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.enterMethodCall(this);
	}
};

MethodCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof COOLListener ) {
        listener.exitMethodCall(this);
	}
};

MethodCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof COOLVisitor ) {
        return visitor.visitMethodCall(this);
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
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, COOLParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            localctx = new AssignmentContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 74;
            this.match(COOLParser.OBJECTID);
            this.state = 75;
            this.match(COOLParser.ASSIGNMENT);
            this.state = 76;
            this.expression(25);
            break;

        case 2:
            localctx = new OwnMethodCallContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 77;
            this.match(COOLParser.OBJECTID);
            this.state = 78;
            this.match(COOLParser.T__3);
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (COOLParser.NOT - 32)) | (1 << (COOLParser.TRUE - 32)) | (1 << (COOLParser.STRING - 32)) | (1 << (COOLParser.INT - 32)) | (1 << (COOLParser.OBJECTID - 32)) | (1 << (COOLParser.INTEGER_NEGATIVE - 32)))) !== 0)) {
                this.state = 79;
                this.expression(0);
                this.state = 84;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===COOLParser.T__4) {
                    this.state = 80;
                    this.match(COOLParser.T__4);
                    this.state = 81;
                    this.expression(0);
                    this.state = 86;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 91;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 92;
            this.match(COOLParser.T__5);
            break;

        case 3:
            localctx = new IfContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 93;
            this.match(COOLParser.IF);
            this.state = 94;
            this.expression(0);
            this.state = 95;
            this.match(COOLParser.THEN);
            this.state = 96;
            this.expression(0);
            this.state = 97;
            this.match(COOLParser.ELSE);
            this.state = 98;
            this.expression(0);
            this.state = 99;
            this.match(COOLParser.FI);
            break;

        case 4:
            localctx = new WhileContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 101;
            this.match(COOLParser.WHILE);
            this.state = 102;
            this.expression(0);
            this.state = 103;
            this.match(COOLParser.LOOP);
            this.state = 104;
            this.expression(0);
            this.state = 105;
            this.match(COOLParser.POOL);
            break;

        case 5:
            localctx = new BlockContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 107;
            this.match(COOLParser.T__1);
            this.state = 111; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 108;
                this.expression(0);
                this.state = 109;
                this.match(COOLParser.T__0);
                this.state = 113; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (COOLParser.NOT - 32)) | (1 << (COOLParser.TRUE - 32)) | (1 << (COOLParser.STRING - 32)) | (1 << (COOLParser.INT - 32)) | (1 << (COOLParser.OBJECTID - 32)) | (1 << (COOLParser.INTEGER_NEGATIVE - 32)))) !== 0));
            this.state = 115;
            this.match(COOLParser.T__2);
            break;

        case 6:
            localctx = new LetInContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 117;
            this.match(COOLParser.LET);
            this.state = 118;
            this.match(COOLParser.OBJECTID);
            this.state = 119;
            this.match(COOLParser.T__6);
            this.state = 120;
            this.match(COOLParser.TYPEID);
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===COOLParser.ASSIGNMENT) {
                this.state = 121;
                this.match(COOLParser.ASSIGNMENT);
                this.state = 122;
                this.expression(0);
            }

            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===COOLParser.T__4) {
                this.state = 125;
                this.match(COOLParser.T__4);
                this.state = 126;
                this.match(COOLParser.OBJECTID);
                this.state = 127;
                this.match(COOLParser.T__6);
                this.state = 128;
                this.match(COOLParser.TYPEID);
                this.state = 131;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===COOLParser.ASSIGNMENT) {
                    this.state = 129;
                    this.match(COOLParser.ASSIGNMENT);
                    this.state = 130;
                    this.expression(0);
                }

                this.state = 137;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 138;
            this.match(COOLParser.IN);
            this.state = 139;
            this.expression(19);
            break;

        case 7:
            localctx = new CaseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 140;
            this.match(COOLParser.CASE);
            this.state = 141;
            this.expression(0);
            this.state = 142;
            this.match(COOLParser.OF);
            this.state = 150; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 143;
                this.match(COOLParser.OBJECTID);
                this.state = 144;
                this.match(COOLParser.T__6);
                this.state = 145;
                this.match(COOLParser.TYPEID);
                this.state = 146;
                this.match(COOLParser.CASE_ARROW);
                this.state = 147;
                this.expression(0);
                this.state = 148;
                this.match(COOLParser.T__0);
                this.state = 152; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while(_la===COOLParser.OBJECTID);
            this.state = 154;
            this.match(COOLParser.ESAC);
            break;

        case 8:
            localctx = new NewContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 156;
            this.match(COOLParser.NEW);
            this.state = 157;
            this.match(COOLParser.TYPEID);
            break;

        case 9:
            localctx = new NegativeContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 158;
            this.match(COOLParser.INTEGER_NEGATIVE);
            this.state = 159;
            this.expression(16);
            break;

        case 10:
            localctx = new IsvoidContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 160;
            this.match(COOLParser.ISVOID);
            this.state = 161;
            this.expression(15);
            break;

        case 11:
            localctx = new BoolNotContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 162;
            this.match(COOLParser.NOT);
            this.state = 163;
            this.expression(7);
            break;

        case 12:
            localctx = new ParenthesesContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 164;
            this.match(COOLParser.T__3);
            this.state = 165;
            this.expression(0);
            this.state = 166;
            this.match(COOLParser.T__5);
            break;

        case 13:
            localctx = new IdContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 168;
            this.match(COOLParser.OBJECTID);
            break;

        case 14:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 169;
            this.match(COOLParser.INT);
            break;

        case 15:
            localctx = new StringContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 170;
            this.match(COOLParser.STRING);
            break;

        case 16:
            localctx = new TrueContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 171;
            this.match(COOLParser.TRUE);
            break;

        case 17:
            localctx = new FalseContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 172;
            this.match(COOLParser.FALSE);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 220;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 218;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MultiplyContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 175;
                    if (!( this.precpred(this._ctx, 14))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
                    }
                    this.state = 176;
                    this.match(COOLParser.MULTIPLY);
                    this.state = 177;
                    this.expression(15);
                    break;

                case 2:
                    localctx = new DivisionContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 178;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 179;
                    this.match(COOLParser.DIVISION);
                    this.state = 180;
                    this.expression(14);
                    break;

                case 3:
                    localctx = new AddContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 181;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 182;
                    this.match(COOLParser.ADD);
                    this.state = 183;
                    this.expression(13);
                    break;

                case 4:
                    localctx = new MinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 184;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 185;
                    this.match(COOLParser.MINUS);
                    this.state = 186;
                    this.expression(12);
                    break;

                case 5:
                    localctx = new LessThanContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 187;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 188;
                    this.match(COOLParser.LESS_THAN);
                    this.state = 189;
                    this.expression(11);
                    break;

                case 6:
                    localctx = new LessEqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 190;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 191;
                    this.match(COOLParser.LESS_EQUAL);
                    this.state = 192;
                    this.expression(10);
                    break;

                case 7:
                    localctx = new EqualContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 193;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 194;
                    this.match(COOLParser.EQUAL);
                    this.state = 195;
                    this.expression(9);
                    break;

                case 8:
                    localctx = new MethodCallContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, COOLParser.RULE_expression);
                    this.state = 196;
                    if (!( this.precpred(this._ctx, 24))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
                    }
                    this.state = 199;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if(_la===COOLParser.T__7) {
                        this.state = 197;
                        this.match(COOLParser.T__7);
                        this.state = 198;
                        this.match(COOLParser.TYPEID);
                    }

                    this.state = 201;
                    this.match(COOLParser.T__8);
                    this.state = 202;
                    this.match(COOLParser.OBJECTID);
                    this.state = 203;
                    this.match(COOLParser.T__3);
                    this.state = 214;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << COOLParser.T__1) | (1 << COOLParser.T__3) | (1 << COOLParser.FALSE) | (1 << COOLParser.IF) | (1 << COOLParser.ISVOID) | (1 << COOLParser.LET) | (1 << COOLParser.WHILE) | (1 << COOLParser.CASE) | (1 << COOLParser.NEW))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (COOLParser.NOT - 32)) | (1 << (COOLParser.TRUE - 32)) | (1 << (COOLParser.STRING - 32)) | (1 << (COOLParser.INT - 32)) | (1 << (COOLParser.OBJECTID - 32)) | (1 << (COOLParser.INTEGER_NEGATIVE - 32)))) !== 0)) {
                        this.state = 204;
                        this.expression(0);
                        this.state = 209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while(_la===COOLParser.T__4) {
                            this.state = 205;
                            this.match(COOLParser.T__4);
                            this.state = 206;
                            this.expression(0);
                            this.state = 211;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 216;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 217;
                    this.match(COOLParser.T__5);
                    break;

                } 
            }
            this.state = 222;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	case 5:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

COOLParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 14);
		case 1:
			return this.precpred(this._ctx, 13);
		case 2:
			return this.precpred(this._ctx, 12);
		case 3:
			return this.precpred(this._ctx, 11);
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
