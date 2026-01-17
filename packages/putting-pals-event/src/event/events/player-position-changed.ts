import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import {
  matchesPlayerRowV3Field,
  matchesPuttingPalsPlayerRowField,
} from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionChanged extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    switch (this.tourCode) {
      case "P":
        return this.getPuttingPalsPlayerPositionChanged(operation);
      case "R":
        return this.getPgaTourPlayerPositionChanged(operation);
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  private getPuttingPalsPlayerPositionChanged(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    const match = matchesPuttingPalsPlayerRowField.matchesExactField(
      operation.path,
      "scoringData/position",
    );

    return match;
  }

  private getPgaTourPlayerPositionChanged(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    const match = matchesPlayerRowV3Field.matchesExactField(
      operation.path,
      "scoringData/position",
    );

    return match;
  }

  override getEventType(): LeaderboardEventType {
    return "PlayerPositionChanged";
  }

  override getPriority(): number {
    return EventPriority.PLAYER_POSITION_CHANGED_EVENT;
  }
}
