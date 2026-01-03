import { TournamentStatus } from "@putting-pals/pga-tour-schema/types";
import type { TournamentStatusChangedV1 } from "@putting-pals/putting-pals-db/schema";
import type { EventEmitter } from "../event-emitter";

export const TournamentStatusChanged: EventEmitter = {
  filter(_tourCode, before, after) {
    return (
      after.tournamentStatus !== TournamentStatus.NotStarted &&
      before.tournamentStatus !== after.tournamentStatus
    );
  },
  emit(_tourCode, before, after) {
    return [
      {
        __typename: "TournamentStatusChangedV1",
        tournamentName: after.tournamentName,
        before: {
          tournamentStatus: before.tournamentStatus,
        },
        after: {
          tournamentStatus: after.tournamentStatus,
        },
      } satisfies TournamentStatusChangedV1,
    ];
  },
};
