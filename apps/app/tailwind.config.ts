import type { Config } from "tailwindcss";
// @ts-expect-error - no types
import nativewind from "nativewind/preset";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [nativewind],
  // darkMode: "media", // FIXME: Uncaught Error: Cannot manually set color scheme, as dark mode is type 'media'. Please use StyleSheet.setFlag('darkMode', 'class')
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-1": "var(--brand-1)",
        "brand-2": "var(--brand-2)",
      },
    },
  },
} satisfies Config;
