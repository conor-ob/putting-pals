import { Stack } from "expo-router";
import { Platform } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: Platform.OS === "ios",
        headerLargeTitle: true,
        headerTitle: "Feed",
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
}
