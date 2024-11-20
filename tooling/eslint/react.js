import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import storybookPlugin from "eslint-plugin-storybook";

/** @type {Awaited<import('typescript-eslint').Config>} */
export default [
  {
    ignores: ["**/.storybook/*.{ts,tsx}"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      storybook: storybookPlugin,
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
  },
];
