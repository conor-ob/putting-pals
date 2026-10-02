import type { Config } from "tailwindcss";

import uiPreset from "@pkg/ui/preset";

const config = {
  content: [...uiPreset.content],
  presets: [uiPreset],
} satisfies Config;

export default config;
