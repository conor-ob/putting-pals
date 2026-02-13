import {
  InternalServerError,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import { ApiLeaderboardSchema } from "../leaderboard/domain/schemas";
import type { ApiLeaderboard } from "../leaderboard/domain/types";
import { ApiNewsSchema } from "../news/domain/schemas";
import type { News } from "../news/domain/types";
import { TourScheduleSchema } from "../schedule/domain/schemas";
import type { TourSchedule } from "../schedule/domain/types";
import { mapDomainToApiTourCode } from "../utils/tour-code";

export interface EspnSportsApi {
  getLeaderboard(tourCode: TourCode, id?: string): Promise<ApiLeaderboard>;
  getTourSchedule(tourCode: TourCode, season?: number): Promise<TourSchedule>;
  getNews(tourCode: TourCode): Promise<News>;
}

export class EspnSportsApiImpl implements EspnSportsApi {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async get(tourCode: TourCode, path: string): Promise<unknown> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const url = `${this.baseUrl}/${path.replaceAll("{tourCode}", apiTourCode)}`;
    console.log("url", url);
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) {
      const body = await response.text();
      throw new InternalServerError(
        `ESPN API error: ${response.status} ${response.statusText}${body ? ` - ${body}` : ""}`,
      );
    }
    return await response.json();
  }

  async getLeaderboard(
    tourCode: TourCode,
    id?: string,
  ): Promise<ApiLeaderboard> {
    const path = `leaderboard?league={tourCode}${id ? `&event=${id}` : ""}`;
    const response = await this.get(tourCode, path);
    return ApiLeaderboardSchema.parse(response);
  }

  async getTourSchedule(
    tourCode: TourCode,
    season?: number,
  ): Promise<TourSchedule> {
    const path = `{tourCode}/tourschedule${season ? `?season=${season}` : ""}`;
    const response = await this.get(tourCode, path);
    return TourScheduleSchema.parse(response);
  }

  async getNews(tourCode: TourCode): Promise<News> {
    const path = "{tourCode}/news";
    const response = await this.get(tourCode, path);
    return ApiNewsSchema.parse(response);
  }
}
