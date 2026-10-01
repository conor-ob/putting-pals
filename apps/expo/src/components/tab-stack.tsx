import { Stack } from "expo-router";
import { TourSwitcherButton } from "~/components/tour-switcher-button";

/**
 * Stack for a root tab screen, giving it a header with the tour switcher and
 * a large title on iOS.
 */
export function TabStack({ title }: { title: string }) {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title,
          headerLargeTitleEnabled: true,
          headerLeft: () => <TourSwitcherButton />,
        }}
      />
    </Stack>
  );
}
