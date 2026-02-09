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

export class EspnSportsApi {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async get(tourCode: TourCode, path: string): Promise<unknown> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const response = await fetch(path.replaceAll("{tourCode}", apiTourCode), {
      method: "GET",
    });
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
    const url = `${this.baseUrl}/leaderboard?league={tourCode}${id ? `&event=${id}` : ""}`;
    const response = await this.get(tourCode, url);
    return ApiLeaderboardSchema.parse(response);
  }

  async getTourSchedule(
    tourCode: TourCode,
    season?: number,
  ): Promise<TourSchedule> {
    const url = `${this.baseUrl}/{tourCode}/tourschedule${season ? `?season=${season}` : ""}`;
    const response = await this.get(tourCode, url);
    return TourScheduleSchema.parse(response);
  }

  async getNews(tourCode: TourCode): Promise<News> {
    const url = `${this.baseUrl}/{tourCode}/news`;
    const response = await this.get(tourCode, url);
    return ApiNewsSchema.parse(response);
  }
}
