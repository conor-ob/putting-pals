import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import { Platform } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  LARGE_TITLE_HEADER_HEIGHT,
  LargeTitleHeaderOverlay,
  LargeTitleText,
  useLargeTitleHeader,
} from "~/components/large-title-header";
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

  const { scrollY, scrollHandler } = useLargeTitleHeader();
  const insets = useSafeAreaInsets();

  const list = (
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
  );

  // iOS uses the native headerLargeTitle configured in leaderboard/_layout.tsx.
  if (Platform.OS === "ios") {
    return (
      <Animated.ScrollView
        className="p-4 gap-4"
        contentInsetAdjustmentBehavior="automatic"
      >
        {tournament && (
          <TournamentHeader tournament={tournament} className="mb-4" />
        )}
        <TourCodeSwitcher />
        {list}
      </Animated.ScrollView>
    );
  }

  return (
    <>
      <LargeTitleHeaderOverlay title="Leaderboard" scrollY={scrollY} />
      <Animated.ScrollView
        className="p-4 gap-4"
        contentContainerStyle={{
          paddingTop: insets.top + LARGE_TITLE_HEADER_HEIGHT,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <LargeTitleText title="Leaderboard" scrollY={scrollY} />
        {tournament && (
          <TournamentHeader tournament={tournament} className="mb-4" />
        )}
        <TourCodeSwitcher />
        {list}
      </Animated.ScrollView>
    </>
  );
}
