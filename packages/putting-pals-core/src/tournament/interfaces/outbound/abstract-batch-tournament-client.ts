import type { Tournament } from "../../domain/types";
import type { BatchTournamentClient } from "./batch-tournament-client";

export abstract class AbstractBatchTournamentClient<T>
  implements BatchTournamentClient
{
  async getTournaments(ids: string[]): Promise<Tournament[]> {
    const tournaments = await this.getTournamentsRemote(ids);
    return tournaments.map((tournament) => this.mapTournament(tournament));
  }

  abstract getTournamentsRemote(ids: string[]): Promise<T[]>;
  abstract mapTournament(tournament: T): Tournament;
}
