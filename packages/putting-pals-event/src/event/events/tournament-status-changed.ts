import type {
  LeaderboardFeed,
  Tournament,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-api";
import { assertNever } from "@putting-pals/putting-pals-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter<Tournament> {
  override emit(): LeaderboardFeed[] {
    if (
      this.next.tournamentStatus === "NOT_STARTED" ||
      this.next.tournamentStatus === this.prev.tournamentStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "TournamentStatusChangedV1" as const,
        prev: {
          tournamentStatus: this.prev.tournamentStatus,
        },
        next: {
          tournamentStatus: this.next.tournamentStatus,
        },
      } satisfies TournamentStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.next.tournamentStatus) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        return EventPriority.TOURNAMENT_STARTING_EVENT;
      case "COMPLETED":
        return EventPriority.TOURNAMENT_STOPPING_EVENT;
      default:
        assertNever(this.next.tournamentStatus);
    }
  }
}
