import type {
  DomainPlayerState,
  LeaderboardSnapshot,
} from "@putting-pals/putting-pals-schema";
import { AbstractEventEmitter } from "../event-emitter";

export abstract class PlayerStateChanged extends AbstractEventEmitter {
  protected getPlayersStateChanged(playerState: DomainPlayerState) {
    const playersWithExpectedState = this.getPlayers(this.after).filter(
      (player) => player.scoringData.playerState === playerState,
    );

    if (playersWithExpectedState.length === 0) {
      return [];
    }

    const playersBefore = this.getPlayers(this.before);
    return playersWithExpectedState.filter(
      (playerWithExpectedState) =>
        playersBefore.find(
          (p) => p.player.id === playerWithExpectedState.player.id,
        )?.scoringData.playerState !==
        playerWithExpectedState.scoringData.playerState,
    );
  }

  private getPlayers(snapshot: LeaderboardSnapshot) {
    return snapshot.leaderboard.players.filter(
      (row) => row.__typename === "PlayerRowV3",
    );
  }
}
