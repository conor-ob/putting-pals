import baseConfig from "@pkg/eslint/base";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**", "src/types.ts"],
  },
  ...baseConfig,
];
