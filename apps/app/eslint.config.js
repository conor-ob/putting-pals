// import expoConfig from "eslint-config-expo/flat.js";

import baseConfig from "@pkg/eslint/base";
import reactConfig from "@pkg/eslint/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".expo/**", "expo-plugins/**", "dist/*"],
  },
  ...baseConfig,
  ...reactConfig,
  // ...expoConfig,
];
