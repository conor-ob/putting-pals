import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const pgaTourSchema = {
  "https://orchestrator.pgatour.com/graphql": {
    headers: {
      "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
    },
  },
};

const puttingPalsSchema = "src/graphql/putting-pals/schema/schema.graphql";

const sharedConfig = {
  addTypename: true,
  enumsAsTypes: true,
  immutableTypes: true,
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
    "src/graphql/pga-tour/generated/graphql.ts": {
      schema: [pgaTourSchema],
      documents: [
        "src/graphql/pga-tour/schema/**/*.graphql",
        "src/graphql/shared/schema/**/*.graphql",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        ...sharedConfig,
        noExport: true,
        typesPrefix: "Api",
        fragmentPrefix: "Api",
        fragmentVariablePrefix: "Api",
        documentVariablePrefix: "Api",
        documentMode: "documentNode",
      },
    },
    "src/graphql/putting-pals/generated/graphql.ts": {
      schema: [pgaTourSchema, puttingPalsSchema],
      documents: [
        "src/graphql/putting-pals/schema/**/*.graphql",
        "src/graphql/shared/schema/**/*.graphql",
      ],
      plugins: ["typescript", "typescript-validation-schema"],
      config: {
        ...sharedConfig,
        schema: "zodv4",
      },
    },
  },
};

export default config;
