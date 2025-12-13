import { Button, ScrollView, Text, View } from "react-native";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";

export function SchedulePage() {
  const { tourCode, setTourCode } = useTourCode();

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
    <ScrollView className="bg-background flex-1 justify-center gap-4">
      <Button
        title="Putting Pals"
        onPress={() => {
          setTourCode("P");
        }}
      />
      <Button
        title="PGA Tour"
        onPress={() => {
          setTourCode("R");
        }}
      />
      {schedule?.map((season) => (
        <View key={`${tourCode}-${season.year}`}>
          {season.completed.map((month) => (
            <View key={`${tourCode}-${month.month}-completed`}>
              <Text className="text-foreground">{`${month.month} ${season.year}`}</Text>
              {month.tournaments.map((tournament) => (
                <Text
                  key={`${tourCode}-${tournament.id}-completed`}
                  className="text-foreground"
                >
                  {tournament.tournamentName}
                </Text>
              ))}
            </View>
          ))}
          {season.upcoming.map((month) => (
            <View key={`${tourCode}-${month.month}-upcoming`}>
              <Text className="text-foreground">{`${month.month} ${season.year}`}</Text>
              {month.tournaments.map((tournament) => (
                <Text
                  key={`${tourCode}-${tournament.id}-upcoming`}
                  className="text-foreground"
                >
                  {tournament.tournamentName}
                </Text>
              ))}
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
