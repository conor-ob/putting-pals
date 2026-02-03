import type { LeaderboardV3 } from "@putting-pals/putting-pals-schema";
import { UnsupportedTourCodeError } from "../../error/service-error";
import type { LeaderboardFeedEvent } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionDecreased extends AbstractEventEmitter<LeaderboardV3> {
  override emit(): LeaderboardFeedEvent[] {
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
    return EventPriority.PLAYER_POSITION_DECREASED_EVENT;
  }
}
