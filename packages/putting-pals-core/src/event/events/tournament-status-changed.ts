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
      this.next.status.tournamentStatus === "NOT_STARTED" ||
      this.next.status.tournamentStatus === this.prev.status.tournamentStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "TournamentStatusChangedV1" as const,
        prev: {
          tournamentStatus: this.prev.status.tournamentStatus,
        },
        next: {
          tournamentStatus: this.next.status.tournamentStatus,
        },
      } satisfies TournamentStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.next.status.tournamentStatus) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        return EventPriority.TOURNAMENT_STARTING_EVENT;
      case "COMPLETED":
        return EventPriority.TOURNAMENT_STOPPING_EVENT;
      default:
        assertNever(this.next.status.tournamentStatus);
    }
  }
}
