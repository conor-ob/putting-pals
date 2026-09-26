import type { Theme } from "expo-router";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "expo-router";
import { type ColorValue, useColorScheme } from "react-native";
import { useCSSVariable } from "uniwind";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();
  const dark = colorScheme === "dark";
  const colors = dark ? DarkTheme.colors : DefaultTheme.colors;
  const fonts = dark ? DarkTheme.fonts : DefaultTheme.fonts;

  const theme = {
    dark,
    colors: {
      primary: useThemeColor("--color-primary", colors.primary),
      background: useThemeColor("--color-background", colors.background),
      card: useThemeColor("--color-card", colors.card),
      text: useThemeColor("--color-card-foreground", colors.text),
      border: useThemeColor("--color-border", colors.border),
      notification: useThemeColor("--color-notification", colors.notification),
    },
    fonts,
  } satisfies Theme;

  return (
    <NavigationThemeProvider value={theme}>{children}</NavigationThemeProvider>
  );
}

function useThemeColor(cssVariable: string, fallback: ColorValue) {
  const color = useCSSVariable(cssVariable);
  return color ? String(color) : fallback;
}
