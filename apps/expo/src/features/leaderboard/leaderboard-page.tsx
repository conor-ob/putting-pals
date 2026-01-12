import { Button, ScrollView, View } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { Text } from "~/components/ui/text";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";
import { useLocalStorage } from "~/storage/use-local-storage";

export function LeaderboardPage() {
  const { tourCode, setTourCode } = useTourCode();
  const { data: tournament, error: tournamentError } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament.data", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament.error", tournamentError);

  const { data: leaderboard, error: leaderboardError } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("leaderboard.data", leaderboard);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("leaderboard.error", leaderboardError);

  // biome-ignore lint/correctness/noUnusedVariables: testing
  const { value: favourites, setValue: setFavourites } = useLocalStorage(
    `putting-pals:leaderboard:favourites:v1:${tourCode}:${leaderboard?.id}`,
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("favourites", favourites);

  return (
    <ScrollView className="p-4 gap-4">
      {tournament && <TournamentHeader tournament={tournament} />}
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
      {leaderboard?.players
        .toSorted((a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder)
        .map((row) => (
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
