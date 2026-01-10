import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://orchestrator.pgatour.com/graphql": {
        headers: {
          "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
        },
      },
    },
    "src/graphql/schema.graphql",
  ],
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript"],
      config: {
        addTypename: true,
        enumsAsTypes: true,
        immutableTypes: true,
        nonOptionalTypename: true,
        useTypeImports: true,
        typesPrefix: "Domain",
      },
    },
  },
};

export default config;
