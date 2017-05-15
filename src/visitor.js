import { COOLVisitor } from './antlrGenerated/COOLVisitor';

export class JSBuilderVisitor extends COOLVisitor {

  visitClass(context) {
    console.log(context);
    return this.visitChildren(context);
  }
}
