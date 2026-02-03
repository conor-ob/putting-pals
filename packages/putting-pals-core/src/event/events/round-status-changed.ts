import { assertNever } from "@putting-pals/putting-pals-utils";
import type { Tournament } from "../../../../putting-pals-schema/src";
import type { LeaderboardFeed, RoundStatusChangedV1 } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter<Tournament> {
  override emit(): LeaderboardFeed[] {
    if (
      this.next.roundStatus === "UPCOMING" ||
      this.next.roundStatus === this.prev.roundStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "RoundStatusChangedV1" as const,
        prev: {
          roundDisplay: this.prev.roundDisplay,
          roundStatus: this.prev.roundStatus,
          roundStatusColor: this.prev.roundStatusColor,
          roundStatusDisplay: this.prev.roundStatusDisplay,
        },
        next: {
          roundDisplay: this.next.roundDisplay,
          roundStatus: this.next.roundStatus,
          roundStatusColor: this.next.roundStatusColor,
          roundStatusDisplay: this.next.roundStatusDisplay,
        },
      } satisfies RoundStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.next.roundStatus) {
      case "UPCOMING":
      case "GROUPINGS_OFFICIAL":
      case "IN_PROGRESS":
        return EventPriority.ROUND_STARTING_EVENT;
      case "SUSPENDED":
      case "COMPLETE":
      case "OFFICIAL":
        return EventPriority.ROUND_STOPPING_EVENT;
      default:
        assertNever(this.next.roundStatus);
    }
  }
}
