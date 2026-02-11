import { View } from "react-native";
import type { PlayerRow as PlayerRowType } from "~/providers/trpc/types";
import { NameColumn, PositionColumn, ScoreColumn } from "./leaderboard-columns";

export function PlayerRow({ row }: { row: PlayerRowType }) {
  return (
    <View className="flex flex-row items-center">
      <PositionColumn>{row.scoringData.position}</PositionColumn>
      <NameColumn>{row.player.displayName}</NameColumn>
      <ScoreColumn sort={row.scoringData.totalSort}>
        {row.scoringData.total}
      </ScoreColumn>
      <ScoreColumn sort={row.scoringData.scoreSort}>
        {row.scoringData.score}
      </ScoreColumn>
    </View>
  );
}
