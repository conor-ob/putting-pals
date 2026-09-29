import "~/global.css";

import { Stack } from "expo-router";

import { ThemeProvider } from "~/providers/theme/theme-provider";
import { TrpcProvider } from "~/providers/trpc/trpc-provider";

export default function Layout() {
  return (
    <ThemeProvider>
      <TrpcProvider>
        <Stack screenOptions={{ headerShown: false, animation: "none" }} />
      </TrpcProvider>
    </ThemeProvider>
  );
}
