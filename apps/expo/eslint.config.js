import baseConfig from "@putting-pals/eslint/base";
import reactConfig from "@putting-pals/eslint/react";

// import expoConfig from "eslint-config-expo/flat.js";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["workbox-config.js"],
  },
  ...baseConfig,
  ...reactConfig,
  // ...expoConfig,
];
