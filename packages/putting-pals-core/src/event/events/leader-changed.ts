import { UnsupportedTourCodeError } from "../../error/service-error";
import type { LeaderboardV3 } from "../../leaderboard/domain/types";
import type { LeaderboardFeedEvent, LeaderChangedV1 } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class LeaderChanged extends AbstractEventEmitter<LeaderboardV3> {
  override emit(): LeaderboardFeedEvent[] {
    switch (this.tourCode) {
      case "pal":
        return [];
      case "pga":
      case "snr":
      case "pam":
      case "dev":
      case "eur":
      case "liv":
        return this.getPgaTourLeaderChanged();
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.LEADER_CHANGED_EVENT;
  }

  private getPgaTourLeaderChanged(): LeaderboardFeedEvent[] {
    const prevLeaders = this.getLeaders(this.prev);
    const nextLeaders = this.getLeaders(this.next);

    const prevLeaderIds = prevLeaders
      .map((leader) => leader.player.id)
      .sort((a, b) => a.localeCompare(b));
    const nextLeaderIds = nextLeaders
      .map((leader) => leader.player.id)
      .sort((a, b) => a.localeCompare(b));

    if (
      prevLeaderIds.length === nextLeaderIds.length &&
      prevLeaderIds.every((id, i) => id === nextLeaderIds[i])
    ) {
      return [];
    }

    return [
      {
        __typename: "LeaderChangedV1" as const,
        prev: {
          players: prevLeaders.map((row) => ({
            __typename: "PlayerRowV3" as const,
            player: {
              id: row.player.id,
            },
            scoringData: {
              position: row.scoringData.position,
              total: row.scoringData.total,
              totalSort: row.scoringData.totalSort,
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              score: row.scoringData.score,
              scoreSort: row.scoringData.scoreSort,
            },
          })),
        },
        next: {
          players: nextLeaders.map((row) => ({
            __typename: "PlayerRowV3" as const,
            player: {
              id: row.player.id,
            },
            scoringData: {
              position: row.scoringData.position,
              total: row.scoringData.total,
              totalSort: row.scoringData.totalSort,
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              score: row.scoringData.score,
              scoreSort: row.scoringData.scoreSort,
            },
          })),
        },
      } satisfies LeaderChangedV1,
    ];
  }

  private getLeaders(leaderboard: LeaderboardV3) {
    return leaderboard.players
      .filter((row) => row.__typename === "PlayerRowV3")
      .filter(
        (row) =>
          row.scoringData.position === "1" || row.scoringData.position === "T1",
      );
  }
}
