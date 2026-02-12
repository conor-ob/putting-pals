import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Tournament } from "./domain/types";
import type { BatchTournamentService } from "./interfaces/inbound/batch-tournament-service";
import type { BatchTournamentClient } from "./interfaces/outbound/batch-tournament-client";

export class BatchTournamentServiceImpl implements BatchTournamentService {
  constructor(
    private readonly pgaTourApiBatchTournamentClient: BatchTournamentClient,
  ) {
    this.pgaTourApiBatchTournamentClient = pgaTourApiBatchTournamentClient;
  }

  async getTournaments(
    tourCode: TourCode,
    ids: string[],
  ): Promise<Tournament[]> {
    switch (tourCode) {
      case "pal":
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
