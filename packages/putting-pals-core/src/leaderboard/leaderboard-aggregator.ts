import type { Competition } from "@putting-pals/putting-pals-schema/types";
import type { TransformedLeaderboard } from "./leaderboard-transformer";

export function aggregateLeaderboard(
  leaderboard: TransformedLeaderboard,
  competition: Competition,
) {
  const competitors = competition.competitors.map((competitor) => {
    const picks = leaderboard.rows
      .filter((it) => it.__typename === "PlayerRowV3")
      .filter((it) => competitor.picks.includes(it.id));
    const scoringAdjustedPicks = applyScoringRules({
      picks: picks,
      allPicks: leaderboard.rows.filter((it) =>
        competition.competitors.flatMap((it) => it.picks).includes(it.id),
      ),
      scoringRules: competition.scoringRules,
    });
    const totalSort = scoringAdjustedPicks
      .filter((it) => it.__typename === "PlayerRowV3")
      .reduce((accumulator, player) => {
        return accumulator + player.scoringData.totalSort;
      }, 0);
    return {
      ...competitor,
      picks: scoringAdjustedPicks,
      position: "",
      total:
        totalSort === 0
          ? "E"
          : totalSort > 0
            ? `+${totalSort}`
            : `${totalSort}`,
      totalSort: totalSort,
    };
  });

  const res = competitors
    .sort((a, b) => {
      if (
        a.picks
          .filter((it) => it.__typename === "PlayerRowV3")
          .every((pick) => pick.scoringData?.position === "-") &&
        b.picks
          .filter((it) => it.__typename === "PlayerRowV3")
          .every((pick) => pick.scoringData?.position === "-")
      ) {
        return 0;
      } else if (
        a.picks
          .filter((it) => it.__typename === "PlayerRowV3")
          .every((pick) => pick.scoringData?.position === "-")
      ) {
        return 1;
      } else if (
        b.picks
          .filter((it) => it.__typename === "PlayerRowV3")
          .every((pick) => pick.scoringData?.position === "-")
      ) {
        return -1;
      }
      return a.totalSort - b.totalSort;
    })
    .reduce(
      (accumulator, it, index) => {
        if (accumulator.length === 0) {
          accumulator.push({
            ...it,
            position: it.picks
              .filter((it) => it.__typename === "PlayerRowV3")
              .every((pick) => pick.scoringData.position === "-")
              ? "-"
              : (index + 1).toString(),
          });
        } else {
          if (
            it.picks
              .filter((it) => it.__typename === "PlayerRowV3")
              .every((pick) => pick.scoringData?.position === "-")
          ) {
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

  // return res
  //   .flatMap((it) => [it, ...it.picks])
  //   .map((it, index) => ({
  //     ...it,
  //     leaderboardSortOrder: index,
  //   }));

  return {
    formatType: leaderboard.formatType,
    leaderboardRoundHeader: leaderboard.leaderboardRoundHeader,
    rows: res
      .flatMap((it) => [
        { ...it, __typename: "PuttingPalsPlayerRow" as const },
        ...it.picks,
      ])
      .map((it, index) => ({
        ...it,
        leaderboardSortOrder: index,
      })),
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
  picks: TransformedLeaderboard["rows"];
  allPicks: TransformedLeaderboard["rows"];
  scoringRules?: string;
}): TransformedLeaderboard["rows"] {
  if (scoringRules === "MISSED_CUT") {
    return picks
      .filter((it) => it.__typename === "PlayerRowV3")
      .map((playerRow) => {
        if (
          playerRow.scoringData.position === "CUT" ||
          playerRow.scoringData.position === "WD"
        ) {
          const otherPlayersMakingCut = allPicks
            .filter((it) => it.__typename === "PlayerRowV3")
            .filter(
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
                  totalSort:
                    worstPerformingPlayerMakingCut.scoringData.totalSort,
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
