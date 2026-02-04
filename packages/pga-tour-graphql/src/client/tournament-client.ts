import type { TournamentClient } from "@putting-pals/putting-pals-core";
import type { Sdk, Tournament } from "@putting-pals/putting-pals-schema";

export class TournamentGraphQlClient implements TournamentClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  async getTournaments(ids: string[]): Promise<readonly Tournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }
}
