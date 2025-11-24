import { Text, View, type ViewProps } from "react-native";
import type { Tournament } from "~/components/tournament-header";
import { cn } from "~/lib/utils";

export function TournamentInfo({
  className,
  tournament,
  ...props
}: { tournament: Tournament } & ViewProps) {
  // TODO: carousel
  return (
    <View className={cn("", className)} {...props}>
      <Text className="text-base text-muted-foreground font-medium leading-tight tracking-tight">
        {tournament.displayDate}
      </Text>
    </View>
  );
}
