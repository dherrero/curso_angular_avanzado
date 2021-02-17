import {
  Rule,
  SchematicContext,
  Tree,
  url,
  template,
  apply,
  mergeWith,
} from "@angular-devkit/schematics";
import { Schema } from "./schema";
import { strings } from "@angular-devkit/core";

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function miPrimerSchematic(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // mi primer cambio en el Workspace
    //tree.create(`${_options.name}.ts`, `console.log("${_options.name}")`);

    const sourceTemplate = url("./files");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({ ..._options, ...strings }),
    ]);

    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}
