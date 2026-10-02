import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

import { envSchema } from "./src/env/schema";

export default defineConfig(({ mode }) => {
  const viteEnv = loadEnv(mode, process.cwd(), "");
  const env = envSchema.parse(viteEnv);

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
          "@lib": path.resolve(__dirname, "./src/lib"),
          "@providers": path.resolve(__dirname, "./src/providers"),
          "@theme": path.resolve(__dirname, "./src/theme"),
          "@utils": path.resolve(__dirname, "./src/utils"),
        },
      },
      define: {
        "import.meta.env.NODE_ENV": JSON.stringify(env.NODE_ENV),
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes("node_modules")) {
                return (
                  id
                    .toString()
                    .match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^/]*)\//)
                    ?.groups?.moduleName ?? "vendor"
                );
              }
            },
          },
        },
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
        tailwindcss(),
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
      ],
    };
  }
});
