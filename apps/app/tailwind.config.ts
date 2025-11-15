import type { Config } from "tailwindcss";
// @ts-expect-error - no types
import nativewind from "nativewind/preset";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [nativewind],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
      },
    },
  },
} satisfies Config;
