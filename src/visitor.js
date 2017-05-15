import {COOLVisitor} from "./antlrGenerated/COOLVisitor";
import {
  AddSubContext,
  AssignContext,
  COOLParser,
  IdContext,
  IntContext,
  MulDivContext,
  ParenthesesContext,
  PrintCOOLContext
} from "./antlrGenerated/COOLParser";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";

export class CustomVisitor extends AbstractParseTreeVisitor<number> implements ExprVisitor<number> {
    /** "memory" for our calculator; variable/value pairs go here */
    memory: Map<string, number> = new Map<string, number>();

    /** ID '=' expr */
    public visitAssign(ctx: AssignContext): number {
        let id = ctx.ID().text;  // id is left-hand side of '='
        let value = this.visit(ctx.expr());   // compute value of expression on right
        this.memory.set(id, value);           // store it in our memory
        return value;
    }

    /** expr */
    public visitPrintExpr(ctx: PrintExprContext) {
        return this.visit(ctx.expr());                          // evaluate the expr child
    }

    /** INT */
    public visitInt(ctx: IntContext) {
        return parseInt(ctx.INT().text);
    }

    /** ID */
    public visitId(ctx: IdContext) {
        let id = ctx.ID().text;
        if (this.memory.has(id)) {
            let value = this.memory.get(id);
            console.log(`this is a assign expr, the [${id}] value is [${value}]`)
            return value;
        }
        return 0;
    }

    /** expr op=('*'|'/') expr */
    public visitMulDiv(ctx: MulDivContext) {
        let left = this.visit(ctx.expr(0));  // get value of left subexpression
        let right = this.visit(ctx.expr(1)); // get value of right subexpression
        if (ctx._op.type == ExprParser.MUL) return left * right;
        return left / right; // must be DIV
    }

    /** expr op=('+'|'-') expr */
    public  visitAddSub(ctx: AddSubContext) {
        let left = this.visit(ctx.expr(0));  // get value of left subexpression
        let right = this.visit(ctx.expr(1)); // get value of right subexpression
        if (ctx._op.type == ExprParser.ADD) return left + right;
        return left - right; // must be SUB
    }

    /** '(' expr ')' */
    public visitParentheses(ctx: ParenthesesContext) {
        return this.visit(ctx.expr()); // return child expr's value
    }

    protected defaultResult(): number {
        return undefined;
    }

}