import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react-vite";

import "../src/theme/globals.css";

import { DocsContainer } from "./DocsContainer";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      container: DocsContainer,
    },
    layout: "centered",
    backgrounds: { disabled: true },
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
