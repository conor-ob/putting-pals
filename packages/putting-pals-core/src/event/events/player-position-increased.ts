import { UnsupportedTourCodeError } from "../../error/service-error";
import type { Leaderboard } from "../../leaderboard/domain/types";
import type { LeaderboardFeedEvent } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionIncreased extends AbstractEventEmitter<Leaderboard> {
  override emit(): LeaderboardFeedEvent[] {
    switch (this.tourCode) {
      case "pal":
        return [];
      case "pga":
      case "snr":
      case "pam":
      case "dev":
      case "eur":
      case "liv":
        return [];
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.PLAYER_POSITION_INCREASED_EVENT;
  }
}
