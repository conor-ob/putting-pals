import type {
  LeaderboardEvent,
  PlayerDisqualifiedV1,
} from "@putting-pals/putting-pals-schema";
import { EventPriority } from "../event-emitter";
import { PlayerStateChanged } from "./player-state-changed";

export class PlayerDisqualified extends PlayerStateChanged {
  override emit(): LeaderboardEvent[] {
    const players = this.getPlayersStateChanged("DISQUALIFIED");
    if (players.length === 0) {
      return [];
    }

    return [
      {
        __typename: "PlayerDisqualifiedV1" as const,
        players: players.map((player) => ({
          id: player.player.id,
        })),
      } satisfies PlayerDisqualifiedV1,
    ];
  }

  override getPriority(): number {
    return EventPriority.PLAYER_DISQUALIFIED_EVENT;
  }
}
