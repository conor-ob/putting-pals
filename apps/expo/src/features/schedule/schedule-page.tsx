import { FlashList } from "@shopify/flash-list";
import { ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { TourCodeSwitcher } from "~/providers/tour-code/tour-code-switcher";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";

export function SchedulePage() {
  const { tourCode } = useTourCode();

  const { data: scheduleYears, error: scheduleYearsError } = useQuery(
    trpc.schedule.getScheduleYears.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("scheduleYears.data", scheduleYears);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("scheduleYears.error", scheduleYearsError);

  const { data: schedule, error: scheduleError } = useQuery(
    trpc.schedule.getByYear.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule.data", schedule);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule.error", scheduleError);

  const { data: upcomingSchedule, error: upcomingScheduleError } = useQuery(
    trpc.schedule.getUpcoming.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("upcomingSchedule.data", upcomingSchedule);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("upcomingSchedule.error", upcomingScheduleError);

  return (
    <ScrollView className="p-4 gap-4">
      <TourCodeSwitcher />
      <FlashList
        data={[
          ...(schedule?.flatMap((season) =>
            season.completed.flatMap((month) => month.tournaments),
          ) ?? []),
          ...(schedule?.flatMap((season) =>
            season.upcoming.flatMap((month) => month.tournaments),
          ) ?? []),
        ]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text className="text-foreground">{item.tournamentName}</Text>;
        }}
      />
    </ScrollView>
  );
}
