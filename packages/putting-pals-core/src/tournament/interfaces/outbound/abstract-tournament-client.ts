import type { TourCode } from "../../../tour/domain/types";
import type { Tournament } from "../../domain/types";
import type { TournamentClient } from "./tournament-client";

export abstract class AbstractTournamentClient<T> implements TournamentClient {
  async getTournaments(ids: string[]): Promise<Tournament[]> {
    const tournaments = await this.getTournamentsRemote(ids);
    return tournaments.map((tournament) => this.mapTournament(tournament));
  }

  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    const tournament = await this.getTournamentRemote(tourCode, id);
    return this.mapTournament(tournament);
  }

  abstract getTournamentsRemote(ids: string[]): Promise<T[]>;
  abstract getTournamentRemote(tourCode: TourCode, id: string): Promise<T>;
  abstract mapTournament(tournament: T): Tournament;
}
