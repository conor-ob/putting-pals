import type { Theme } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavigationThemeProvider,
} from "@react-navigation/native";
import { useResolveClassNames } from "uniwind";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  const theme = {
    dark: colorScheme === "dark",
    colors: {
      primary: useResolveClassNames("bg-primary").backgroundColor as string,
      background: useResolveClassNames("bg-background")
        ?.backgroundColor as string,
      card: useResolveClassNames("bg-card")?.backgroundColor as string,
      text: useResolveClassNames("text-card-foreground")?.color as string,
      border: useResolveClassNames("bg-border").backgroundColor as string,
      notification: useResolveClassNames("bg-notification")
        ?.backgroundColor as string,
    },
    fonts: colorScheme === "dark" ? DarkTheme.fonts : DefaultTheme.fonts,
  } satisfies Theme;

  return (
    <NavigationThemeProvider value={theme}>{children}</NavigationThemeProvider>
  );
}
