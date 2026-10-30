import { Pressable, Text, View } from "react-native";
import { TournamentLogo } from "~/components/tournament-logo";
import { TournamentStatus } from "~/components/tournament-status";
import type { Tournament } from "~/providers/trpc/types";

export function ScheduleRow({
  tournament,
  onPress,
}: {
  tournament: Tournament;
  onPress?: () => void;
}) {
  return (
    <Pressable
      className="flex flex-row items-center gap-3 py-3"
      disabled={onPress === undefined}
      onPress={onPress}
      accessibilityRole={onPress ? "button" : undefined}
    >
      <TournamentLogo source={tournament.images.logo} className="h-12 w-12" />
      <View className="flex flex-1 flex-col gap-0.5">
        {tournament.schedule.status === "IN_PROGRESS" && (
          <TournamentStatus tournament={tournament} />
        )}
        <Text className="line-clamp-1 text-base font-semibold leading-snug tracking-tight text-foreground">
          {tournament.name}
        </Text>
        <Text className="line-clamp-1 text-sm text-muted-foreground">
          {tournament.schedule.displayDate}
        </Text>
        <Text className="line-clamp-1 text-sm text-muted-foreground">
          {tournament.location.displayLocation}
        </Text>
      </View>
    </Pressable>
  );
}
