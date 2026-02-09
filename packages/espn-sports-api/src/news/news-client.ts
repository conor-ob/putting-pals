import type { TourCode } from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/EspnSportsApi";
import type { News } from "./domain/types";

export class EspnSportsApiNewsClient {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    this.espnSportsApi = espnSportsApi;
  }

  async getNews(tourCode: TourCode): Promise<News> {
    return this.espnSportsApi.getNews(tourCode);
  }

  getNewsArticle(_id: number) {}
}
