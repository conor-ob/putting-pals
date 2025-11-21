import { ThemeProvider } from "@/providers/theme/theme-provider";
import { TrpcProvider } from "@/providers/trpc/trpc-provider";
import { Stack } from "expo-router";

import "@/global.css";

export default function Layout() {
  return (
    <ThemeProvider>
      <TrpcProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </TrpcProvider>
    </ThemeProvider>
  );
}
