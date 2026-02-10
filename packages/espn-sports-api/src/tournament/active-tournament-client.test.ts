import type { TourCode } from "@putting-pals/putting-pals-core";
import { fromPartial } from "@total-typescript/shoehorn";
import { expect, suite, test } from "vitest";
import type { EspnSportsApi } from "../api/EspnSportsApi";
import type { ApiLeaderboard } from "../leaderboard/domain/types";
import type { News } from "../news/domain/types";
import type { TourSchedule } from "../schedule/domain/types";
import { EspnSportsApiActiveTournamentClient } from "./active-tournament-client";

class MockEspnSportsApi implements EspnSportsApi {
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

  getTourSchedule(_tourCode: TourCode, season?: number): Promise<TourSchedule> {
    const schedule = this.mockData.schedules?.get(`${_tourCode}:${season}`);
    if (schedule === undefined) {
      return Promise.reject();
    }
    return Promise.resolve(schedule);
  }

  getNews(_tourCode: TourCode): Promise<News> {
    const news = this.mockData.news?.get(_tourCode);
    if (news === undefined) {
      return Promise.reject();
    }
    return Promise.resolve(news);
  }
}

suite("EspnSportsApiActiveTournamentClient", () => {
  test("returns event id when leaderboard has an event with competitors", async () => {
    const espnSportsApi = new MockEspnSportsApi({
      leaderboards: new Map([
        [
          "eur",
          fromPartial({
            events: [
              fromPartial({
                id: "event-with-competitors",
                competitions: [
                  fromPartial({
                    competitors: [
                      fromPartial({
                        id: "competitor",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      ]),
    });

    const client = new EspnSportsApiActiveTournamentClient(espnSportsApi);

    const result = await client.getActiveTournamentId("eur");

    expect(result).toBe("event-with-competitors");
  });
});
