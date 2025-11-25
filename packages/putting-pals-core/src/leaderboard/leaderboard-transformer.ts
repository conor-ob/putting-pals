import type { LeaderboardV3 } from "@putting-pals/pga-tour-schema/types";
import { getCountryFlag } from "./leaderboard-flag-utils";

type RecursivePartial<T> = {
  [K in keyof T]?: T[K] extends object ? RecursivePartial<T[K]> : T[K];
};

function assertNever(x?: never): never {
  throw new Error(`Unexpected object: ${x}`);
}

export function transformLeaderboard(leaderboard: LeaderboardV3) {
  return {
    formatType: leaderboard.formatType,
    leaderboardRoundHeader: leaderboard.leaderboardRoundHeader,
    players: leaderboard.players.map((row) => {
      switch (row.__typename) {
        case "PlayerRowV3":
          return {
            id: row.id,
            leaderboardSortOrder: row.leaderboardSortOrder,
            player: {
              abbreviations: row.player.abbreviations,
              amateur: row.player.amateur,
              countryFlag: getCountryFlag({
                id: row.player.id,
                countryFlag: row.player.countryFlag,
              }),
              displayName: row.player.displayName,
              shortName: row.player.shortName,
            },
            scoringData: {
              position: row.scoringData.position,
              score: row.scoringData.score,
              scoreSort: row.scoringData.scoreSort,
              teeTime: parseTeeTime(row.scoringData.teeTime),
              thru: row.scoringData.thru,
              thruSort: row.scoringData.thruSort,
              total: row.scoringData.total,
              totalSort: fixTotalSort(
                row.scoringData.total,
                row.scoringData.totalSort,
              ),
            },
          };
        case "InformationRow":
          return {
            displayText: row.displayText,
            id: row.id,
            leaderboardSortOrder: row.leaderboardSortOrder,
          };
        default:
          return assertNever(row.__typename);
      }
    }),
  } satisfies RecursivePartial<LeaderboardV3>;
}

// biome-ignore lint/suspicious/noExplicitAny: AWSTimestamp
function parseTeeTime(teeTime?: any) {
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

function fixTotalSort(total: string, totalSort: number) {
  if (total.startsWith("-") && totalSort > 0) {
    // biome-ignore lint/suspicious/noConsole: logging PGA Tour API issue
    console.warn(
      `totalSort: ${totalSort} is positive for negative total: ${total}`,
    );
    return -parseInt(total.slice(1), 10);
  } else {
    return totalSort;
  }
}
