import * as child from "child_process";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import { envSchema } from "./src/env/schema";

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd(), "");
  const env = envSchema.parse({
    ...viteEnv,
    SENTRY_PROJECT: "turbostack-web", // TODO CHANGEME
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
        react(),
        VitePWA({
          devOptions: {
            enabled: true,
          },
          registerType: "autoUpdate",
          workbox: {
            cleanupOutdatedCaches: true,
            globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
          },
          manifest: {
            short_name: "Ionic PWA",
            name: "Ionic PWA",
            start_url: ".",
            display: "standalone",
            theme_color: "#000000",
            background_color: "#000000",
            icons: [
              { src: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
              { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
              { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
              {
                src: "/icon-192-maskable.png",
                type: "image/png",
                sizes: "192x192",
                purpose: "maskable",
              },
              {
                src: "/icon-512-maskable.png",
                type: "image/png",
                sizes: "512x512",
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
