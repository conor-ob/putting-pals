import { useQuery } from "@tanstack/react-query";
import { Button, ScrollView, Text, View } from "react-native";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { trpc } from "~/providers/trpc/utils/trpc";

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
      {schedule?.completed?.map((month) => (
        <View key={month.month}>
          <Text className="text-foreground">{month.month}</Text>
          {month.tournaments.map((tournament) => (
            <Text key={tournament.id} className="text-foreground">
              {tournament.tournamentName}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
