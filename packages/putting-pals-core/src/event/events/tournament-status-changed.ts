import { assertNever } from "@putting-pals/putting-pals-utils";
import type { Tournament } from "../../tournament/domain/types";
import type {
  LeaderboardFeedEvent,
  TournamentStatusChangedV1,
} from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter<Tournament> {
  override emit(): LeaderboardFeedEvent[] {
    if (
      this.next.schedule.status === "NOT_STARTED" ||
      this.next.schedule.status === this.prev.schedule.status
    ) {
      return [];
    }

    return [
      {
        __typename: "TournamentStatusChangedV1" as const,
        prev: {
          tournamentStatus: this.prev.schedule.status,
        },
        next: {
          tournamentStatus: this.next.schedule.status,
        },
      } satisfies TournamentStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.next.schedule.status) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        return EventPriority.TOURNAMENT_STARTING_EVENT;
      case "COMPLETED":
        return EventPriority.TOURNAMENT_STOPPING_EVENT;
      default:
        assertNever(this.next.schedule.status);
    }
  }
}
