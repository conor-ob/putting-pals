import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal(config) {
    // storybook isn't a PWA, and the plugin fails trying to precache its bundle
    config.plugins = config.plugins
      ?.flat()
      .filter(
        (plugin) =>
          !(
            plugin &&
            "name" in plugin &&
            plugin.name.startsWith("vite-plugin-pwa")
          ),
      );
    return config;
  },
};
export default config;
