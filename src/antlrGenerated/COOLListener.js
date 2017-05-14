// Generated from ./src/COOL.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by COOLParser.
function COOLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

COOLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
COOLListener.prototype.constructor = COOLListener;

// Enter a parse tree produced by COOLParser#prog.
COOLListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by COOLParser#prog.
COOLListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by COOLParser#classDefine.
COOLListener.prototype.enterClassDefine = function(ctx) {
};

// Exit a parse tree produced by COOLParser#classDefine.
COOLListener.prototype.exitClassDefine = function(ctx) {
};


// Enter a parse tree produced by COOLParser#feature.
COOLListener.prototype.enterFeature = function(ctx) {
};

// Exit a parse tree produced by COOLParser#feature.
COOLListener.prototype.exitFeature = function(ctx) {
};


// Enter a parse tree produced by COOLParser#formal.
COOLListener.prototype.enterFormal = function(ctx) {
};

// Exit a parse tree produced by COOLParser#formal.
COOLListener.prototype.exitFormal = function(ctx) {
};


// Enter a parse tree produced by COOLParser#expression.
COOLListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by COOLParser#expression.
COOLListener.prototype.exitExpression = function(ctx) {
};



exports.COOLListener = COOLListener;