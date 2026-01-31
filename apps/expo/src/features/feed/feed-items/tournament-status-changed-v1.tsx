import { Text, View } from "react-native";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export function TournamentStatusChangedV1({
  item,
}: {
  item: RouterOutputs["feed"]["get"]["items"][number]["payload"] & {
    __typename: "TournamentStatusChangedV1";
  };
}) {
  return (
    <View className="p-4">
      <Text className="text-foreground">{`{item.tournamentName} ${item.next.tournamentStatus === "COMPLETED" ? "has finished" : "has started"}`}</Text>
    </View>
  );
}
