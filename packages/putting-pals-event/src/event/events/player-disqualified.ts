import type {
  LeaderboardEventType,
  PlayerState,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesPlayerRowV3Field } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerDisqualified extends AbstractEventEmitter {
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

    return (operation.value as PlayerState) === "DISQUALIFIED";
  }

  override getEventType(): LeaderboardEventType {
    return "PlayerDisqualified";
  }

  override getPriority(): number {
    return EventPriority.PLAYER_DISQUALIFIED_EVENT;
  }
}
