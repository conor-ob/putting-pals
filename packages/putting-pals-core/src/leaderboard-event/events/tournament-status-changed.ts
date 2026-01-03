import { TournamentStatus } from "@putting-pals/pga-tour-schema/types";
import type { TournamentStatusChangedV1 } from "@putting-pals/putting-pals-schema/types";
import { AbstractEventEmitter, type LeaderboardEvent } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter {
  override filter(): boolean {
    return (
      this.after.tournamentStatus !== TournamentStatus.NotStarted &&
      this.before.tournamentStatus !== this.after.tournamentStatus
    );
  }

  override emit(): LeaderboardEvent[] {
    return [
      {
        order: this.getEventOrder(),
        event: {
          __typename: "TournamentStatusChangedV1" as const,
          tournamentName: this.after.tournamentName,
          before: {
            tournamentStatus: this.before.tournamentStatus,
          },
          after: {
            tournamentStatus: this.after.tournamentStatus,
          },
        } satisfies TournamentStatusChangedV1,
      },
    ];
  }

  private getEventOrder(): number {
    return 1;
  }
}
