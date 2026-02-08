import { assertNever } from "@putting-pals/putting-pals-utils";
import type { Tournament } from "../../tournament/domain/types";
import type {
  LeaderboardFeedEvent,
  RoundStatusChangedV1,
} from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter<Tournament> {
  override emit(): LeaderboardFeedEvent[] {
    if (
      this.next.status.roundStatus === "UPCOMING" ||
      this.next.status.roundStatus === this.prev.status.roundStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "RoundStatusChangedV1" as const,
        prev: {
          roundDisplay: this.prev.status.roundDisplay,
          roundStatus: this.prev.status.roundStatus,
          roundStatusColor: this.prev.status.roundStatusColor,
          roundStatusDisplay: this.prev.status.roundStatusDisplay,
        },
        next: {
          roundDisplay: this.next.status.roundDisplay,
          roundStatus: this.next.status.roundStatus,
          roundStatusColor: this.next.status.roundStatusColor,
          roundStatusDisplay: this.next.status.roundStatusDisplay,
        },
      } satisfies RoundStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.next.status.roundStatus) {
      case "UPCOMING":
      case "GROUPINGS_OFFICIAL":
      case "IN_PROGRESS":
        return EventPriority.ROUND_STARTING_EVENT;
      case "SUSPENDED":
      case "COMPLETE":
      case "OFFICIAL":
        return EventPriority.ROUND_STOPPING_EVENT;
      default:
        assertNever(this.next.status.roundStatus);
    }
  }
}
