import { Stack, useLocalSearchParams } from "expo-router";
import { TourCodeProvider } from "~/providers/tour-code/tour-code-provider";
import type { TourCode } from "~/providers/trpc/types";

export default function Layout() {
  const { tour: tourCode } = useLocalSearchParams<"/[tour]">();

  return (
    <TourCodeProvider tourCode={tourCode as TourCode}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="tours"
          options={{
            presentation: "formSheet",
            sheetAllowedDetents: [0.5, 1],
            sheetGrabberVisible: true,
          }}
        />
      </Stack>
    </TourCodeProvider>
  );
}
