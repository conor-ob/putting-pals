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
  ],
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        "typescript-document-nodes",
      ],
      config: {
        enumsAsTypes: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
