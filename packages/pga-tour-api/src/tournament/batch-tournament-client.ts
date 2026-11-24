import {
  AbstractBatchTournamentClient,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import type { ApiTournamentFieldsFragment, Sdk } from "../generated/graphql";
import { transformTournament } from "./tournament-utils";

export class PgaTourApiBatchTournamentClient extends AbstractBatchTournamentClient<ApiTournamentFieldsFragment> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getTournamentsRemote(
    ids: string[],
  ): Promise<ApiTournamentFieldsFragment[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }

  override mapTournament(tournament: ApiTournamentFieldsFragment): Tournament {
    return transformTournament(tournament);
  }
}
