import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { TournamentLogo } from "~/components/tournament-logo";
import { TournamentName } from "~/components/tournament-name";
import { TournamentStatus } from "~/components/tournament-status";
import { cn } from "~/lib/utils";
import type { Tournament } from "~/providers/trpc/types";

export function FeaturedTournamentCard({
  tournament,
  onPress,
}: {
  tournament: Tournament;
  onPress?: () => void;
}) {
  const hasCover = tournament.images.cover !== "";

  return (
    <Pressable
      className="overflow-hidden rounded-xl bg-card"
      disabled={onPress === undefined}
      onPress={onPress}
      accessibilityRole={onPress ? "button" : undefined}
    >
      {hasCover && (
        <>
          <Image
            source={tournament.images.cover}
            contentFit="cover"
            style={StyleSheet.absoluteFill}
          />
          <View className="absolute inset-0 bg-black/50" />
        </>
      )}
      <View
        className={cn(
          "flex flex-row items-center gap-4 p-4",
          hasCover && "pt-24",
        )}
      >
        <TournamentLogo source={tournament.images.logo} />
        <View className="flex flex-1 flex-col gap-1">
          {/* Schedule data has no reliable round status before a Tournament starts. */}
          {tournament.schedule.status === "IN_PROGRESS" && (
            <TournamentStatus tournament={tournament} />
          )}
          <TournamentName className={cn(hasCover && "text-white")}>
            {tournament.name}
          </TournamentName>
          <Text
            className={cn(
              "text-base font-medium leading-tight tracking-tight text-muted-foreground",
              hasCover && "text-white/80",
            )}
          >
            {tournament.schedule.displayDate}
          </Text>
          <Text
            className={cn(
              "line-clamp-1 text-sm text-muted-foreground",
              hasCover && "text-white/80",
            )}
          >
            {tournament.location.displayLocation}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
