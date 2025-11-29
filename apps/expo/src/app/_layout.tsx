import "~/global.css";

import { Stack } from "expo-router";

import { ThemeProvider } from "~/providers/theme/theme-provider";
import { TourCodeProvider } from "~/providers/tour-code/tour-code-provider";
import { TrpcProvider } from "~/providers/trpc/trpc-provider";

export default function Layout() {
  return (
    <ThemeProvider>
      <TrpcProvider>
        <TourCodeProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </TourCodeProvider>
      </TrpcProvider>
    </ThemeProvider>
  );
}
