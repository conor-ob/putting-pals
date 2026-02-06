import type { Competition } from "../competition/domain/types";
import type {
  LeaderboardV3,
  PlayerRowV3,
  PuttingPalsPlayer,
  PuttingPalsPlayerRow,
  PuttingPalsPlayerScoringData,
} from "./domain/types";

export function aggregateLeaderboard(
  leaderboard: LeaderboardV3,
  competition: Competition,
): LeaderboardV3 {
  const competitors = competition.competitors
    .map((competitor) => {
      const playerRows = leaderboard.players.filter(
        (it) => it.__typename === "PlayerRowV3",
      );
      const picks = playerRows.filter((it) => competitor.picks.includes(it.id));
      const scoringAdjustedPicks = applyScoringRules({
        picks: picks,
        allPicks: playerRows.filter((it) =>
          competition.competitors.flatMap((it) => it.picks).includes(it.id),
        ),
        scoringRules: competition.scoringRules,
      });
      const totalSort = scoringAdjustedPicks.reduce((accumulator, player) => {
        return accumulator + player.scoringData.totalSort;
      }, 0);

      return {
        ...competitor,
        picks: scoringAdjustedPicks,
        position: "",
        total:
          totalSort === 0
            ? leaderboard.tournamentStatus === "NOT_STARTED"
              ? "-"
              : "E"
            : totalSort > 0
              ? `+${totalSort}`
              : `${totalSort}`,
        totalSort: totalSort,
      };
    })
    .sort((a, b) => {
      if (
        a.picks.every((pick) => pick.scoringData.position === "-") &&
        b.picks.every((pick) => pick.scoringData.position === "-")
      ) {
        return 0;
      } else if (a.picks.every((pick) => pick.scoringData.position === "-")) {
        return 1;
      } else if (b.picks.every((pick) => pick.scoringData.position === "-")) {
        return -1;
      }
      return a.totalSort - b.totalSort;
    });

  const aggregatedCompetitors = competitors.reduce(
    (accumulator, it, index) => {
      if (accumulator.length === 0) {
        accumulator.push({
          ...it,
          position: it.picks.every((pick) => pick.scoringData.position === "-")
            ? "-"
            : (index + 1).toString(),
        });
      } else {
        if (it.picks.every((pick) => pick.scoringData.position === "-")) {
          accumulator.push({
            ...it,
            position: "-",
          });
        } else {
          // biome-ignore lint/style/noNonNullAssertion: TODO !
          const previous = accumulator[accumulator.length - 1]!;
          if (previous.totalSort === it.totalSort) {
            accumulator[accumulator.length - 1] = {
              ...previous,
              position: getPosition(previous.position),
            };
            accumulator.push({
              ...it,
              position: getPosition(previous.position),
            });
          } else {
            accumulator.push({
              ...it,
              position: `${index + 1}`,
            });
          }
        }
      }
      return accumulator;
    },
    [] as (typeof competitors)[number][],
  );

  const rows = aggregatedCompetitors
    .flatMap((competitor) => [
      {
        __typename: "PuttingPalsPlayerRow" as const,
        id: competitor.id,
        leaderboardSortOrder: 0,
        player: {
          __typename: "PuttingPalsPlayer" as const,
          countryFlag: competitor.countryFlag,
          displayName: competitor.displayName,
          id: competitor.id,
          shortName: competitor.shortName,
        } satisfies PuttingPalsPlayer,
        scoringData: {
          __typename: "PuttingPalsPlayerScoringData" as const,
          position: competitor.position,
          total: competitor.total,
          totalSort: competitor.totalSort,
        } satisfies PuttingPalsPlayerScoringData,
        picks: competitor.picks.map((pick) => pick.player.id),
      } satisfies PuttingPalsPlayerRow,
      ...competitor.picks.map((pick) => ({
        ...pick,
        id: `${competitor.id}-${pick.id}`,
      })),
    ])
    .map((row, index) => ({
      ...row,
      leaderboardSortOrder: index,
    }));

  return {
    ...leaderboard,
    players: rows,
  };
}

function getPosition(previousPosition: string): string {
  if (previousPosition === "-") {
    return previousPosition;
  } else if (previousPosition.startsWith("T")) {
    return previousPosition;
  } else {
    const rank = Number(previousPosition);
    if (rank > 99) {
      return previousPosition;
    } else {
      return `T${previousPosition}`;
    }
  }
}

function applyScoringRules({
  picks,
  allPicks,
  scoringRules,
}: {
  picks: Extract<
    LeaderboardV3["players"][number],
    { __typename: "PlayerRowV3" }
  >[];
  allPicks: Extract<
    LeaderboardV3["players"][number],
    { __typename: "PlayerRowV3" }
  >[];
  scoringRules?: string;
}): PlayerRowV3[] {
  if (scoringRules === "MISSED_CUT") {
    return picks.map((playerRow) => {
      if (
        playerRow.scoringData.position === "CUT" ||
        playerRow.scoringData.position === "WD"
      ) {
        const otherPlayersMakingCut = allPicks.filter(
          (it) =>
            it.id !== playerRow.id &&
            it.scoringData.position !== "CUT" &&
            it.scoringData.position !== "WD",
        );
        if (otherPlayersMakingCut.length === 0) {
          return playerRow;
        } else {
          const worstPerformingPlayerMakingCut = otherPlayersMakingCut.sort(
            (a, b) => b.scoringData.totalSort - a.scoringData.totalSort,
          )[0];
          if (worstPerformingPlayerMakingCut === undefined) {
            return playerRow;
          } else if (
            playerRow.scoringData.position === "WD" ||
            worstPerformingPlayerMakingCut.scoringData.totalSort >
              playerRow.scoringData.totalSort
          ) {
            return {
              ...playerRow,
              scoringData: {
                ...playerRow.scoringData,
                total: `${worstPerformingPlayerMakingCut.scoringData.total}*`,
                totalSort: worstPerformingPlayerMakingCut.scoringData.totalSort,
              },
            };
          } else {
            return playerRow;
          }
        }
      } else {
        return playerRow;
      }
    });
  } else {
    return picks;
  }
}
