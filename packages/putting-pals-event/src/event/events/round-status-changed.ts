import type {
  LeaderboardEventType,
  RoundStatus,
} from "@putting-pals/putting-pals-api";
import { matchesTournamentField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    if (
      this.operations.some((operation) =>
        matchesTournamentField.matchesExactField(operation.path, "roundStatus"),
      )
    ) {
      return ["RoundStatusChanged"];
    }

    return [];
  }

  override getPriority(): number {
    const roundStatusOperation = this.operations.find((operation) =>
      matchesTournamentField.matchesExactField(operation.path, "roundStatus"),
    );

    if (!roundStatusOperation) {
      return -1;
    }

    switch (roundStatusOperation.op) {
      case "add":
      case "replace":
        switch (roundStatusOperation.value as RoundStatus) {
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
