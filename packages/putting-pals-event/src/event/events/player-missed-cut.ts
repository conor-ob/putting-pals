import type {
  LeaderboardEventType,
  PlayerState,
} from "@putting-pals/putting-pals-api";
import { matchesPlayerRowV3Field } from "../../patch/patch-utils";
import { AbstractEventEmitter, EventPriority } from "../event-emitter";

export class PlayerMissedCut extends AbstractEventEmitter {
  override emit(): LeaderboardEventType[] {
    const playerStateOperations = this.operations.filter((operation) =>
      matchesPlayerRowV3Field.matchesExactField(
        operation.path,
        "scoringData/playerState",
      ),
    );

    for (const playerStateOperation of playerStateOperations) {
      switch (playerStateOperation.op) {
        case "add":
        case "replace":
          if ((playerStateOperation.value as PlayerState) === "CUT") {
            return ["PlayerMissedCut"];
          }
      }
    }

    return [];
  }

  override getPriority(): number {
    return EventPriority.PLAYER_WITHDRAWN_EVENT;
  }
}
