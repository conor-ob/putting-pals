import type { TourCode } from "../tour/domain/types";
import type { Season } from "./domain/types";
import type { SeasonService } from "./interfaces/inbound/season-service";
import type { SeasonClient } from "./interfaces/outbound/season-client";

export class SeasonServiceImpl implements SeasonService {
  constructor(private readonly seasonClient: SeasonClient) {
    this.seasonClient = seasonClient;
  }

  async getSeasons(_tourCode: TourCode): Promise<Season[]> {
    return this.seasonClient.getSeasons();
  }
}
