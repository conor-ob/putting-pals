import {
  NotFoundError,
  type Tournament,
  type TournamentClient,
} from "@putting-pals/putting-pals-core";
import type { Sdk } from "../generated/graphql";
import { transformTournament } from "./tournament-utils";

export class PgaTourApiTournamentClient implements TournamentClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  async getTournament(id: string): Promise<Tournament> {
    const tournaments = await this.getTournaments([id]);
    const tournament = tournaments.find((t) => t.id === id);
    if (tournament === undefined) {
      throw new NotFoundError(`Tournament ${id} not found`);
    }
    return tournament;
  }

  async getTournaments(ids: string[]): Promise<Tournament[]> {
    return this.sdk
      .Tournaments({ ids })
      .then((data) => data.tournaments.map(transformTournament));
  }
}
