import type {
  LeaderboardRowV3,
  LeaderboardV3,
} from "@putting-pals/pga-tour-schema/types";
import { assertNever, type RecursivePartial } from "../utils/type-utils";
import { getCountryFlag } from "./leaderboard-flag-utils";

export type TransformedLeaderboard = ReturnType<typeof transformLeaderboard>;

export function transformLeaderboard(leaderboard: LeaderboardV3) {
  return {
    formatType: leaderboard.formatType,
    id: leaderboard.id,
    leaderboardRoundHeader: leaderboard.leaderboardRoundHeader,
    rows: leaderboard.players.map((row) => {
      switch (row.__typename) {
        case "PlayerRowV3":
          return {
            __typename: row.__typename,
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
              id: row.player.id,
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
            __typename: row.__typename,
            displayText: row.displayText,
            id: row.id,
            leaderboardSortOrder: row.leaderboardSortOrder,
          };
        default:
          return assertNever(row.__typename);
      }
    }),
  } satisfies RecursivePartial<LeaderboardV3 & { rows: LeaderboardRowV3[] }>;
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
