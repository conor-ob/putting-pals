import type { LeaderboardV3 } from "../../../../putting-pals-schema/src";
import type { HotStreakV1, LeaderboardFeed } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class HotStreak extends AbstractEventEmitter<LeaderboardV3> {
  override emit(): LeaderboardFeed[] {
    const prevHotStreakPlayers = this.getHotStreakPlayers(this.prev);
    const nextHotStreakPlayers = this.getHotStreakPlayers(this.next);

    if (
      prevHotStreakPlayers.length === nextHotStreakPlayers.length &&
      prevHotStreakPlayers
        .map((player) => player.id)
        .every((id, index) => id === nextHotStreakPlayers[index]?.id)
    ) {
      return [];
    }

    return [
      {
        __typename: "HotStreakV1" as const,
        players: nextHotStreakPlayers.map((player) => ({
          id: player.id,
        })),
      } satisfies HotStreakV1,
    ];
  }

  private getHotStreakPlayers(leaderboard: LeaderboardV3) {
    return leaderboard.players
      .filter((row) => row.__typename === "PlayerRowV3")
      .filter((row) => row.scoringData.playerIcon === "HOT_STREAK");
  }

  override getPriority(): number {
    return EventPriority.HOT_STREAK_EVENT;
  }
}
