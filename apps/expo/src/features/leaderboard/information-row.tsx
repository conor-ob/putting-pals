import { Text, View } from "react-native";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export function InformationRow({
  row,
}: {
  row: Extract<
    RouterOutputs["leaderboard"]["getById"]["players"][number],
    { __typename: "InformationRow" }
  >;
}) {
  return (
    <View className="flex flex-row items-center gap-2">
      <Text className="text-foreground w-1/3">{row.displayText}</Text>
    </View>
  );
}
