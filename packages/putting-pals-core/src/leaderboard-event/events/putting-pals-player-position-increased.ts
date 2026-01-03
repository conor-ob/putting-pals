import type { EventEmitter } from "../event-emitter";

export const PuttingPalsPlayerPositionIncreased: EventEmitter = {
  filter(_before, _after) {
    return true; // before !== "-"
  },
  emit(_before, _after) {
    return [];
  },
};
