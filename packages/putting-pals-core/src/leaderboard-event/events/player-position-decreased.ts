import type { LeaderboardEvent } from "@putting-pals/putting-pals-schema";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionDecreased extends AbstractEventEmitter {
  override emit(): LeaderboardEvent[] {
    switch (this.tourCode) {
      case "P":
        return [];
      case "R":
        return [];
      default:
        assertNever(this.tourCode);
    }
  }

  override getPriority(): number {
    return EventPriority.PLAYER_POSITION_DECREASED_EVENT;
  }
}
