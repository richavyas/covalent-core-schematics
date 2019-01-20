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
    (host: Tree) => {
      host.visit((filePath: any) => console.log(filePath));
      return host;
    },
    mergeWith(url("./files"))
  ]);
}
