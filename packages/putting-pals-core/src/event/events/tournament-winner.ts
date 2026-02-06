import { UnsupportedTourCodeError } from "../../error/service-error";
import type { LeaderboardV3 } from "../../leaderboard/domain/types";
import type { LeaderboardFeedEvent } from "../domain/types";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentWinner extends AbstractEventEmitter<LeaderboardV3> {
  override emit(): LeaderboardFeedEvent[] {
    switch (this.tourCode) {
      case "putting-pals-tour":
        return [];
      case "pga-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
      case "korn-ferry-tour":
        return [];
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.TOURNAMENT_WINNER_EVENT;
  }
}
