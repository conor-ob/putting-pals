import { baseConfig } from "@putting-pals/eslint-config/base";
import { reactConfig } from "@putting-pals/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig(
  {
    ignores: [".expo/**", "expo-plugins/**"],
  },
  baseConfig,
  reactConfig,
);
