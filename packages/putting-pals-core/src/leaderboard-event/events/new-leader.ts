import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { AbstractEventEmitter, type LeaderboardEvent } from "../event-emitter";

export class NewLeader extends AbstractEventEmitter {
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
}
