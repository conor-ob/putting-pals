import type { RoundStatusChangedV1 } from "@putting-pals/putting-pals-db/schema";
import type { EventEmitter } from "../event-emitter";

export const RoundStatusChanged: EventEmitter = {
  filter(before, after) {
    return before.roundStatus !== after.roundStatus;
  },
  emit(_before, after) {
    return [
      {
        __typename: "RoundStatusChangedV1" as const,
        roundDisplay: after.roundDisplay,
        roundStatus: after.roundStatus,
        roundStatusColor: after.roundStatusColor,
        roundStatusDisplay: after.roundStatusDisplay,
      } satisfies RoundStatusChangedV1,
    ];
  },
};
