import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import { matchesLeaderboardField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class CutLineChanged extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    const operations = this.operations.filter((operation) =>
      matchesLeaderboardField.matchesExactField(
        operation.path,
        "cutLineProbabilities/projectedCutLine",
      ),
    );

    for (const operation of operations) {
      switch (operation.op) {
        case "add":
        case "replace":
          return ["CutLineChanged"];
      }
    }

    return [];
  }

  override getPriority(): number {
    return EventPriority.CUT_LINE_CHANGED_EVENT;
  }
}
