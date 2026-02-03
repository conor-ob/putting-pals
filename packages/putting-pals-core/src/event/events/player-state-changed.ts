import type {
  LeaderboardV3,
  PlayerState,
} from "../../../../putting-pals-schema/src";
import { AbstractEventEmitter } from "../event-emitter";

export abstract class PlayerStateChanged extends AbstractEventEmitter<LeaderboardV3> {
  protected getPlayersStateChanged(playerState: PlayerState) {
    const playersWithExpectedState = this.getPlayers(this.next).filter(
      (player) => player.scoringData.playerState === playerState,
    );

    if (playersWithExpectedState.length === 0) {
      return [];
    }

    const prevPlayers = this.getPlayers(this.prev);
    return playersWithExpectedState.filter(
      (playerWithExpectedState) =>
        prevPlayers.find(
          (p) => p.player.id === playerWithExpectedState.player.id,
        )?.scoringData.playerState !==
        playerWithExpectedState.scoringData.playerState,
    );
  }

  private getPlayers(leaderboard: LeaderboardV3) {
    return leaderboard.players.filter(
      (row) => row.__typename === "PlayerRowV3",
    );
  }
}
