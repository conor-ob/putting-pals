import type {
  LeaderboardEvent,
  RoundStatusChangedV1,
  Tournament,
} from "@putting-pals/putting-pals-api";
import { assertNever } from "@putting-pals/putting-pals-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter<Tournament> {
  override emit(): LeaderboardEvent[] {
    if (
      this.after.roundStatus === "UPCOMING" ||
      this.after.roundStatus === this.before.roundStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "RoundStatusChangedV1" as const,
        before: {
          roundDisplay: this.before.roundDisplay,
          roundStatus: this.before.roundStatus,
          roundStatusColor: this.before.roundStatusColor,
          roundStatusDisplay: this.before.roundStatusDisplay,
        },
        after: {
          roundDisplay: this.after.roundDisplay,
          roundStatus: this.after.roundStatus,
          roundStatusColor: this.after.roundStatusColor,
          roundStatusDisplay: this.after.roundStatusDisplay,
        },
      } satisfies RoundStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.after.roundStatus) {
      case "UPCOMING":
      case "GROUPINGS_OFFICIAL":
      case "IN_PROGRESS":
        return EventPriority.ROUND_STARTING_EVENT;
      case "SUSPENDED":
      case "COMPLETE":
      case "OFFICIAL":
        return EventPriority.ROUND_STOPPING_EVENT;
      default:
        assertNever(this.after.roundStatus);
    }
  }
}
