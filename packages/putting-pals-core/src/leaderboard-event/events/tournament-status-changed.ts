import { TournamentStatus } from "@putting-pals/pga-tour-schema/types";
import type { TournamentStatusChangedV1 } from "@putting-pals/putting-pals-db/schema";
import type { EventEmitter } from "../event-emitter";

export const TournamentStatusChanged: EventEmitter = {
  filter(before, after) {
    return (
      after.tournamentStatus !== TournamentStatus.NotStarted &&
      before.tournamentStatus !== after.tournamentStatus
    );
  },
  emit(_before, after) {
    return [
      {
        __typename: "TournamentStatusChangedV1",
        tournamentName: after.tournamentName,
        tournamentStatus: after.tournamentStatus,
        customText:
          after.tournamentStatus === TournamentStatus.Completed
            ? `${after.tournamentName} has completed`
            : `${after.tournamentName} has started`,
      } satisfies TournamentStatusChangedV1,
    ];
  },
};
