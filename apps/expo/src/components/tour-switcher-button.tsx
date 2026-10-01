import FontAwesome from "@expo/vector-icons/FontAwesome";
import { usePathname, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { useCSSVariable } from "uniwind";
import { TourLogo } from "~/components/tour-logo";
import { Skeleton } from "~/components/ui/skeleton";
import { Text } from "~/components/ui/text";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";

export function TourSwitcherButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { tourCode, tours } = useTourCode();
  const mutedForeground = useCSSVariable("--color-muted-foreground");
  const tourName = tours.find((tour) => tour.tourCode === tourCode)?.tourName;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Switch tour, current tour ${tourName ?? tourCode}`}
      className="flex-row items-center gap-2 px-1"
      style={({ pressed }) => (pressed ? { opacity: 0.6 } : undefined)}
      onPress={() =>
        router.push({
          pathname: "/[tour]/tours",
          params: { tour: tourCode, returnTo: pathname },
        })
      }
    >
      <TourLogo tourCode={tourCode} />
      {tourName ? (
        <Text className="font-semibold">{tourName}</Text>
      ) : (
        <Skeleton className="h-4 w-24" />
      )}
      <FontAwesome
        name="chevron-down"
        size={12}
        color={String(mutedForeground)}
      />
    </Pressable>
  );
}
