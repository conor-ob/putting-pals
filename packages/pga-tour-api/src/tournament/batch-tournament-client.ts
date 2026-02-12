import {
  AbstractBatchTournamentClient,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import type { ApiTournament, Sdk } from "../generated/graphql";
import { transformTournament } from "./tournament-utils";

export class PgaTourApiBatchTournamentClient extends AbstractBatchTournamentClient<ApiTournament> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getTournamentsRemote(ids: string[]): Promise<ApiTournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }

  override mapTournament(tournament: ApiTournament): Tournament {
    return transformTournament(tournament);
  }
}
