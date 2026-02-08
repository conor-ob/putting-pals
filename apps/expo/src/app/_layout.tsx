import "~/global.css";

import { Stack } from "expo-router";

import { ThemeProvider } from "~/providers/theme/theme-provider";
import { TrpcProvider } from "~/providers/trpc/trpc-provider";

export default function Layout() {
  return (
    <ThemeProvider>
      <TrpcProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="[tour]" options={{ headerShown: false }} />
        </Stack>
      </TrpcProvider>
    </ThemeProvider>
  );
}
