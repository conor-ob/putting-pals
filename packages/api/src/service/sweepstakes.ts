import { Database } from "@pkg/db";

import type { PlayerRow } from "../types";
import { mapLeaderboard } from "./leaderboard";

export async function mapSweepstakes({
  apiKey,
  id,
}: {
  apiKey: string;
  id: string;
}) {
  const puttingPalsTournament = new Database().getTournament(id);
  if (puttingPalsTournament === undefined) {
    throw new Error("Tournament not found");
  }
  const pgaTourLeaderboard = await mapLeaderboard({ apiKey, id });

  return {
    id: id,
    rows: puttingPalsTournament.players
      .map((sweepstakesPlayer) => {
        const picks = pgaTourLeaderboard.rows.filter((it) =>
          sweepstakesPlayer.picks.includes(it.id),
        ) as PlayerRow[];
        const totalSort = picks.reduce((accumulator, player) => {
          return accumulator + player.scoringData.totalSort;
        }, 0);
        return {
          id: sweepstakesPlayer.id,
          country: sweepstakesPlayer.country,
          countryFlag: sweepstakesPlayer.countryFlag,
          displayName: sweepstakesPlayer.displayName,
          shortName: sweepstakesPlayer.shortName,
          position: "",
          total:
            totalSort === 0
              ? "E"
              : totalSort > 0
                ? `+${totalSort}`
                : `${totalSort}`,
          totalSort: totalSort,
          players: picks,
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
      }, new Array<AggregatedPlayer>()),
  };
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

export type AggregatedPlayer = {
  id: string;
  country: string;
  countryFlag: string;
  shortName: string;
  displayName: string;
  position: string;
  total: string;
  totalSort: number;
  players: PlayerRow[];
};
