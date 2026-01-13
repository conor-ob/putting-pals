import type {
  LeaderboardEvent,
  LeaderboardV3,
} from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentWinner extends AbstractEventEmitter<LeaderboardV3> {
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
    return EventPriority.TOURNAMENT_WINNER_EVENT;
  }
}
