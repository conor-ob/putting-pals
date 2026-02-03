import type { TournamentClient } from "@putting-pals/putting-pals-core";
import type { Tournament } from "@putting-pals/putting-pals-schema";
import { GraphQlClient } from "./graphql-client";

export class TournamentGraphQlClient
  extends GraphQlClient
  implements TournamentClient
{
  async getTournaments(ids: string[]): Promise<readonly Tournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }
}
