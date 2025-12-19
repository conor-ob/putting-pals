import * as path from "node:path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src"),
      formats: ["es"],
    },
  },
  plugins: [tsconfigPaths()],
});
