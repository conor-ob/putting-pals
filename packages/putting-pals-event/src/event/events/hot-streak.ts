import type {
  LeaderboardEventType,
  LeaderboardPlayerIcon,
} from "@putting-pals/putting-pals-api";
import type { Operation } from "fast-json-patch";
import { matchesPlayerRowV3Field } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class HotStreak extends AbstractEventEmitter {
  override matches(operation: Operation): boolean {
    if (operation.op !== "add" && operation.op !== "replace") {
      return false;
    }

    const match = matchesPlayerRowV3Field.matchesExactField(
      operation.path,
      "scoringData/playerIcon",
    );

    return match && (operation.value as LeaderboardPlayerIcon) === "HOT_STREAK";
  }

  override getEventType(): LeaderboardEventType {
    return "HotStreak";
  }

  override getPriority(): number {
    return EventPriority.HOT_STREAK_EVENT;
  }
}
