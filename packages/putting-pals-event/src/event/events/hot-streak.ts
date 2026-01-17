import type {
  LeaderboardEventType,
  LeaderboardPlayerIcon,
} from "@putting-pals/putting-pals-api";
import { matchesPlayerRowV3Field } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class HotStreak extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    const operations = this.operations.filter((operation) =>
      matchesPlayerRowV3Field.matchesExactField(
        operation.path,
        "scoringData/playerIcon",
      ),
    );

    for (const operation of operations) {
      switch (operation.op) {
        case "add":
        case "replace":
          if ((operation.value as LeaderboardPlayerIcon) === "HOT_STREAK") {
            return ["HotStreak"];
          }
      }
    }

    return [];
  }

  override getPriority(): number {
    return EventPriority.HOT_STREAK_EVENT;
  }
}
