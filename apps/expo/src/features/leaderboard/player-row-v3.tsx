import { View } from "react-native";
import type { PlayerRowV3 as PlayerRowV3Type } from "~/providers/trpc/types";
import { NameColumn, PositionColumn, ScoreColumn } from "./leaderboard-columns";

export function PlayerRowV3({ row }: { row: PlayerRowV3Type }) {
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
