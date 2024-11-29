import type { Tournament as ApiTournament } from "../types";
import type { Tournament as GraphQlTournament } from "./gql";
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

  public async getTournaments({
    ids,
  }: {
    ids: string[];
  }): Promise<ApiTournament[]> {
    return super
      .query<{
        data: {
          tournaments: GraphQlTournament[];
        };
      }>({
        query: this.tournamentsQuery,
        variables: { ids: ids },
      })
      .then((response) => {
        return response.data.tournaments.map((tournament) =>
          this.mapToDomainModel(tournament),
        );
      });
  }

  public async getTournament({ id }: { id: string }): Promise<ApiTournament> {
    return this.getTournaments({ ids: [id] }).then((tournaments) => {
      if (tournaments.length === 0 || !tournaments[0]) {
        throw new Error(`Tournament with id ${id} not found`);
      } else {
        return tournaments[0];
      }
    });
  }

  private mapToDomainModel(tournament: GraphQlTournament): ApiTournament {
    return {
      city: tournament.city,
      country: tournament.country,
      courses: tournament.courses.map((course) => {
        return { name: course.courseName };
      }),
      displayDate: tournament.displayDate,
      id: tournament.id,
      logos: tournament.tournamentLogo,
      name: tournament.tournamentName,
      roundDisplay: tournament.roundDisplay,
      roundStatus: tournament.roundStatus,
      roundStatusDisplay: tournament.roundStatusDisplay,
      roundStatusColor: tournament.roundStatusColor,
      state: tournament.state,
      status: tournament.tournamentStatus,
      weather:
        tournament.weather !== null && tournament.weather !== undefined
          ? {
              condition: tournament.weather.condition,
              tempC: tournament.weather.tempC,
            }
          : undefined,
    };
  }
}
