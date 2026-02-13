import {
  AbstractSeasonClient,
  type Season,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/espn-sports-api";
import type { TourSchedule } from "../schedule/domain/types";

export class EspnSportsApiSeasonClient extends AbstractSeasonClient<TourSchedule> {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    super();
    this.espnSportsApi = espnSportsApi;
  }

  override async getSeasonsRemote(tourCode: TourCode): Promise<TourSchedule> {
    return this.espnSportsApi.getTourSchedule(tourCode);
  }

  override mapSeasons(schedule: TourSchedule): Season[] {
    return schedule.seasons.map((season) => ({
      current: season.year === schedule.currentSeason,
      displayValue: season.displayName,
      value: season.year,
    }));
  }
}
