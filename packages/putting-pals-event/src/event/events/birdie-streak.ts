import type {
  LeaderboardEvent,
  LeaderboardHoleByHole,
} from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class BirdieStreak extends AbstractEventEmitter<LeaderboardHoleByHole> {
  override emit(): LeaderboardEvent[] {
    switch (this.tourCode) {
      case "P":
        return [];
      case "R":
      case "S":
      case "H":
      case "Y":
        return [];
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.BIRDIE_STREAK_EVENT;
  }
}
