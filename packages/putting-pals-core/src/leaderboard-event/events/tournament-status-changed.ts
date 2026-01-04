import type {
  LeaderboardEvent,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-schema/types";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter {
  override filter(): boolean {
    return (
      this.after.tournamentStatus !== "NOT_STARTED" &&
      this.before.tournamentStatus !== this.after.tournamentStatus
    );
  }

  override emit(): LeaderboardEvent[] {
    return [
      {
        __typename: "TournamentStatusChangedV1" as const,
        tournamentName: this.after.tournamentName,
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
