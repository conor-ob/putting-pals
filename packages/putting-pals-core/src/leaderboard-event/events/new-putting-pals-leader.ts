import type { EventEmitter } from "../event-emitter";

export const NewPuttingPalsLeader: EventEmitter = {
  filter(_before, _after) {
    return true;
  },
  emit(_before, _after) {
    return [];
  },
};
