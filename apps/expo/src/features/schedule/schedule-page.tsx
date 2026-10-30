import { FlashList } from "@shopify/flash-list";
import { type Href, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Skeleton } from "~/components/ui/skeleton";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { TourCodeSwitcher } from "~/providers/tour-code/tour-code-switcher";
import type { TourCode, Tournament } from "~/providers/trpc/types";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";
import { FeaturedTournamentCard } from "./featured-tournament-card";
import {
  getFeaturedTournament,
  getScheduleItems,
  hasLeaderboard,
} from "./schedule-items";
import { ScheduleRow } from "./schedule-row";
import { SeasonPicker } from "./season-picker";

export function SchedulePage() {
  const { tourCode } = useTourCode();
  const router = useRouter();

  // Scoped to the Tour so switching Tours goes back to its current Season.
  const [selection, setSelection] = useState<{
    tourCode: TourCode;
    season: number;
  }>();
  const pickedSeason =
    selection?.tourCode === tourCode ? selection.season : undefined;

  const { data: seasons } = useQuery(
    trpc.season.get.queryOptions({ tourCode }),
  );
  const {
    data: schedule,
    isPending,
    isError,
    refetch,
  } = useQuery(
    trpc.schedule.getByYear.queryOptions({
      tourCode,
      year: pickedSeason === undefined ? undefined : String(pickedSeason),
    }),
  );

  const featured = schedule && getFeaturedTournament(schedule);
  const items = schedule ? getScheduleItems(schedule, featured) : [];

  function onPressTournament(tournament: Tournament) {
    if (!hasLeaderboard(tournament)) {
      return undefined;
    }
    return () =>
      router.push(`/${tourCode}/leaderboard/${tournament.id}` as Href);
  }

  return (
    <FlashList
      data={items}
      contentContainerStyle={{ padding: 16 }}
      keyExtractor={(item) =>
        item.type === "section" ? `section:${item.title}` : item.tournament.id
      }
      getItemType={(item) => item.type}
      ListHeaderComponent={
        <View className="flex flex-col gap-4">
          {seasons && (
            <SeasonPicker
              seasons={seasons}
              selected={pickedSeason ?? seasons.find((s) => s.current)?.value}
              onSelect={(season) => setSelection({ tourCode, season })}
            />
          )}
          <TourCodeSwitcher />
          {featured && (
            <FeaturedTournamentCard
              tournament={featured}
              onPress={
                featured.schedule.status === "IN_PROGRESS"
                  ? onPressTournament(featured)
                  : undefined
              }
            />
          )}
          {isPending && <ScheduleSkeleton />}
          {isError && <ScheduleError onRetry={() => refetch()} />}
        </View>
      }
      renderItem={({ item }) => {
        switch (item.type) {
          case "section":
            return (
              <Text className="pt-6 pb-1 text-lg font-bold tracking-tight text-foreground">
                {item.title}
              </Text>
            );
          case "tournament":
            return (
              <ScheduleRow
                tournament={item.tournament}
                onPress={onPressTournament(item.tournament)}
              />
            );
        }
      }}
    />
  );
}

function ScheduleSkeleton() {
  return (
    <View className="flex flex-col">
      {[0, 1, 2, 3, 4].map((i) => (
        <View key={i} className="flex flex-row items-center gap-3 py-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <View className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </View>
        </View>
      ))}
    </View>
  );
}

function ScheduleError({ onRetry }: { onRetry: () => void }) {
  return (
    <View className="flex flex-col items-center gap-3 py-8">
      <Text className="text-base text-muted-foreground">
        Couldn't load the Schedule.
      </Text>
      <Pressable
        className="rounded-full bg-primary px-4 py-2"
        onPress={onRetry}
        accessibilityRole="button"
      >
        <Text className="text-sm font-semibold text-primary-foreground">
          Retry
        </Text>
      </Pressable>
    </View>
  );
}
