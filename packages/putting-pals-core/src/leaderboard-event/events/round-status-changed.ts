import { RoundStatus } from "@putting-pals/pga-tour-schema/types";
import type { RoundStatusChangedV1 } from "@putting-pals/putting-pals-db/schema";
import type { EventEmitter } from "../event-emitter";

export const RoundStatusChanged: EventEmitter = {
  filter(_tourCode, before, after) {
    return (
      after.roundStatus !== RoundStatus.Upcoming &&
      after.roundStatus !== before.roundStatus
    );
  },
  emit(_tourCode, before, after) {
    return [
      {
        __typename: "RoundStatusChangedV1" as const,
        before: {
          roundDisplay: before.roundDisplay,
          roundStatus: before.roundStatus,
          roundStatusColor: before.roundStatusColor,
          roundStatusDisplay: before.roundStatusDisplay,
        },
        after: {
          roundDisplay: after.roundDisplay,
          roundStatus: after.roundStatus,
          roundStatusColor: after.roundStatusColor,
          roundStatusDisplay: after.roundStatusDisplay,
        },
      } satisfies RoundStatusChangedV1,
    ];
  },
};
