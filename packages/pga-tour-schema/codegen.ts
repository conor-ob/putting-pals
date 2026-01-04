import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

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
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        addTypename: true,
        enumsAsTypes: true,
        nonOptionalTypename: true,
        useTypeImports: true,
      },
    },
  },
};

export default config;
