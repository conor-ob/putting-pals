import { Text, View, type ViewProps } from "react-native";
import { cn } from "~/lib/utils";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export function TournamentInfo({
  className,
  tournament,
  ...props
}: { tournament: RouterOutputs["tournament"]["getById"] } & ViewProps) {
  // TODO: carousel
  return (
    <View className={cn("", className)} {...props}>
      <Text className="text-base text-muted-foreground font-medium leading-tight tracking-tight">
        {tournament.displayDate}
      </Text>
    </View>
  );
}
