import { FlashList } from "@shopify/flash-list";
import { Platform } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  LARGE_TITLE_HEADER_HEIGHT,
  LargeTitleHeaderOverlay,
  LargeTitleText,
  useLargeTitleHeader,
} from "~/components/large-title-header";
import { Text } from "~/components/ui/text";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { TourCodeSwitcher } from "~/providers/tour-code/tour-code-switcher";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";

export function SchedulePage() {
  const { tourCode } = useTourCode();

  const { data: seasons, error: seasonsError } = useQuery(
    trpc.season.get.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("seasons.data", seasons);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("seasons.error", seasonsError);

  const { data: schedule, error: scheduleError } = useQuery(
    trpc.schedule.getByYear.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule.data", schedule);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule.error", scheduleError);

  const { scrollY, scrollHandler } = useLargeTitleHeader();
  const insets = useSafeAreaInsets();

  const list = (
    <FlashList
      data={[...(schedule?.completed ?? []), ...(schedule?.upcoming ?? [])]}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text className="text-foreground">{item.name}</Text>;
      }}
    />
  );

  // iOS uses the native headerLargeTitle configured in schedule/_layout.tsx.
  if (Platform.OS === "ios") {
    return (
      <Animated.ScrollView
        className="p-4 gap-4"
        contentInsetAdjustmentBehavior="automatic"
      >
        <TourCodeSwitcher />
        {list}
      </Animated.ScrollView>
    );
  }

  return (
    <>
      <LargeTitleHeaderOverlay title="Schedule" scrollY={scrollY} />
      <Animated.ScrollView
        className="p-4 gap-4"
        contentContainerStyle={{
          paddingTop: insets.top + LARGE_TITLE_HEADER_HEIGHT,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <LargeTitleText title="Schedule" scrollY={scrollY} />
        <TourCodeSwitcher />
        {list}
      </Animated.ScrollView>
    </>
  );
}
