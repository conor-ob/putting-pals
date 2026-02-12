import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Season } from "./domain/types";
import type { SeasonService } from "./interfaces/inbound/season-service";
import type { SeasonClient } from "./interfaces/outbound/season-client";

export class SeasonServiceImpl implements SeasonService {
  constructor(
    private readonly puttingPalsApiSeasonClient: SeasonClient,
    private readonly pgaTourApiSeasonClient: SeasonClient,
    private readonly espnSportsApiSeasonClient: SeasonClient,
  ) {
    this.puttingPalsApiSeasonClient = puttingPalsApiSeasonClient;
    this.pgaTourApiSeasonClient = pgaTourApiSeasonClient;
    this.espnSportsApiSeasonClient = espnSportsApiSeasonClient;
  }

  async getSeasons(tourCode: TourCode): Promise<Season[]> {
    switch (tourCode) {
      case "pal":
        return this.puttingPalsApiSeasonClient.getSeasons(tourCode);
      case "pga":
      case "dev":
      case "snr":
      case "pam":
        return this.pgaTourApiSeasonClient.getSeasons(tourCode);
      case "eur":
      case "liv":
        return this.espnSportsApiSeasonClient.getSeasons(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
