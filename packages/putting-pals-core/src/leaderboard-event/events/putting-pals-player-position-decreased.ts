import type { EventEmitter } from "../event-emitter";

export const PuttingPalsPlayerPositionDecreased: EventEmitter = {
  filter(_before, _after) {
    return true;
  },
  emit(_before, _after) {
    return [];
  },
};
