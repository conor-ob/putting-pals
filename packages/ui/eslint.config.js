import baseConfig from "@pkg/eslint/base";
import reactConfig from "@pkg/eslint/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
