import type {
  LeaderboardFeed,
  LeaderboardV3,
} from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionIncreased extends AbstractEventEmitter<LeaderboardV3> {
  override emit(): LeaderboardFeed[] {
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
    return EventPriority.PLAYER_POSITION_INCREASED_EVENT;
  }
}
