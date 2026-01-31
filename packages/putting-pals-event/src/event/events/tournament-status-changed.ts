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
      this.after.tournamentStatus === "NOT_STARTED" ||
      this.after.tournamentStatus === this.before.tournamentStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "TournamentStatusChangedV1" as const,
        before: {
          tournamentStatus: this.before.tournamentStatus,
        },
        after: {
          tournamentStatus: this.after.tournamentStatus,
        },
      } satisfies TournamentStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.after.tournamentStatus) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        return EventPriority.TOURNAMENT_STARTING_EVENT;
      case "COMPLETED":
        return EventPriority.TOURNAMENT_STOPPING_EVENT;
      default:
        assertNever(this.after.tournamentStatus);
    }
  }
}
