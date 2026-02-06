import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const sharedConfig = {
  addTypename: true,
  enumsAsTypes: true,
  // immutableTypes: true,
  nonOptionalTypename: true,
  printFieldsOnNewLines: true,
  useTypeImports: true,
  scalars: {
    AWSDateTime: {
      input: "string",
      output: "string",
    },
    AWSTimestamp: {
      input: "number",
      output: "number",
    },
  },
};

const config: CodegenConfig = {
  generates: {
    "src/generated/graphql.ts": {
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
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        ...sharedConfig,
        // noExport: true,
        typesPrefix: "Api",
        fragmentPrefix: "Api",
        fragmentVariablePrefix: "Api",
        documentVariablePrefix: "Api",
        documentMode: "documentNode",
      },
    },
  },
};

export default config;
