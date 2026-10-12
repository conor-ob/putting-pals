import * as path from "node:path";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
  build: {
    ssr: path.resolve(import.meta.dirname, "./src/index.ts"),
    rolldownOptions: {
      output: {
        entryFileNames: "index.js",
      },
    },
  },
  ssr: {
    // Workspace packages export TypeScript source, which the Docker image
    // deletes, so bundle them along with their dependencies. Only the job's
    // own npm dependencies stay external
    noExternal: true,
    external: Object.keys(pkg.dependencies).filter(
      (name) => !name.startsWith("@putting-pals/"),
    ),
  },
  resolve: {
    tsconfigPaths: true,
  },
});
