import { UnsupportedTourCodeError } from "../../error/service-error";
import type { LeaderboardV3 } from "../../leaderboard/domain/types";
import type { LeaderboardFeedEvent } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentWinner extends AbstractEventEmitter<LeaderboardV3> {
  override emit(): LeaderboardFeedEvent[] {
    switch (this.tourCode) {
      case "pal":
        return [];
      case "pga":
      case "snr":
      case "pam":
      case "dev":
        return [];
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.TOURNAMENT_WINNER_EVENT;
  }
}
