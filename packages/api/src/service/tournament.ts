import { TournamentClient } from "@pkg/graphql/tournament";

import type { Tournament } from "../types";

export class TournamentService {
  public async getTournament(id: string): Promise<Tournament> {
    return new TournamentClient().getTournament(id).then((tournament) => {
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
        weather: tournament.weather
          ? {
              condition: tournament.weather.condition,
              tempC: tournament.weather.tempC,
            }
          : undefined,
      };
    });
  }
}
