import { TournamentClient } from "@pkg/graphql/tournament";

import type { Tournament } from "../types";

export class TournamentService {
  public async getTournament(id: string): Promise<Tournament> {
    return this.getTournaments([id]).then((tournaments) => {
      const tournament = tournaments[0];
      if (tournament === undefined) {
        throw new Error(`Tournament with id=${id} not found`);
      } else {
        return tournament;
      }
    });
  }

  public async getTournaments(ids: string[]): Promise<Tournament[]> {
    return new TournamentClient().getTournaments(ids).then((tournaments) => {
      return tournaments.map((tournament) => {
        return {
          beautyImage: tournament.beautyImage,
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
    });
  }
}
