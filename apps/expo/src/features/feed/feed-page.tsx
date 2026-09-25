import { assertNever } from "@putting-pals/putting-pals-utils";
import { useCallback, useMemo } from "react";
import { ActivityIndicator, FlatList, Platform, Text, View } from "react-native";
import Animated from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  LARGE_TITLE_HEADER_HEIGHT,
  LargeTitleHeaderOverlay,
  LargeTitleText,
  useLargeTitleHeader,
} from "~/components/large-title-header";
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

  const feedEvents = useMemo(
    () => feedData?.pages.flatMap((page) => page.events) ?? [],
    [feedData],
  );

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("feedEvents", feedEvents);

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

  const renderItem = useCallback(
    ({ item }: { item: (typeof feedEvents)[number] }) => {
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
    },
    [],
  );

  const { scrollY, scrollHandler } = useLargeTitleHeader();
  const insets = useSafeAreaInsets();

  // iOS uses the native headerLargeTitle configured in feed/_layout.tsx.
  if (Platform.OS === "ios") {
    return (
      <FlatList
        data={feedEvents}
        keyExtractor={(item) => item.sequence.toString()}
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerClassName="gap-2"
        contentInsetAdjustmentBehavior="automatic"
      />
    );
  }

  return (
    <>
      <LargeTitleHeaderOverlay title="Feed" scrollY={scrollY} />
      <Animated.FlatList
        data={feedEvents}
        keyExtractor={(item) => item.sequence.toString()}
        renderItem={renderItem}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <LargeTitleText title="Feed" scrollY={scrollY} />
        }
        ListFooterComponent={renderFooter}
        contentContainerClassName="gap-2 px-4"
        contentContainerStyle={{
          paddingTop: insets.top + LARGE_TITLE_HEADER_HEIGHT,
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />
    </>
  );
}
