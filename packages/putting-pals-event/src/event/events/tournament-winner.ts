import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import { matchesLeaderboardField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentWinner extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    if (
      this.operations.some((operation) =>
        matchesLeaderboardField.matchesExactField(operation.path, "winner"),
      )
    ) {
      return ["TournamentWinner"];
    }

    return [];
  }

  override getPriority(): number {
    return EventPriority.TOURNAMENT_WINNER_EVENT;
  }
}
