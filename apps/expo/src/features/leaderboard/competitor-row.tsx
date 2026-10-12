import { View } from "react-native";
import type { CompetitorRow as CompetitorRowType } from "~/providers/trpc/types";
import { NameColumn, PositionColumn, ScoreColumn } from "./leaderboard-columns";

export function CompetitorRow({ row }: { row: CompetitorRowType }) {
  return (
    <View className="flex flex-row items-center">
      <PositionColumn>{row.scoringData.position}</PositionColumn>
      <NameColumn>{row.competitor.displayName}</NameColumn>
      <ScoreColumn sort={row.scoringData.totalSort}>
        {row.scoringData.total}
      </ScoreColumn>
    </View>
  );
}
