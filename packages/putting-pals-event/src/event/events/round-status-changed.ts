import type {
  LeaderboardEventType,
  RoundStatus,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesTournamentField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    return matchesTournamentField.matchesExactField(
      operation.path,
      "roundStatus",
    );
  }

  override getEventType(): LeaderboardEventType {
    return "RoundStatusChanged";
  }

  override getPriority(): number {
    switch (this.operation.op) {
      case "add":
      case "replace":
        switch (this.operation.value as RoundStatus) {
          case "UPCOMING":
          case "GROUPINGS_OFFICIAL":
          case "IN_PROGRESS":
            return EventPriority.ROUND_STARTING_EVENT;
          case "SUSPENDED":
          case "COMPLETE":
          case "OFFICIAL":
            return EventPriority.ROUND_STOPPING_EVENT;
          default:
            return -1;
        }
      default:
        return -1;
    }
  }
}
