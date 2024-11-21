import type { Tournament } from "../../pga";
import { PgaTourApiService } from "./api";

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
        return response.data.tournaments.map((tournament) => {
          return {
            id: tournament.id,
            tournamentName: tournament.tournamentName,
            courses: tournament.courses,
            tournamentLogo: tournament.tournamentLogo,
            tournamentLocation: tournament.tournamentLocation,
            tournamentStatus: tournament.tournamentStatus,
            roundDisplay: tournament.roundDisplay,
            roundStatus: tournament.roundStatus,
            roundStatusDisplay: tournament.roundStatusDisplay,
            roundStatusColor: tournament.roundStatusColor,
          };
        });
      });
  }

  public async getTournament({ id }: { id: string }) {
    return this.getTournaments({ ids: [id] }).then((tournaments) => {
      return tournaments[0];
    });
  }
}
