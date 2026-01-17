import type { LeaderboardEventType } from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesLeaderboardField } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class TournamentWinner extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    return matchesLeaderboardField.matchesExactField(operation.path, "winner");
  }

  override getEventType(): LeaderboardEventType {
    return "TournamentWinner";
  }

  override getPriority(): number {
    return EventPriority.TOURNAMENT_WINNER_EVENT;
  }
}
