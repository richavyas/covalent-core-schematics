import { Rule, chain, Tree, mergeWith, url } from "@angular-devkit/schematics";
import { addPackageToPackageJson } from "./package-config";
import { ISchema } from "./schema";
import { covalentCoreVersion } from "./version-names";

export function addCoreDepsAndFiles(_options: ISchema): Rule {
  return chain([
    (host: Tree) =>
      addPackageToPackageJson(
        host,
        "@covalent/core",
        `~${covalentCoreVersion}`
      ),
    mergeWith(url("./files"))
  ]);
}
