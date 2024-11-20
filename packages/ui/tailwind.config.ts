import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// import defaultTheme from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{html,js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Inter", ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors
        red: {
          DEFAULT: "#ff0000",
        },
        green: {
          DEFAULT: "#00ff00",
        },
        blue: {
          DEFAULT: "#0000ff",
        },
        yellow: {
          DEFAULT: "#ffff00",
        },
        cyan: {
          DEFAULT: "#00ffff",
        },
        purple: {
          DEFAULT: "#ff00ff",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

export default config;
