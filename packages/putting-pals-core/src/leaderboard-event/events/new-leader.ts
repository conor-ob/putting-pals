import type {
  LeaderboardEvent,
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
    const test = false;

    if (!test) {
      return [];
    }

    return [
      {
        __typename: "NewLeaderV1" as const,
        before: {
          leaders: this.before.rows
            .filter((row) => row.__typename === "PlayerRowV3")
            .filter(
              (row) =>
                row.scoringData.position === "1" ||
                row.scoringData.position === "T1",
            )
            .map((row) => ({
              displayName: row.player.displayName,
            })),
        },
        after: {
          leaders: this.after.rows
            .filter((row) => row.__typename === "PlayerRowV3")
            .filter(
              (row) =>
                row.scoringData.position === "1" ||
                row.scoringData.position === "T1",
            )
            .map((row) => ({
              displayName: row.player.displayName,
            })),
        },
      } satisfies NewLeaderV1,
    ];
  }
}
