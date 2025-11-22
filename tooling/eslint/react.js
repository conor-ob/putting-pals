import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default defineConfig({
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    react: reactPlugin,
    "react-hooks": hooksPlugin,
  },
  rules: {
    ...reactPlugin.configs["jsx-runtime"].rules,
    ...hooksPlugin.configs.recommended.rules,
  },
  languageOptions: {
    globals: {
      React: "writable",
    },
  },
});
