import type { PlayerRowV3 } from "../../pga-tour/types/graphql";
import { PgaTourLeaderboardService } from "../../pga-tour/services/leaderboard";
import { Database } from "../db";

export class PuttingPalsLeaderboardService {
  private apiKey: string;

  constructor({ apiKey }: { apiKey: string }) {
    this.apiKey = apiKey;
  }

  public async getLeaderboard({ id }: { id: string }) {
    const puttingPalsTournament = new Database()
      .getTournaments()
      .find((tournament) => tournament.id === id);
    if (puttingPalsTournament === undefined) {
      throw new Error("Tournament not found");
    }
    const pgaTourLeaderboard = await new PgaTourLeaderboardService({
      apiKey: this.apiKey,
    }).getLeaderboard({ id });

    return {
      players: puttingPalsTournament.playerPicks
        .map((playerPick) => {
          const picks = pgaTourLeaderboard.players
            .filter((it) => it.__typename === "PlayerRowV3")
            .filter((it) => playerPick.picks.includes(it.player.id));
          const totalSort = picks.reduce((accumulator, player) => {
            return accumulator + player.scoringData.totalSort;
          }, 0);
          return {
            id: playerPick.player.id,
            country: playerPick.player.country,
            countryFlag: playerPick.player.countryFlag,
            displayName: playerPick.player.displayName,
            shortName: playerPick.player.shortName,
            position: "",
            total:
              totalSort === 0
                ? "E"
                : totalSort > 0
                  ? `+${totalSort}`
                  : `${totalSort}`,
            totalSort: totalSort,
            players: picks as PlayerRowV3[],
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
  players: PlayerRowV3[];
};
