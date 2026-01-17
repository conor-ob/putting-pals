import type {
  LeaderboardEventType,
  TournamentStatus,
} from "@putting-pals/putting-pals-api";
import { matchesTournamentField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentStatusChanged extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    if (
      this.operations.some((operation) =>
        matchesTournamentField.matchesExactField(
          operation.path,
          "tournamentStatus",
        ),
      )
    ) {
      return ["TournamentStatusChanged"];
    }

    return [];
  }

  override getPriority(): number {
    const tournamentStatusOperation = this.operations.find((operation) =>
      matchesTournamentField.matchesExactField(
        operation.path,
        "tournamentStatus",
      ),
    );

    if (!tournamentStatusOperation) {
      return -1;
    }

    switch (tournamentStatusOperation.op) {
      case "replace":
        switch (tournamentStatusOperation.value as TournamentStatus) {
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
