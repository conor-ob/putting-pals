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
      .query<TournamentsResponse>({
        query: this.tournamentsQuery,
        variables: { ids: ids },
      })
      .then((response) => {
        return response.data.tournaments.map((tournament) => {
          return {
            id: tournament.id,
            name: tournament.tournamentName,
            courses: tournament.courses,
            logoUrl: tournament.tournamentLogo,
            location: tournament.tournamentLocation,
            status: tournament.tournamentStatus,
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

type TournamentsResponse = {
  data: TournamentsData;
};

type TournamentsData = {
  tournaments: Tournament[];
};

type Tournament = {
  id: string;
  tournamentName: string;
  tournamentLogo: string;
  tournamentLocation: string;
  tournamentStatus: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
  roundStatusDisplay: string;
  roundDisplay: string;
  roundStatus:
    | "COMPLETE"
    | "GROUPINGS_OFFICIAL"
    | "IN_PROGRESS"
    | "OFFICIAL"
    | "SUSPENDED"
    | "UPCOMING";
  roundStatusColor: "BLUE" | "GRAY" | "GREEN" | "RED" | "YELLOW";
  currentRound: number;
  courses: { courseName: string }[];
};
