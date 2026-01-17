import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesLeaderboardField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class CutLineChanged extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    return matchesLeaderboardField.matchesExactField(
      operation.path,
      "cutLineProbabilities/projectedCutLine",
    );
  }

  override getEventType(): LeaderboardEventType {
    return "CutLineChanged";
  }

  override getPriority(): number {
    return EventPriority.CUT_LINE_CHANGED_EVENT;
  }
}
