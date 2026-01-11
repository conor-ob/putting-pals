import type {
  DomainTournament,
  TournamentClient,
} from "@putting-pals/putting-pals-schema";
import { GraphQlClient } from "./graphql-client";

export class TournamentGraphQlClient
  extends GraphQlClient
  implements TournamentClient
{
  async getTournaments(ids: string[]): Promise<readonly DomainTournament[]> {
    return this.sdk.Tournaments({ ids }).then((data) => data.tournaments);
  }
}
