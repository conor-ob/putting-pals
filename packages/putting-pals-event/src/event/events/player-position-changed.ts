import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import {
  matchesPlayerRowV3Field,
  matchesPuttingPalsPlayerRowField,
} from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerPositionChanged extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    switch (this.tourCode) {
      case "P":
        return this.getPuttingPalsPlayerPositionChanged();
      case "R":
        return this.getPgaTourPlayerPositionChanged();
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  private getPuttingPalsPlayerPositionChanged(): LeaderboardEventType[] {
    const operations = this.operations.filter((operation) =>
      matchesPuttingPalsPlayerRowField.matchesExactField(
        operation.path,
        "scoringData/position",
      ),
    );

    if (operations.length > 0) {
      return ["PlayerPositionChanged"];
    }

    return [];
  }

  private getPgaTourPlayerPositionChanged(): LeaderboardEventType[] {
    const operations = this.operations.filter((operation) =>
      matchesPlayerRowV3Field.matchesExactField(
        operation.path,
        "scoringData/position",
      ),
    );

    if (operations.length > 0) {
      return ["PlayerPositionChanged"];
    }

    return [];
  }

  override getPriority(): number {
    return EventPriority.PLAYER_POSITION_CHANGED_EVENT;
  }
}
