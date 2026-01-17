import type {
  LeaderboardEventType,
  PlayerState,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesPlayerRowV3Field } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerMissedCut extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    const match = matchesPlayerRowV3Field.matchesExactField(
      operation.path,
      "scoringData/playerState",
    );

    if (!match) {
      return false;
    }

    return (operation.value as PlayerState) === "CUT";
  }

  override getEventType(): LeaderboardEventType {
    return "PlayerMissedCut";
  }

  override getPriority(): number {
    return EventPriority.PLAYER_MISSED_CUT_EVENT;
  }
}
