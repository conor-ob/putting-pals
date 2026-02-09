import { Stack, useLocalSearchParams } from "expo-router";
import { DEFAULT_TOUR_CODE } from "~/constants/tour";
import { TourCodeProvider } from "~/providers/tour-code/tour-code-provider";
import type { TourCode } from "~/providers/trpc/types";

export default function Layout() {
  const { tour: tourCodeParam } = useLocalSearchParams<"/[tour]">();
  const tourCode = (tourCodeParam as TourCode) ?? DEFAULT_TOUR_CODE;

  return (
    <TourCodeProvider tourCode={tourCode}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </TourCodeProvider>
  );
}
