import type { EventEmitter } from "../event-emitter";

export const PlayerPositionDecreased: EventEmitter = {
  filter(_before, _after) {
    return true;
  },
  emit(_before, _after) {
    return [];
  },
};
