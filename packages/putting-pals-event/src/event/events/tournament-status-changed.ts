import type {
  LeaderboardEventType,
  TournamentStatus,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesTournamentField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    return matchesTournamentField.matchesExactField(
      operation.path,
      "tournamentStatus",
    );
  }

  override getEventType(): LeaderboardEventType {
    return "TournamentStatusChanged";
  }

  override getPriority(): number {
    switch (this.operation.op) {
      case "replace":
        switch (this.operation.value as TournamentStatus) {
          case "NOT_STARTED":
          case "IN_PROGRESS":
            return EventPriority.TOURNAMENT_STARTING_EVENT;
          case "COMPLETED":
            return EventPriority.TOURNAMENT_STOPPING_EVENT;
          default:
            return -1;
        }
      default:
        return -1;
    }
  }
}
