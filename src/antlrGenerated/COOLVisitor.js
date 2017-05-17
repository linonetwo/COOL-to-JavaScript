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

// Visit a parse tree produced by COOLParser#program.
COOLVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#class.
COOLVisitor.prototype.visitClass = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#eof.
COOLVisitor.prototype.visitEof = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#classDefine.
COOLVisitor.prototype.visitClassDefine = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#method.
COOLVisitor.prototype.visitMethod = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#property.
COOLVisitor.prototype.visitProperty = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#formal.
COOLVisitor.prototype.visitFormal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#letIn.
COOLVisitor.prototype.visitLetIn = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#minus.
COOLVisitor.prototype.visitMinus = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#string.
COOLVisitor.prototype.visitString = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#isvoid.
COOLVisitor.prototype.visitIsvoid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#while.
COOLVisitor.prototype.visitWhile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#division.
COOLVisitor.prototype.visitDivision = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#negative.
COOLVisitor.prototype.visitNegative = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#boolNot.
COOLVisitor.prototype.visitBoolNot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#lessThan.
COOLVisitor.prototype.visitLessThan = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#block.
COOLVisitor.prototype.visitBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#id.
COOLVisitor.prototype.visitId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#multiply.
COOLVisitor.prototype.visitMultiply = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#if.
COOLVisitor.prototype.visitIf = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#case.
COOLVisitor.prototype.visitCase = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#ownMethodCall.
COOLVisitor.prototype.visitOwnMethodCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#add.
COOLVisitor.prototype.visitAdd = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#new.
COOLVisitor.prototype.visitNew = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#parentheses.
COOLVisitor.prototype.visitParentheses = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#assignment.
COOLVisitor.prototype.visitAssignment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#false.
COOLVisitor.prototype.visitFalse = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#int.
COOLVisitor.prototype.visitInt = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#equal.
COOLVisitor.prototype.visitEqual = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#true.
COOLVisitor.prototype.visitTrue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#lessEqual.
COOLVisitor.prototype.visitLessEqual = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by COOLParser#methodCall.
COOLVisitor.prototype.visitMethodCall = function(ctx) {
  return this.visitChildren(ctx);
};



exports.COOLVisitor = COOLVisitor;