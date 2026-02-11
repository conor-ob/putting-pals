import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { TourCodeSwitcher } from "~/providers/tour-code/tour-code-switcher";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";
import { useLocalStorage } from "~/storage/use-local-storage";
import { InformationRow } from "./information-row";
import { PlayerRow } from "./player-row";
import { PuttingPalsPlayerRow } from "./putting-pals-player-row";

export function LeaderboardPage() {
  const { tourCode } = useTourCode();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { data: tournament, error: tournamentError } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode, id }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament.data", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament.error", tournamentError);

  const { data: leaderboard, error: leaderboardError } = useQuery(
    trpc.leaderboard.getById.queryOptions({ tourCode, id }),
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
      {tournament && (
        <TournamentHeader tournament={tournament} className="mb-4" />
      )}
      <TourCodeSwitcher />
      <FlashList
        data={[...(leaderboard?.players ?? [])].sort(
          (a, b) => a.leaderboardSortOrder - b.leaderboardSortOrder,
        )}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          switch (item.__typename) {
            case "PlayerRow":
              return <PlayerRow row={item} />;
            case "PuttingPalsPlayerRow":
              return <PuttingPalsPlayerRow row={item} />;
            case "InformationRow":
              return <InformationRow row={item} />;
          }
        }}
      />
    </ScrollView>
  );
}
