import { useQuery } from "@tanstack/react-query";
import { ScrollView, View } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { Text } from "~/components/ui/text";
import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  const { data: tournament } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode: "P" }),
  );

  const { data: leaderboard } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode: "P" }),
  );

  const { data: schedule } = useQuery(
    trpc.schedule.get.queryOptions({ tourCode: "P" }),
  );

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("leaderboard", leaderboard);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule", schedule);

  return (
    <ScrollView className="">
      {tournament && (
        <TournamentHeader tournament={tournament} className="p-4" />
      )}
      {leaderboard?.rows.map((row, index) => (
        <View key={`${row.id}-${index}`}>
          <Text>{row.__typename}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
