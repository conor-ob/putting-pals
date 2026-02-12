import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Tournament } from "./domain/types";
import type { BatchTournamentService } from "./interfaces/inbound/batch-tournament-service";
import type { BatchTournamentClient } from "./interfaces/outbound/batch-tournament-client";

export class BatchTournamentServiceImpl implements BatchTournamentService {
  constructor(
    private readonly pgaTourApiBatchTournamentClient: BatchTournamentClient,
    private readonly puttingPalsApiBatchTournamentClient: BatchTournamentClient,
  ) {
    this.pgaTourApiBatchTournamentClient = pgaTourApiBatchTournamentClient;
    this.puttingPalsApiBatchTournamentClient =
      puttingPalsApiBatchTournamentClient;
  }

  async getTournaments(
    tourCode: TourCode,
    ids: string[],
  ): Promise<Tournament[]> {
    switch (tourCode) {
      case "pal":
        return this.puttingPalsApiBatchTournamentClient.getTournaments(ids);
      case "pga":
      case "dev":
      case "snr":
      case "pam":
        return this.pgaTourApiBatchTournamentClient.getTournaments(ids);
      case "eur":
      case "liv":
        throw new UnsupportedTourCodeError(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
