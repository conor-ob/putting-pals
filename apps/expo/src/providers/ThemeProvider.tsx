import type { Theme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { useCSSVariable } from "uniwind";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  const theme = {
    dark: colorScheme === "dark",
    colors: {
      primary: useThemeColor("--color-primary", (colors) => colors.primary),
      background: useThemeColor(
        "--color-background",
        (colors) => colors.background,
      ),
      card: useThemeColor("--color-card", (colors) => colors.card),
      text: useThemeColor("--color-card-foreground", (colors) => colors.text),
      border: useThemeColor("--color-border", (colors) => colors.border),
      notification: useThemeColor(
        "--color-notification",
        (colors) => colors.notification,
      ),
    },
    fonts: colorScheme === "dark" ? DarkTheme.fonts : DefaultTheme.fonts,
  } satisfies Theme;

  return (
    <NavigationThemeProvider value={theme}>{children}</NavigationThemeProvider>
  );
}

function useThemeColor(
  cssVariable: string,
  fallback: (colors: Theme["colors"]) => string,
) {
  const color = useCSSVariable(cssVariable);
  const colorScheme = useColorScheme();
  return color !== undefined
    ? String(color)
    : fallback(colorScheme === "dark" ? DarkTheme.colors : DefaultTheme.colors);
}
