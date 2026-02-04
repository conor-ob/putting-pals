import { Text, View } from "react-native";
import type { TournamentStatusChangedV1 as TournamentStatusChangedV1Type } from "~/providers/trpc/types";

export function TournamentStatusChangedV1({
  item,
}: {
  item: TournamentStatusChangedV1Type;
}) {
  return (
    <View className="p-4">
      <Text className="text-foreground">{`{item.tournamentName} ${item.next.tournamentStatus === "COMPLETED" ? "has finished" : "has started"}`}</Text>
    </View>
  );
}
