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
            const totalSort = picks.reduce((accumulator, player) => {
              return accumulator + player.scoringData.totalSort;
            }, 0);
            return {
              ...competitor,
              picks: picks,
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
          .sort((a, b) => a.totalSort - b.totalSort)
          .reduce((accumulator, it, index) => {
            if (accumulator.length === 0) {
              accumulator.push({
                ...it,
                position: (index + 1).toString(),
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
            return accumulator;
          }, new Array<Competitor>()),
      };
    });
  }

  private getPosition(previousPosition: string): string {
    if (previousPosition.startsWith("T")) {
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
}
