import { defineConfig } from "tsdown";

export default defineConfig({
  // migrate runs as the Railway pre-deploy command
  entry: ["src/index.ts", "src/migrate.ts"],
  platform: "node",
  format: "esm",
  fixedExtension: false,
  deps: {
    // Workspace packages export TypeScript source, which the Docker image
    // deletes, so bundle them along with their dependencies. The server's own
    // npm dependencies stay external
    alwaysBundle: [/^@putting-pals\//],
    onlyBundle: false,
  },
});
