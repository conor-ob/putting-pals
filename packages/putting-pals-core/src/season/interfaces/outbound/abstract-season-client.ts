import type { TourCode } from "../../../tour/domain/types";
import type { Season } from "../../domain/types";
import type { SeasonClient } from "./season-client";

export abstract class AbstractSeasonClient<T> implements SeasonClient {
  async getSeasons(tourCode: TourCode): Promise<Season[]> {
    const seasons = await this.getSeasonsRemote(tourCode);
    return this.mapSeasons(seasons);
  }

  abstract getSeasonsRemote(tourCode: TourCode): Promise<T>;
  abstract mapSeasons(seasons: T): Season[];
}
