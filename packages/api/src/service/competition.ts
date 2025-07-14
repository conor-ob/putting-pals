import { CompetitionDatabase } from "@pkg/db";

import type { Competition, Competitor, PlayerRow } from "../types";
import { LeaderboardService } from "./leaderboard";

export class CompetitionService {
  public async getCompetition(id: string): Promise<Competition> {
    return new LeaderboardService().getLeaderboard(id).then((leaderboard) => {
      const competition = new CompetitionDatabase().getCompetition(id);
      return {
        id: id,
        competitors: competition.competitors
          .map((competitor) => {
            const picks = leaderboard.rows.filter((it) =>
              competitor.picks.includes(it.id),
            ) as PlayerRow[];
            const scoringAdjustedPicks = this.applyScoringRules({
              picks: picks,
              allPicks: leaderboard.rows.filter((it) =>
                competition.competitors
                  .flatMap((it) => it.picks)
                  .includes(it.id),
              ) as PlayerRow[],
              scoringRules: competition.scoringRules,
            });
            const totalSort = scoringAdjustedPicks.reduce(
              (accumulator, player) => {
                return accumulator + player.scoringData.totalSort;
              },
              0,
            );
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
          })
          .sort((a, b) => {
            if (
              a.picks.every((pick) => pick.scoringData.position === "-") &&
              b.picks.every((pick) => pick.scoringData.position === "-")
            ) {
              return 0;
            } else if (
              a.picks.every((pick) => pick.scoringData.position === "-")
            ) {
              return 1;
            } else if (
              b.picks.every((pick) => pick.scoringData.position === "-")
            ) {
              return -1;
            }
            return a.totalSort - b.totalSort;
          })
          .reduce((accumulator, it, index) => {
            if (accumulator.length === 0) {
              accumulator.push({
                ...it,
                position: it.picks.every(
                  (pick) => pick.scoringData.position === "-",
                )
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
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                const previous = accumulator[accumulator.length - 1]!; // TODO !
                if (previous.totalSort === it.totalSort) {
                  accumulator[accumulator.length - 1] = {
                    ...previous,
                    position: this.getPosition(previous.position),
                  };
                  accumulator.push({
                    ...it,
                    position: this.getPosition(previous.position),
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
          }, new Array<Competitor>()),
      };
    });
  }

  private getPosition(previousPosition: string): string {
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

  private applyScoringRules({
    picks,
    allPicks,
    scoringRules,
  }: {
    picks: PlayerRow[];
    allPicks: PlayerRow[];
    scoringRules?: string;
  }): PlayerRow[] {
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
}
