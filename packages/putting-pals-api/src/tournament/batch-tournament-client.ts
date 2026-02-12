import type {
  BatchTournamentClient,
  Tournament,
} from "@putting-pals/putting-pals-core";

export class PuttingPalsApiBatchTournamentClient
  implements BatchTournamentClient
{
  constructor(
    private readonly pgaTourApiBatchTournamentClient: BatchTournamentClient,
  ) {
    this.pgaTourApiBatchTournamentClient = pgaTourApiBatchTournamentClient;
  }

  async getTournaments(ids: string[]): Promise<Tournament[]> {
    return this.pgaTourApiBatchTournamentClient.getTournaments(ids);
  }
}
