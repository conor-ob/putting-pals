import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams, useRouter } from "expo-router";
import { type ReactNode, useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useCSSVariable } from "uniwind";
import { RoundStatusBadge } from "~/components/round-status-badge";
import { RoundStatusLabel } from "~/components/round-status-label";
import { TourLogo } from "~/components/tour-logo";
import { Skeleton } from "~/components/ui/skeleton";
import { Text } from "~/components/ui/text";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import type { Tour, Tournament } from "~/providers/trpc/types";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";

const HOLD_MS = 3000;
const FADE_MS = 300;

export function ToursPage() {
  const router = useRouter();
  const { returnTo } = useLocalSearchParams<{ returnTo?: string }>();
  const { tourCode, tours, setTourCode } = useTourCode();
  // One clock for every row so they all flip together
  const showStatus = useToggle(HOLD_MS + FADE_MS);

  const onSelect = (tour: Tour) => {
    if (tour.tourCode === tourCode) {
      router.back();
      return;
    }
    setTourCode(tour.tourCode, returnTo);
  };

  return (
    <ScrollView contentContainerClassName="py-4">
      <Text variant="large" className="mb-2 text-center">
        Tours
      </Text>
      {tours.length === 0
        ? Array.from({ length: 7 }, (_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static placeholders
            <View key={i} className="flex-row items-center gap-3 px-4 py-3">
              <Skeleton className="h-8 w-8 rounded-full" />
              <View className="flex-1 gap-1">
                <Skeleton className="h-5 w-32" />
                <TournamentStatusLineSkeleton />
              </View>
            </View>
          ))
        : tours.map((tour) => (
            <TourRow
              key={tour.tourCode}
              tour={tour}
              selected={tour.tourCode === tourCode}
              showStatus={showStatus}
              onPress={() => onSelect(tour)}
            />
          ))}
    </ScrollView>
  );
}

function TourRow({
  tour,
  selected,
  showStatus,
  onPress,
}: {
  tour: Tour;
  selected: boolean;
  showStatus: boolean;
  onPress: () => void;
}) {
  const { data: tournament, isPending } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode: tour.tourCode }),
  );
  const foreground = useCSSVariable("--color-foreground");

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected }}
      onPress={onPress}
      className="flex-row items-center gap-3 px-4 py-3"
      style={({ pressed }) => (pressed ? { opacity: 0.6 } : undefined)}
    >
      <TourLogo tourCode={tour.tourCode} size={32} />
      <View className="flex-1 gap-1">
        <Text>{tour.tourName}</Text>
        {tournament ? (
          <TournamentStatusLine
            tournament={tournament}
            showStatus={showStatus}
          />
        ) : (
          isPending && <TournamentStatusLineSkeleton />
        )}
      </View>
      {selected && (
        <FontAwesome name="check" size={16} color={String(foreground)} />
      )}
    </Pressable>
  );
}

/**
 * Round badge, then the tournament name crossfading with the round status
 * label. Upcoming tournaments have no label, so the name stays put.
 */
function TournamentStatusLine({
  tournament,
  showStatus,
}: {
  tournament: Tournament;
  showStatus: boolean;
}) {
  const { schedule, status } = tournament;
  const upcoming =
    schedule.status === "NOT_STARTED" && status.roundStatus === "UPCOMING";

  return (
    <View className="flex-row items-center gap-1.5">
      <RoundStatusBadge color={status.roundStatusColor}>
        {upcoming ? status.roundStatusDisplay : status.roundDisplay}
      </RoundStatusBadge>
      <Crossfade showSecond={!upcoming && showStatus}>
        <Text variant="muted" className="leading-tight" numberOfLines={1}>
          {tournament.name}
        </Text>
        <RoundStatusLabel color={status.roundStatusColor} numberOfLines={1}>
          {status.roundStatusDisplay}
        </RoundStatusLabel>
      </Crossfade>
    </View>
  );
}

function TournamentStatusLineSkeleton() {
  return (
    <View className="flex-row items-center gap-1.5">
      <Skeleton className="h-4 w-7 rounded-sm" />
      <Skeleton className="h-4 w-40" />
    </View>
  );
}

/**
 * Stacks two children in the same spot and fades between them. The first
 * child stays in the layout flow so it sets the height.
 */
function Crossfade({
  showSecond,
  children: [first, second],
}: {
  showSecond: boolean;
  children: [ReactNode, ReactNode];
}) {
  const reducedMotion = useReducedMotion();
  const progress = useSharedValue(showSecond ? 1 : 0);

  useEffect(() => {
    progress.value = withTiming(showSecond ? 1 : 0, {
      duration: reducedMotion ? 0 : FADE_MS,
    });
  }, [progress, showSecond, reducedMotion]);

  const firstStyle = useAnimatedStyle(() => ({ opacity: 1 - progress.value }));
  const secondStyle = useAnimatedStyle(() => ({ opacity: progress.value }));

  return (
    <View className="flex-1">
      <Animated.View style={firstStyle}>{first}</Animated.View>
      <Animated.View style={[styles.stacked, secondStyle]}>
        {second}
      </Animated.View>
    </View>
  );
}

function useToggle(intervalMs: number) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setOn((value) => !value), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return on;
}

const styles = StyleSheet.create({
  stacked: { ...StyleSheet.absoluteFill, justifyContent: "center" },
});
