import { View } from "react-native";
import type { PuttingPalsPlayerRow as PuttingPalsPlayerRowType } from "~/providers/trpc/types";
import { NameColumn, PositionColumn, ScoreColumn } from "./leaderboard-columns";

export function PuttingPalsPlayerRow({
  row,
}: {
  row: PuttingPalsPlayerRowType;
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
