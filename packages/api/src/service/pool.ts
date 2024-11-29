import { PoolDatabase } from "@pkg/db";

import type { PlayerRow, PoolEntrant, PoolLeaderboard } from "../types";
import { LeaderboardService } from "./leaderboard";

export class PoolService {
  public async getPool(id: string): Promise<PoolLeaderboard> {
    const pool = new PoolDatabase().getPool(id);
    if (pool === undefined) {
      throw new Error("Tournament not found");
    }
    const pgaTourLeaderboard = await new LeaderboardService().getLeaderboard(
      id,
    );

    return {
      id: id,
      entrants: pool.entrants
        .map((entrant) => {
          const picks = pgaTourLeaderboard.rows.filter((it) =>
            entrant.picks.includes(it.id),
          ) as PlayerRow[];
          const totalSort = picks.reduce((accumulator, player) => {
            return accumulator + player.scoringData.totalSort;
          }, 0);
          return {
            ...entrant,
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
          return accumulator;
        }, new Array<PoolEntrant>()),
    };
  }
}

function getPosition(previousPosition: string): string {
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
