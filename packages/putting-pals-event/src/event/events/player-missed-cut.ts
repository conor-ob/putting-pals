import type {
  LeaderboardFeed,
  PlayerMissedCutV1,
} from "@putting-pals/putting-pals-api";
import { EventPriority } from "../event-emitter";
import { PlayerStateChanged } from "./player-state-changed";

export class PlayerMissedCut extends PlayerStateChanged {
  override emit(): LeaderboardFeed[] {
    const players = this.getPlayersStateChanged("CUT");
    if (players.length === 0) {
      return [];
    }

    return [
      {
        __typename: "PlayerMissedCutV1" as const,
        players: players.map((player) => ({
          id: player.player.id,
        })),
      } satisfies PlayerMissedCutV1,
    ];
  }

  override getPriority(): number {
    return EventPriority.PLAYER_WITHDRAWN_EVENT;
  }
}
