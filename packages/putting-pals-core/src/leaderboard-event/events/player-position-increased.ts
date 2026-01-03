import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import type { EventEmitter } from "../event-emitter";

export const PlayerPositionIncreased: EventEmitter = {
  filter(_tourCode, _before, _after) {
    return true;
  },
  emit(tourCode, _before, _after) {
    switch (tourCode) {
      case "P":
        return [];
      case "R":
        return [];
      default:
        assertNever(tourCode);
    }
  },
};
