import type { LeaderboardV3 } from "@putting-pals/putting-pals-api";
import { getCountryFlag } from "./leaderboard-flag-utils";

export function transformLeaderboard(
  leaderboard: LeaderboardV3,
): LeaderboardV3 {
  return {
    ...leaderboard,
    players: leaderboard.players.flatMap((row) => {
      switch (row.__typename) {
        case "PlayerRowV3":
          return {
            ...row,
            player: {
              ...row.player,
              countryFlag: getCountryFlag({
                id: row.player.id,
                countryFlag: row.player.countryFlag,
              }),
            },
            scoringData: {
              ...row.scoringData,
              teeTime: parseTeeTime(row.scoringData.teeTime),
              totalSort: fixTotalSort(
                row.scoringData.total,
                row.scoringData.totalSort,
              ),
            },
          };
        default:
          return row;
      }
    }),
  };
}

// biome-ignore lint/suspicious/noExplicitAny: AWSTimestamp
function parseTeeTime(teeTime?: any): Date | undefined {
  if (!teeTime) {
    return undefined;
  }

  if (typeof teeTime !== "number") {
    return undefined;
  }

  if (teeTime <= 0) {
    return undefined;
  }

  return new Date(teeTime);
}

function fixTotalSort(total: string, totalSort: number): number {
  if (total !== "-" && total.startsWith("-") && totalSort > 0) {
    // biome-ignore lint/suspicious/noConsole: logging PGA Tour API issue
    console.warn(
      `totalSort: ${totalSort} is positive for negative total: ${total}`,
    );
    return -parseInt(total.slice(1), 10);
  } else {
    return totalSort;
  }
}
