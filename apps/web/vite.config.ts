import * as child from "child_process";
import path from "path";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

import { envSchema } from "./src/env/schema";

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd(), "");
  const env = envSchema.parse({
    ...viteEnv,
    SENTRY_PROJECT: "putting-pals-web",
    GIT_COMMIT_SHA:
      process.env.RAILWAY_GIT_COMMIT_SHA ??
      process.env.GITHUB_SHA ??
      child.execSync("git rev-parse HEAD").toString().trim(),
  });

  if (mode === "test") {
    return {
      plugins: [react()],
      test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.ts"],
      },
    };
  } else {
    return {
      resolve: {
        alias: {
          "@components": path.resolve(__dirname, "./src/components"),
          "@env": path.resolve(__dirname, "./src/env"),
          "@features": path.resolve(__dirname, "./src/features"),
          "@providers": path.resolve(__dirname, "./src/providers"),
          "@theme": path.resolve(__dirname, "./src/theme"),
        },
      },
      define: {
        "import.meta.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
        "import.meta.env.SENTRY_DSN": JSON.stringify(env.SENTRY_DSN),
        "import.meta.env.SENTRY_PROJECT": JSON.stringify(env.SENTRY_PROJECT),
        "import.meta.env.GIT_COMMIT_SHA": JSON.stringify(env.GIT_COMMIT_SHA),
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes("node_modules") && !id.includes("sentry")) {
                return (
                  id
                    .toString()
                    .match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)
                    ?.groups!.moduleName ?? "vendor"
                );
              }
            },
          },
        },
        sourcemap: env.CI,
      },
      server: {
        open: true,
        port: env.PORT,
        proxy: {
          "/api": {
            target: "http://localhost:4000",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
      plugins: [
        tsconfigPaths(),
        react(),
        VitePWA({
          // devOptions: {
          //   enabled: true, // TODO script dev:pwa
          // },
          registerType: "autoUpdate",
          manifest: {
            short_name: "Putting Pals",
            name: "Putting Pals",
            start_url: ".",
            display: "standalone",
            theme_color: "#1F1F1F", // Android theme color - not necessary for iOS
            background_color: "#121212", // Android background color - not necessary for iOS
            icons: [
              {
                src: "/pwa-64x64.png",
                sizes: "64x64",
                type: "image/png",
              },
              {
                src: "/pwa-192x192.png",
                sizes: "192x192",
                type: "image/png",
              },
              {
                src: "/pwa-512x512.png",
                sizes: "512x512",
                type: "image/png",
              },
              {
                src: "/maskable-icon-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
              },
            ],
          },
        }),
        sentryVitePlugin({
          project: env.SENTRY_PROJECT,
          disable: !env.CI,
          release: {
            name: `${env.SENTRY_PROJECT}@${env.GIT_COMMIT_SHA}`,
          },
        }),
      ],
    };
  }
});
