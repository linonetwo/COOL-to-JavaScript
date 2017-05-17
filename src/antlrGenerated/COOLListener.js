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

// Enter a parse tree produced by COOLParser#program.
COOLListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by COOLParser#program.
COOLListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by COOLParser#class.
COOLListener.prototype.enterClass = function(ctx) {
};

// Exit a parse tree produced by COOLParser#class.
COOLListener.prototype.exitClass = function(ctx) {
};


// Enter a parse tree produced by COOLParser#eof.
COOLListener.prototype.enterEof = function(ctx) {
};

// Exit a parse tree produced by COOLParser#eof.
COOLListener.prototype.exitEof = function(ctx) {
};


// Enter a parse tree produced by COOLParser#classDefine.
COOLListener.prototype.enterClassDefine = function(ctx) {
};

// Exit a parse tree produced by COOLParser#classDefine.
COOLListener.prototype.exitClassDefine = function(ctx) {
};


// Enter a parse tree produced by COOLParser#method.
COOLListener.prototype.enterMethod = function(ctx) {
};

// Exit a parse tree produced by COOLParser#method.
COOLListener.prototype.exitMethod = function(ctx) {
};


// Enter a parse tree produced by COOLParser#classProperty.
COOLListener.prototype.enterClassProperty = function(ctx) {
};

// Exit a parse tree produced by COOLParser#classProperty.
COOLListener.prototype.exitClassProperty = function(ctx) {
};


// Enter a parse tree produced by COOLParser#formal.
COOLListener.prototype.enterFormal = function(ctx) {
};

// Exit a parse tree produced by COOLParser#formal.
COOLListener.prototype.exitFormal = function(ctx) {
};


// Enter a parse tree produced by COOLParser#letIn.
COOLListener.prototype.enterLetIn = function(ctx) {
};

// Exit a parse tree produced by COOLParser#letIn.
COOLListener.prototype.exitLetIn = function(ctx) {
};


// Enter a parse tree produced by COOLParser#minus.
COOLListener.prototype.enterMinus = function(ctx) {
};

// Exit a parse tree produced by COOLParser#minus.
COOLListener.prototype.exitMinus = function(ctx) {
};


// Enter a parse tree produced by COOLParser#string.
COOLListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by COOLParser#string.
COOLListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by COOLParser#isvoid.
COOLListener.prototype.enterIsvoid = function(ctx) {
};

// Exit a parse tree produced by COOLParser#isvoid.
COOLListener.prototype.exitIsvoid = function(ctx) {
};


// Enter a parse tree produced by COOLParser#while.
COOLListener.prototype.enterWhile = function(ctx) {
};

// Exit a parse tree produced by COOLParser#while.
COOLListener.prototype.exitWhile = function(ctx) {
};


// Enter a parse tree produced by COOLParser#division.
COOLListener.prototype.enterDivision = function(ctx) {
};

// Exit a parse tree produced by COOLParser#division.
COOLListener.prototype.exitDivision = function(ctx) {
};


// Enter a parse tree produced by COOLParser#negative.
COOLListener.prototype.enterNegative = function(ctx) {
};

// Exit a parse tree produced by COOLParser#negative.
COOLListener.prototype.exitNegative = function(ctx) {
};


// Enter a parse tree produced by COOLParser#boolNot.
COOLListener.prototype.enterBoolNot = function(ctx) {
};

// Exit a parse tree produced by COOLParser#boolNot.
COOLListener.prototype.exitBoolNot = function(ctx) {
};


// Enter a parse tree produced by COOLParser#lessThan.
COOLListener.prototype.enterLessThan = function(ctx) {
};

// Exit a parse tree produced by COOLParser#lessThan.
COOLListener.prototype.exitLessThan = function(ctx) {
};


// Enter a parse tree produced by COOLParser#superClassMethod.
COOLListener.prototype.enterSuperClassMethod = function(ctx) {
};

// Exit a parse tree produced by COOLParser#superClassMethod.
COOLListener.prototype.exitSuperClassMethod = function(ctx) {
};


// Enter a parse tree produced by COOLParser#block.
COOLListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by COOLParser#block.
COOLListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by COOLParser#id.
COOLListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by COOLParser#id.
COOLListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by COOLParser#multiply.
COOLListener.prototype.enterMultiply = function(ctx) {
};

// Exit a parse tree produced by COOLParser#multiply.
COOLListener.prototype.exitMultiply = function(ctx) {
};


// Enter a parse tree produced by COOLParser#if.
COOLListener.prototype.enterIf = function(ctx) {
};

// Exit a parse tree produced by COOLParser#if.
COOLListener.prototype.exitIf = function(ctx) {
};


// Enter a parse tree produced by COOLParser#case.
COOLListener.prototype.enterCase = function(ctx) {
};

// Exit a parse tree produced by COOLParser#case.
COOLListener.prototype.exitCase = function(ctx) {
};


// Enter a parse tree produced by COOLParser#add.
COOLListener.prototype.enterAdd = function(ctx) {
};

// Exit a parse tree produced by COOLParser#add.
COOLListener.prototype.exitAdd = function(ctx) {
};


// Enter a parse tree produced by COOLParser#new.
COOLListener.prototype.enterNew = function(ctx) {
};

// Exit a parse tree produced by COOLParser#new.
COOLListener.prototype.exitNew = function(ctx) {
};


// Enter a parse tree produced by COOLParser#parentheses.
COOLListener.prototype.enterParentheses = function(ctx) {
};

// Exit a parse tree produced by COOLParser#parentheses.
COOLListener.prototype.exitParentheses = function(ctx) {
};


// Enter a parse tree produced by COOLParser#assignment.
COOLListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by COOLParser#assignment.
COOLListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by COOLParser#false.
COOLListener.prototype.enterFalse = function(ctx) {
};

// Exit a parse tree produced by COOLParser#false.
COOLListener.prototype.exitFalse = function(ctx) {
};


// Enter a parse tree produced by COOLParser#int.
COOLListener.prototype.enterInt = function(ctx) {
};

// Exit a parse tree produced by COOLParser#int.
COOLListener.prototype.exitInt = function(ctx) {
};


// Enter a parse tree produced by COOLParser#equal.
COOLListener.prototype.enterEqual = function(ctx) {
};

// Exit a parse tree produced by COOLParser#equal.
COOLListener.prototype.exitEqual = function(ctx) {
};


// Enter a parse tree produced by COOLParser#functionCall.
COOLListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by COOLParser#functionCall.
COOLListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by COOLParser#true.
COOLListener.prototype.enterTrue = function(ctx) {
};

// Exit a parse tree produced by COOLParser#true.
COOLListener.prototype.exitTrue = function(ctx) {
};


// Enter a parse tree produced by COOLParser#lessEqual.
COOLListener.prototype.enterLessEqual = function(ctx) {
};

// Exit a parse tree produced by COOLParser#lessEqual.
COOLListener.prototype.exitLessEqual = function(ctx) {
};



exports.COOLListener = COOLListener;