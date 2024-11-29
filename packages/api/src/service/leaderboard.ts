import { PgaTourLeaderboardService } from "@pkg/graphql/leaderboard";
import { getCountryFlag } from "@pkg/utils/flags";

import type { StrokePlayLeaderboard } from "../types";

export async function mapLeaderboard({
  apiKey,
  id,
}: {
  apiKey: string;
  id: string;
}): Promise<StrokePlayLeaderboard> {
  return new PgaTourLeaderboardService({
    apiKey,
  })
    .getLeaderboard({
      id,
    })
    .then((leaderboard) => {
      return {
        id: leaderboard.id,
        rows: leaderboard.players.map((player) => {
          if (player.__typename === "InformationRow") {
            return {
              displayText: player.displayText,
              id: player.id,
              leaderboardSortOrder: player.leaderboardSortOrder,
            };
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
                id: player.scoringData.id,
                position: player.scoringData.position,
                score: player.scoringData.score,
                scoreSort: player.scoringData.scoreSort,
                teeTime: mapTeeTime(player.scoringData.teeTime),
                thru: player.scoringData.thru,
                thruSort: player.scoringData.thruSort,
                total: player.scoringData.total,
                totalSort: player.scoringData.totalSort,
              },
            };
          } else {
            throw new Error(`Unexpected player type: ${player.__typename}`);
          }
        }),
      };
    });
}

function mapTeeTime(teeTime: unknown): number | undefined {
  if (typeof teeTime === "number") {
    return teeTime;
  } else {
    return undefined;
  }
}
