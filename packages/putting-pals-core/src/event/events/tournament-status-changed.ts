import type {
  LeaderboardEvent,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-schema";
import { assertNever } from "@putting-pals/putting-pals-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter {
  override emit(): LeaderboardEvent[] {
    if (
      this.after.tournament.tournamentStatus === "NOT_STARTED" ||
      this.after.tournament.tournamentStatus ===
        this.before.tournament.tournamentStatus
    ) {
      return [];
    }

    return [
      {
        __typename: "TournamentStatusChangedV1" as const,
        before: {
          tournamentStatus: this.before.tournament.tournamentStatus,
        },
        after: {
          tournamentStatus: this.after.tournament.tournamentStatus,
        },
      } satisfies TournamentStatusChangedV1,
    ];
  }

  override getPriority(): number {
    switch (this.after.tournament.tournamentStatus) {
      case "NOT_STARTED":
      case "IN_PROGRESS":
        return EventPriority.TOURNAMENT_STARTING_EVENT;
      case "COMPLETED":
        return EventPriority.TOURNAMENT_STOPPING_EVENT;
      default:
        assertNever(this.after.tournament.tournamentStatus);
    }
  }
}
