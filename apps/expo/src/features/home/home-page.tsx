import { useQuery } from "@tanstack/react-query";
import { ScrollView, View } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { Text } from "~/components/ui/text";
import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  const tourCode = "P";
  const { data: tournament } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode }),
  );

  const { data: leaderboard } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode }),
  );

  const { data: schedule } = useQuery(
    trpc.schedule.get.queryOptions({ tourCode }),
  );

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("leaderboard", leaderboard);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule", schedule);

  return (
    <ScrollView className="p-4">
      {tournament && <TournamentHeader tournament={tournament} />}
      {leaderboard?.rows.map((row) => (
        <View key={row.id} className="flex flex-row items-center gap-2">
          {row.__typename === "PlayerRowV3" ? (
            <View className="flex flex-row w-full items-center gap-2">
              <Text className="w-1/3">{row.player.displayName}</Text>
              <Text className="w-1/3">{row.scoringData.position}</Text>
              <Text className="w-1/3">{row.scoringData.total}</Text>
            </View>
          ) : row.__typename === "PuttingPalsPlayerRow" ? (
            <View className="flex flex-row w-full items-center gap-2">
              <Text className="w-1/3">{row.player.displayName}</Text>
              <Text className="w-1/3">{row.scoringData.position}</Text>
              <Text className="w-1/3">{row.scoringData.total}</Text>
            </View>
          ) : row.__typename === "InformationRow" ? (
            <View className="flex flex-row w-full items-center gap-2">
              <Text>{row.displayText}</Text>
            </View>
          ) : null}
        </View>
      ))}
    </ScrollView>
  );
}
