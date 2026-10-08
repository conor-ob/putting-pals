/// <reference types="vitest" />
import * as path from "node:path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(import.meta.dirname, "./src"),
      formats: ["es"],
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: parseInt(process.env.PORT ?? "4000", 10),
  },
  plugins: [
    ...VitePluginNode({
      // Nodejs native Request adapter
      // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
      // you can also pass a function if you are using other frameworks, see Custom Adapter section
      adapter: "fastify",

      // tell the plugin where is your project entry
      appPath: "./src/index.ts",

      // Optional, default: 'viteNodeApp'
      // the name of named export of you app from the appPath file
      exportName: "viteNodeApp",

      // Optional, default: false
      // if you want to init your app on boot, set this to true
      initAppOnBoot: true,

      // Optional, default: 'vite'
      // The TypeScript compiler mode you want to use
      // 'vite' uses Vite's default transformer pipeline (Oxc)
      // 'swc' is supported as an opt-in path (e.g. decorator metadata workflows)
      // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
      tsCompiler: "vite",
    }),
    {
      // VitePluginNode forces a single build input (appPath), so add the
      // migrate entry point (Railway pre-deploy command) after it runs
      name: "migrate-entry",
      enforce: "post",
      config: () => ({
        build: {
          rolldownOptions: {
            input: {
              index: path.resolve(import.meta.dirname, "./src/index.ts"),
              migrate: path.resolve(import.meta.dirname, "./src/migrate.ts"),
            },
          },
        },
      }),
    },
  ],
});
