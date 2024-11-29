import type { Tournament } from "../types";
import { GraphqlApi } from "../api";

export class TournamentClient extends GraphqlApi {
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

  public async getTournaments(ids: string[]) {
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

  public async getTournament(id: string) {
    return this.getTournaments([id]).then((tournaments) => {
      if (tournaments.length === 0 || !tournaments[0]) {
        throw new Error(`Tournament with id ${id} not found`);
      } else {
        return tournaments[0];
      }
    });
  }
}
