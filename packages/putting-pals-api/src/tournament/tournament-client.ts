import type {
  TourCode,
  Tournament,
  TournamentClient,
} from "@putting-pals/putting-pals-core";

export class PuttingPalsApiTournamentClient implements TournamentClient {
  constructor(private readonly pgaTourApiTournamentClient: TournamentClient) {
    this.pgaTourApiTournamentClient = pgaTourApiTournamentClient;
  }

  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    return this.pgaTourApiTournamentClient.getTournament(tourCode, id);
  }
}
