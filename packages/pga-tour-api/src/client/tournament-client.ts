import type {
  Tournament,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import type { Sdk } from "../generated/graphql";

export class TournamentGraphQlClient implements TournamentClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  async getTournaments(ids: string[]): Promise<Tournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }
}
