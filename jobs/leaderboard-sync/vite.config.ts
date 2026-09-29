import * as path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "./src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: (id) => {
        // Externalize Node.js built-in modules
        if (id.startsWith("node:") || !id.includes("/")) {
          return true;
        }
        // Externalize all dependencies
        return !id.startsWith(".") && !path.isAbsolute(id);
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
});
