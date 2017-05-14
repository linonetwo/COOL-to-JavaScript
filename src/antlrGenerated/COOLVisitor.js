// Generated from ./src/COOL.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by COOLParser.

function COOLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

COOLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
COOLVisitor.prototype.constructor = COOLVisitor;

// Visit a parse tree produced by COOLParser#prog.
COOLVisitor.prototype.visitProg = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#classDefine.
COOLVisitor.prototype.visitClassDefine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#feature.
COOLVisitor.prototype.visitFeature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#formal.
COOLVisitor.prototype.visitFormal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#expression.
COOLVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};



exports.COOLVisitor = COOLVisitor;