import type { TourCode } from "../../../tour/domain/types";
import type { Tournament } from "../../domain/types";
import type { TournamentClient } from "./tournament-client";

export abstract class AbstractTournamentClient<T> implements TournamentClient {
  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    const tournament = await this.getTournamentRemote(tourCode, id);
    return this.mapTournament(tournament);
  }

  abstract getTournamentRemote(tourCode: TourCode, id: string): Promise<T>;
  abstract mapTournament(tournament: T): Tournament;
}
