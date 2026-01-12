import type { LeaderboardEvent } from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "../../utils/service-error";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class BirdieStreak extends AbstractEventEmitter {
  override emit(): LeaderboardEvent[] {
    switch (this.tourCode) {
      case "P":
        return [];
      case "R":
        return [];
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.BIRDIE_STREAK_EVENT;
  }
}
