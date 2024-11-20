import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

import "@pkg/tailwind/globals.css";

import { DocsContainer } from "./DocsContainer";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      container: DocsContainer,
    },
    layout: "centered",
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
