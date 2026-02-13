import type { TourCode } from "@putting-pals/putting-pals-core";
import type { ApiLeaderboard } from "../leaderboard/domain/types";
import type { News } from "../news/domain/types";
import type { TourSchedule } from "../schedule/domain/types";
import type { EspnSportsApi } from "./espn-sports-api";

export class MockEspnSportsApi implements EspnSportsApi {
  constructor(
    private readonly mockData: {
      leaderboards?: Map<
        `${TourCode}` | `${TourCode}:${string}`,
        ApiLeaderboard
      >;
      schedules?: Map<`${TourCode}:${number | undefined}`, TourSchedule>;
      news?: Map<TourCode, News>;
    },
  ) {
    this.mockData = mockData;
  }

  getLeaderboard(tourCode: TourCode, id?: string): Promise<ApiLeaderboard> {
    const leaderboard = this.mockData.leaderboards?.get(
      id ? `${tourCode}:${id}` : tourCode,
    );
    if (leaderboard === undefined) {
      return Promise.reject();
    }
    return Promise.resolve(leaderboard);
  }

  getTourSchedule(tourCode: TourCode, season?: number): Promise<TourSchedule> {
    const schedule = this.mockData.schedules?.get(`${tourCode}:${season}`);
    if (schedule === undefined) {
      return Promise.reject();
    }
    return Promise.resolve(schedule);
  }

  getNews(tourCode: TourCode): Promise<News> {
    const news = this.mockData.news?.get(tourCode);
    if (news === undefined) {
      return Promise.reject();
    }
    return Promise.resolve(news);
  }
}
