import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";

const PGA_TOUR_SCHEMA = {
  "https://orchestrator.pgatour.com/graphql": {
    headers: {
      "X-Api-Key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
    },
  },
};

const PUTTING_PALS_SCHEMA = "src/putting-pals/graphql/schema.graphql";

const sharedConfig = {
  addTypename: true,
  enumsAsTypes: true,
  immutableTypes: true,
  nonOptionalTypename: true,
  printFieldsOnNewLines: true,
  useTypeImports: true,
};

const config: CodegenConfig = {
  generates: {
    "src/pga-tour/generated/graphql.ts": {
      schema: [PGA_TOUR_SCHEMA],
      documents: [
        "src/pga-tour/graphql/**/*.graphql",
        "src/shared/graphql/**/*.graphql",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        ...sharedConfig,
        typesPrefix: "Api",
        fragmentPrefix: "Api",
        fragmentVariablePrefix: "Api",
        documentVariablePrefix: "Api",
      },
    },
    "src/putting-pals/generated/graphql.ts": {
      schema: [PGA_TOUR_SCHEMA, PUTTING_PALS_SCHEMA],
      documents: [
        "src/putting-pals/graphql/**/*.graphql",
        "src/shared/graphql/**/*.graphql",
      ],
      plugins: ["typescript", "typescript-operations"],
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        ...sharedConfig,
        typesPrefix: "Domain",
        fragmentPrefix: "Domain",
        fragmentVariablePrefix: "Domain",
        documentVariablePrefix: "Domain",
      },
    },
  },
};

export default config;
