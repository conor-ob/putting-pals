import { assertNever } from "@putting-pals/putting-pals-utils";
import { useCallback, useMemo } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useInfiniteQuery } from "~/providers/trpc/utils/use-infinite-query";
import { RoundStatusChangedV1 } from "./feed-items/round-status-changed-v1";
import { TournamentStatusChangedV1 } from "./feed-items/tournament-status-changed-v1";

export function FeedPage() {
  const { tourCode } = useTourCode();
  const {
    data: feedData,
    error: feedError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    trpc.feed.get.infiniteQueryOptions(
      { tourCode },
      { getNextPageParam: (lastPage) => lastPage.nextCursor },
    ),
  );

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("feedData", feedData);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("feedError", feedError);

  const feedItems = useMemo(
    () => feedData?.pages.flatMap((page) => page.items) ?? [],
    [feedData],
  );

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("feedItems", feedItems);

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const renderFooter = useCallback(() => {
    if (!isFetchingNextPage) return null;
    return (
      <View className="py-4">
        <ActivityIndicator />
      </View>
    );
  }, [isFetchingNextPage]);

  return (
    <FlatList
      data={feedItems}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        switch (item.payload.__typename) {
          case "RoundStatusChangedV1":
            return <RoundStatusChangedV1 item={item.payload} />;
          case "TournamentStatusChangedV1":
            return <TournamentStatusChangedV1 item={item.payload} />;
          case "HotStreakV1":
          case "LeaderChangedV1":
          case "PlayerDisqualifiedV1":
          case "PlayerMissedCutV1":
          case "PlayerWithdrawnV1":
            return (
              <View className="p-4">
                <Text className="text-foreground">
                  {`Unknown event type: ${item.payload.__typename}`}
                </Text>
              </View>
            );
          default:
            assertNever(item.payload);
        }
      }}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      contentContainerClassName="gap-2"
    />
  );
}
