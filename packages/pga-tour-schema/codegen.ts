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
  generates: {
    "src/types.ts": {
      plugins: ["typescript"],
      config: {
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
