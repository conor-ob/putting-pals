import type { LeaderboardEvent } from "@putting-pals/putting-pals-schema";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionIncreased extends AbstractEventEmitter {
  override emit(): LeaderboardEvent[] {
    switch (this.tourCode) {
      case "P":
        return [];
      case "R":
        return [];
      default:
        throw new Error(`Unsupported tour code: ${this.tourCode}`);
    }
  }

  override getPriority(): number {
    return EventPriority.PLAYER_POSITION_INCREASED_EVENT;
  }
}
