import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import { UnsupportedTourCodeError } from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import {
  matchesPlayerRowV3Field,
  matchesPuttingPalsPlayerRowField,
} from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class LeaderChanged extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    switch (this.tourCode) {
      case "P":
        return this.getPuttingPalsLeaderChanged(operation);
      case "R":
        return this.getPgaTourLeaderChanged(operation);
      default:
        throw new UnsupportedTourCodeError(this.tourCode);
    }
  }

  private getPuttingPalsLeaderChanged(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    const match = matchesPuttingPalsPlayerRowField.matchesExactField(
      operation.path,
      "scoringData/position",
    );

    if (!match) {
      return false;
    }

    return operation.value === "1" || operation.value === "T1";
  }

  private getPgaTourLeaderChanged(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    const match = matchesPlayerRowV3Field.matchesExactField(
      operation.path,
      "scoringData/position",
    );

    if (!match) {
      return false;
    }

    return operation.value === "1" || operation.value === "T1";
  }

  override getEventType(): LeaderboardEventType {
    return "LeaderChanged";
  }

  override getPriority(): number {
    return EventPriority.LEADER_CHANGED_EVENT;
  }
}
