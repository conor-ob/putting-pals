import type {
  LeaderboardEvent,
  RoundStatusChangedV1,
} from "@putting-pals/putting-pals-schema";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter {
  override emit(): LeaderboardEvent[] {
    if (
      this.after.tournament.roundStatus === "UPCOMING" ||
      this.after.tournament.roundStatus === this.before.tournament.roundStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "RoundStatusChangedV1" as const,
        before: {
          roundDisplay: this.before.tournament.roundDisplay,
          roundStatus: this.before.tournament.roundStatus,
          roundStatusColor: this.before.tournament.roundStatusColor,
          roundStatusDisplay: this.before.tournament.roundStatusDisplay,
        },
        after: {
          roundDisplay: this.after.tournament.roundDisplay,
          roundStatus: this.after.tournament.roundStatus,
          roundStatusColor: this.after.tournament.roundStatusColor,
          roundStatusDisplay: this.after.tournament.roundStatusDisplay,
        },
      } satisfies RoundStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.after.tournament.roundStatus) {
      case "UPCOMING":
      case "GROUPINGS_OFFICIAL":
      case "IN_PROGRESS":
        return EventPriority.ROUND_STARTING_EVENT;
      case "SUSPENDED":
      case "COMPLETE":
      case "OFFICIAL":
        return EventPriority.ROUND_STOPPING_EVENT;
      default:
        assertNever(this.after.tournament.roundStatus);
    }
  }
}
