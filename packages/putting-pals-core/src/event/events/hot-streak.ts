import type { Leaderboard } from "../../leaderboard/domain/types";
import type { HotStreakV1, LeaderboardFeedEvent } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class HotStreak extends AbstractEventEmitter<Leaderboard> {
  override emit(): LeaderboardFeedEvent[] {
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

  private getHotStreakPlayers(leaderboard: Leaderboard) {
    return leaderboard.players
      .filter((row) => row.__typename === "PlayerRow")
      .filter((row) => row.scoringData.playerIcon === "HOT_STREAK");
  }

  override getPriority(): number {
    return EventPriority.HOT_STREAK_EVENT;
  }
}
