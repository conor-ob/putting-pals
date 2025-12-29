import { Text, View } from "react-native";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export function TournamentStatusChanged({
  item,
}: {
  item: RouterOutputs["feed"]["get"]["items"][number]["feedItem"] & {
    __typename: "TournamentStatusChangedV1";
  };
}) {
  return (
    <View className="p-4">
      <Text className="text-foreground">{item.tournamentName}</Text>
    </View>
  );
}
