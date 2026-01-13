import { View } from "react-native";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";
import { NameColumn, PositionColumn, ScoreColumn } from "./leaderboard-columns";

export function PlayerRowV3({
  row,
}: {
  row: Extract<
    RouterOutputs["leaderboard"]["getById"]["players"][number],
    { __typename: "PlayerRowV3" }
  >;
}) {
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
