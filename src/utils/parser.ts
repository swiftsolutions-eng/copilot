/* eslint-disable no-async-promise-executor */
import yaml from "js-yaml";
import { sortBy } from "lodash";
import { gql } from "@apollo/client";
import { loadConfig } from "./config";
import { createApolloClient } from "./apolloClient";
import { queryParserTemplate } from "./template";
import {
  readTextFile,
  writeFile,
  readDir,
  FileEntry,
} from "@tauri-apps/api/fs";
import { join } from "@tauri-apps/api/path";
import { tempdir } from "@tauri-apps/api/os";
import { Command } from "@tauri-apps/api/shell";

const YAML_CONFIG = {
  noArrayIndent: true,
  quotingType: '"',
  lineWidth: -1,
} as const;

type Definition = {
  name: string;
  relations: Definition[];
};

type TableDef = {
  name: string;
  schema: string;
  context: "warehouse" | "company" | null;
};

const findFile = async (fname: string): Promise<string | null> => {
  const config = await loadConfig();
  const pickFile = (fileEntries: FileEntry[], fname: string) => {
    let found: any;
    for (const fileEntry of fileEntries) {
      if (fileEntry.name === fname) {
        found = fileEntry;
        break;
      }
      if ((fileEntry?.children ?? []).length > 0) {
        const file = pickFile(fileEntry.children!, fname);
        if (file?.name === fname) {
          found = file;
          break;
        }
      }
    }
    return found;
  };
  return new Promise(async (resolve, reject) => {
    if (config?.hasuraSource == null) reject(new Error("not found"));
    const subDir = await readDir(config!.hasuraSource, { recursive: true });
    subDir.reverse(); // metadata is the last item on subdir
    resolve(pickFile(subDir, fname)?.path ?? null);
  });
};

let introspectionCache: any = null;
const getIntrospection = async () => {
  if (introspectionCache !== null) return introspectionCache;
  const config = await loadConfig();
  const apolloClient = createApolloClient(
    config?.graphqlUri ?? "",
    config?.secret ?? ""
  );
  const { data } = await apolloClient.query({
    query: gql`
      {
        __schema {
          queryType {
            name
          }
          types {
            name
            description
            name
            kind
            fields {
              type {
                name
                description
              }
              name
              type {
                fields {
                  name
                }
              }
            }
          }
        }
      }
    `,
  });

  introspectionCache = data;
  return data;
};

export const parseGraphqlQuery = async (
  inputPath: string
): Promise<Definition> => {
  const TEMP_DIR = await tempdir();
  const originalScriptPath = await join(TEMP_DIR, "copilot-parser.ts");
  const scriptPath = await join(TEMP_DIR, "copilot-parser.js");

  return new Promise(async (resolve, reject) => {
    try {
      const scriptStr = queryParserTemplate.replace("__template__", inputPath);
      await writeFile({ path: originalScriptPath, contents: scriptStr });
      await new Command("run-npx", [
        "esbuild",
        originalScriptPath,
        "--bundle",
        "--target=chrome58",
        `--outfile=${scriptPath}`,
      ]).execute();
      const nodeOutput = await new Command("run-node", scriptPath).execute();
      resolve(JSON.parse(nodeOutput.stdout));
    } catch (error) {
      reject(error);
    }
  });
};

const findRelationByName = (
  name: string,
  relations: any[]
): { schema: string; name: string } | null => {
  const _found = relations?.find?.((n) => n.name === name);
  if (_found) {
    return (
      _found?.using?.manual_configuration?.remote_table ??
      _found?.using?.foreign_key_constraint_on?.table
    );
  }

  return null;
};

export const loadCoreUIQueries = (): Promise<
  { name: string; path: string }[]
> => {
  const results: { name: string; path: string }[] = [];
  const walker = (files: FileEntry[]) => {
    files.forEach((_file) => {
      if (
        _file.name?.endsWith("query.ts") ||
        _file.name?.endsWith("mutation.ts")
      ) {
        results.push({
          name: _file.name,
          path: _file.path,
        });
      }

      if ((_file.children?.length ?? 0) > 0) {
        walker(_file.children!);
      }
    });
  };

  return new Promise(async (resolve, reject) => {
    try {
      const config = await loadConfig();
      if (config == null) return null;
      const sourceFolder = await join(config.coreUISource, "/packages/gqls");
      const subDir = await readDir(sourceFolder, {
        recursive: true,
      });
      walker(subDir);
      resolve(sortBy(results, (n) => n.name.toLowerCase()));
    } catch (err) {
      reject(err);
    }
  });
};

const getQueryContext = async (
  queryName: string
): Promise<"warehouse" | "company" | null> => {
  const instrospection = await getIntrospection();
  const query = instrospection?.__schema?.types?.find(
    (item: any) => item.name === queryName
  );

  const isHasWarehouse = query?.fields?.find(
    (item: any) => item.name === "warehouse_id"
  );

  if (isHasWarehouse) return "warehouse";

  const isHasCompany = query?.fields?.find(
    (item: any) => item.name === "company_id"
  );

  if (isHasCompany) return "company";

  return null;
};

const addQueryPermission = async (
  jsonDef: any,
  fpath: string,
  role: string,
  context: "warehouse" | "company" | null
) => {
  const _jsonDef = jsonDef;
  // remove current role
  _jsonDef.select_permissions =
    _jsonDef.select_permissions?.filter((item: any) => {
      return item.role !== role;
    }) ?? [];

  // add new role
  _jsonDef.select_permissions.push({
    permission: {
      allow_aggregations: true,
      columns: "*",
      filter:
        context === "warehouse"
          ? {
              warehouse_id: {
                _eq: "x-hasura-warehouse-id",
              },
            }
          : context === "company"
          ? {
              company_id: {
                _eq: "x-hasura-company-id",
              },
            }
          : {},
    },
    role,
  });
  _jsonDef.select_permissions = sortBy(_jsonDef.select_permissions, "role");

  const yamlString = yaml.dump(_jsonDef, YAML_CONFIG);

  await writeFile({ path: fpath, contents: yamlString });
};

const addActionPermission = async (
  result: TableDef[],
  actionName: string,
  role: string
) => {
  const actionsFile = await findFile("actions.yaml");
  const yamlText = await readTextFile(actionsFile!);
  const jsonDef = yaml.load(yamlText) as any;
  const action = jsonDef.actions.find((item: any) => item.name === actionName);
  if (action) {
    action.permissions =
      action.permissions?.filter((item: any) => item.role !== role) ?? [];
    action.permissions.push({ role });
    action.permissions = sortBy(action.permissions, "role");
    result.push({ name: actionName, schema: "", context: null });
  }

  const yamlString = yaml.dump(jsonDef, YAML_CONFIG);

  await writeFile({ path: actionsFile!, contents: yamlString });
};

export const addRoleToQuery = async (
  sourceFile: string,
  role: string
): Promise<TableDef[]> => {
  const tables = await parseGraphqlQuery(sourceFile);

  const result: TableDef[] = [];
  const walker = async (def: Definition, fname: string): Promise<any> => {
    const absFile = await findFile(`${fname}.yaml`);
    if (absFile === null) {
      return await Promise.all([
        addActionPermission(result, fname, role),
        ...def?.relations?.map((n: any) => walker(n, n.name)),
      ]);
    } else {
      const yamlText = await readTextFile(absFile!);
      const jsonDef = yaml.load(yamlText) as any;
      const formattedName = jsonDef.table.schema + "_" + jsonDef.table.name;
      const context = await getQueryContext(formattedName);
      await addQueryPermission(jsonDef, absFile!, role, context);
      result.push({ ...jsonDef.table, context });

      const promises: any = def.relations.map(async (rel) => {
        const objRel = findRelationByName(
          rel.name,
          jsonDef.object_relationships
        );
        const arrRel = findRelationByName(
          rel.name,
          jsonDef.array_relationships
        );

        if (objRel) {
          const _fname = objRel.schema + "_" + objRel.name;
          return await walker(rel, _fname);
        }

        if (arrRel) {
          const _fname = arrRel.schema + "_" + arrRel.name;
          return await walker(rel, _fname);
        }
      });

      return await Promise.all(promises);
    }
  };

  await walker(tables, tables.name);
  return result;
};
