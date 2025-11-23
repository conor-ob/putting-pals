import { Text, View, type ViewProps } from "react-native";
import { cn } from "~/lib/utils";
import type { Tournament } from "./tournament-header";

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
