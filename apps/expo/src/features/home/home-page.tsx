import { useQuery } from "@tanstack/react-query";
import { ScrollView, View } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { Text } from "~/components/ui/text";
import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  const { data: tournament } = useQuery(
    trpc.tournament.getById.queryOptions({ id: undefined }),
  );

  const { data: leaderboard } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode: "P", id: "R2024100" }),
  );

  const { data: competition } = useQuery(
    trpc.competition.getAll.queryOptions(),
  );

  const { data: schedule } = useQuery(trpc.schedule.get.queryOptions());

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("leaderboard", leaderboard);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("competition", competition);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule", schedule);

  return (
    <ScrollView className="">
      {tournament && (
        <TournamentHeader tournament={tournament} className="p-4" />
      )}
      {leaderboard?.players.map((player, index) => (
        <View key={`${player.id}-${index}`}>
          <Text>{player.__typename}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
