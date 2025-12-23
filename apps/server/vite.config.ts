/// <reference types="vitest" />
import * as path from "node:path";
import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./src"),
      formats: ["es"],
    },
  },
  server: {
    // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
    port: parseInt(process.env.PORT ?? "4000", 10),
  },
  plugins: [
    tsconfigPaths(),
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

      // Optional, default: 'esbuild'
      // The TypeScript compiler you want to use
      // by default this plugin is using vite default ts compiler which is esbuild
      // 'swc' compiler is supported to use as well for frameworks
      // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
      tsCompiler: "esbuild",
    }),
  ],
});
