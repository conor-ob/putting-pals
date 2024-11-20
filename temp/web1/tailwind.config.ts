import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import basePreset from "@pkg/tailwind/preset";
import uiPreset from "@pkg/ui/preset";

const config = {
  content: [...basePreset.content, ...uiPreset.content],
  presets: [basePreset, uiPreset],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
} satisfies Config;

export default config;
