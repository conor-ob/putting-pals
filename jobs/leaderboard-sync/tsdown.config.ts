import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  platform: "node",
  format: "esm",
  fixedExtension: false,
  deps: {
    // Workspace packages export TypeScript source, which the Docker image
    // deletes, so bundle them along with their dependencies. The job's own
    // npm dependencies stay external
    alwaysBundle: [/^@putting-pals\//],
    onlyBundle: false,
  },
});
