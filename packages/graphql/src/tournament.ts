import type { Tournament } from "./types";
import { PgaTourApiService } from "./graphql-api";

export class PgaTourTournamentService extends PgaTourApiService {
  private tournamentsQuery = `
    query Tournaments($ids: [ID!]) {
      tournaments(ids: $ids) {
        id
        tournamentName
        tournamentLogo
        tournamentLocation
        tournamentStatus
        roundStatusDisplay
        roundDisplay
        roundStatus
        roundStatusColor
        currentRound
        courses {
          courseName
        }
        city
        state
        country
        displayDate
        weather {
          condition
          tempC
        }
      }
    }
  `;

  constructor({ apiKey }: { apiKey: string }) {
    super({ apiKey });
  }

  public async getTournaments({ ids }: { ids: string[] }) {
    return super
      .query<{
        data: {
          tournaments: Tournament[];
        };
      }>({
        query: this.tournamentsQuery,
        variables: { ids: ids },
      })
      .then((response) => {
        return response.data.tournaments;
      });
  }

  public async getTournament({ id }: { id: string }) {
    return this.getTournaments({ ids: [id] }).then((tournaments) => {
      if (tournaments.length === 0 || !tournaments[0]) {
        throw new Error(`Tournament with id ${id} not found`);
      } else {
        return tournaments[0];
      }
    });
  }
}
