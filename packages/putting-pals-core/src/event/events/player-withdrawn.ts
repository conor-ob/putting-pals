import type { LeaderboardFeedEvent, PlayerWithdrawnV1 } from "../domain/types";
import { EventPriority } from "../event-emitter";
import { PlayerStateChanged } from "./player-state-changed";

export class PlayerWithdrawn extends PlayerStateChanged {
  override emit(): LeaderboardFeedEvent[] {
    const players = this.getPlayersStateChanged("WITHDRAWN");
    if (players.length === 0) {
      return [];
    }

    return [
      {
        __typename: "PlayerWithdrawnV1" as const,
        players: players.map((player) => ({
          id: player.player.id,
        })),
      } satisfies PlayerWithdrawnV1,
    ];
  }

  override getPriority(): number {
    return EventPriority.PLAYER_WITHDRAWN_EVENT;
  }
}
