import { View } from "react-native";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";
import { NameColumn, PositionColumn, ScoreColumn } from "./leaderboard-columns";

export function PuttingPalsPlayerRow({
  row,
}: {
  row: Extract<
    RouterOutputs["leaderboard"]["getById"]["players"][number],
    { __typename: "PuttingPalsPlayerRow" }
  >;
}) {
  return (
    <View className="flex flex-row items-center">
      <PositionColumn>{row.scoringData.position}</PositionColumn>
      <NameColumn>{row.player.displayName}</NameColumn>
      <ScoreColumn sort={row.scoringData.totalSort}>
        {row.scoringData.total}
      </ScoreColumn>
    </View>
  );
}
