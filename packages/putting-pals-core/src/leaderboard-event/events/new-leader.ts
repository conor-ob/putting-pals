import type {
  LeaderboardEvent,
  LeaderboardSnapshot,
  NewLeaderV1,
} from "@putting-pals/putting-pals-schema/types";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class NewLeader extends AbstractEventEmitter {
  override emit(): LeaderboardEvent[] {
    switch (this.tourCode) {
      case "P":
        return [];
      case "R":
        return this.getPgaTourNewLeader();
      default:
        assertNever(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.NEW_LEADER_EVENT;
  }

  private getPgaTourNewLeader(): LeaderboardEvent[] {
    const leadersBefore = this.getLeaders(this.before);
    const leadersAfter = this.getLeaders(this.after);

    const leaderIdsBefore = leadersBefore
      .map((leader) => leader.player.id)
      .sort((a, b) => a.localeCompare(b));
    const leaderIdsAfter = leadersAfter
      .map((leader) => leader.player.id)
      .sort((a, b) => a.localeCompare(b));

    if (
      leaderIdsBefore.length === leaderIdsAfter.length &&
      leaderIdsBefore.every((id, i) => id === leaderIdsAfter[i])
    ) {
      return [];
    }

    return [
      {
        __typename: "NewLeaderV1" as const,
        before: {
          leaders: leadersBefore.map((row) => ({
            displayName: row.player.displayName,
          })),
        },
        after: {
          leaders: leadersAfter.map((row) => ({
            displayName: row.player.displayName,
          })),
        },
      } satisfies NewLeaderV1,
    ];
  }

  private getLeaders(snapshot: LeaderboardSnapshot) {
    return snapshot.leaderboard.players
      .filter((row) => row.__typename === "PlayerRowV3")
      .filter(
        (row) =>
          row.scoringData.position === "1" || row.scoringData.position === "T1",
      );
  }
}
