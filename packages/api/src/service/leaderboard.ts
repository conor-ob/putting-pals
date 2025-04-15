import { LeaderboardClient } from "@pkg/graphql/leaderboard";
import { getCountryFlag } from "@pkg/utils/flags";

import type { InformationRow, Leaderboard, PlayerRow } from "../types";

export class LeaderboardService {
  public async getLeaderboard(id: string): Promise<Leaderboard> {
    return new LeaderboardClient().getLeaderboard(id).then((leaderboard) => {
      return {
        id: leaderboard.id,
        leaderboardRoundHeader: leaderboard.leaderboardRoundHeader,
        rows: leaderboard.players.map((player) => {
          if (player.__typename === "InformationRow") {
            return {
              displayText: player.displayText,
              id: player.id,
              leaderboardSortOrder: player.leaderboardSortOrder,
            } as InformationRow;
          } else if (player.__typename === "PlayerRowV3") {
            return {
              id: player.id,
              leaderboardSortOrder: player.leaderboardSortOrder,
              player: {
                abbreviations: player.player.abbreviations,
                countryFlag: getCountryFlag({
                  player: {
                    id: player.player.id,
                    countryFlag: player.player.countryFlag,
                  },
                }),
                firstName: player.player.firstName,
                id: player.player.id,
                lastName: player.player.lastName,
                shortName: player.player.shortName,
              },
              scoringData: {
                position: player.scoringData.position,
                score: player.scoringData.score,
                scoreSort: player.scoringData.scoreSort,
                teeTime: player.scoringData.teeTime,
                thru: player.scoringData.thru,
                thruSort: player.scoringData.thruSort,
                total: player.scoringData.total,
                totalSort: player.scoringData.totalSort,
              },
            } as PlayerRow;
          } else {
            throw new Error(`Unexpected type: ${player.__typename}`);
          }
        }),
      };
    });
  }
}
