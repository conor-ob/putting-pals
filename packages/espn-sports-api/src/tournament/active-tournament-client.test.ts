import { fromPartial } from "@total-typescript/shoehorn";
import { expect, suite, test } from "vitest";
import { MockEspnSportsApi } from "../api/espn-sports-api.mock";
import { EspnSportsApiActiveTournamentClient } from "./active-tournament-client";

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

  test("returns previous event id when leaderboard has no event with competitors", async () => {
    const espnSportsApi = new MockEspnSportsApi({
      leaderboards: new Map([
        [
          "eur",
          fromPartial({
            events: [
              fromPartial({
                id: "current-event",
                season: fromPartial({ year: 2026 }),
                competitions: [
                  fromPartial({
                    id: "competition-with-no-competitors",
                  }),
                ],
              }),
            ],
          }),
        ],
      ]),
      schedules: new Map([
        [
          "eur:2026",
          fromPartial({
            seasons: [
              fromPartial({
                events: [
                  fromPartial({
                    id: "previous-event",
                    startDate: "2026-02-05",
                  }),
                  fromPartial({ id: "current-event", startDate: "2026-02-12" }),
                  fromPartial({ id: "next-event", startDate: "2026-02-19" }),
                ],
              }),
            ],
          }),
        ],
      ]),
    });

    const client = new EspnSportsApiActiveTournamentClient(espnSportsApi);

    const result = await client.getActiveTournamentId("eur");

    expect(result).toBe("previous-event");
  });

  test("returns last event of previous season when current event has no competitors", async () => {
    const espnSportsApi = new MockEspnSportsApi({
      leaderboards: new Map([
        [
          "eur",
          fromPartial({
            events: [
              fromPartial({
                id: "current-event",
                season: fromPartial({ year: 2026 }),
                competitions: [
                  fromPartial({
                    id: "competition-with-no-competitors",
                  }),
                ],
              }),
            ],
          }),
        ],
      ]),
      schedules: new Map([
        [
          "eur:2026",
          fromPartial({
            seasons: [
              fromPartial({
                year: 2026,
                events: [
                  fromPartial({ id: "current-event", startDate: "2026-01-15" }),
                  fromPartial({ id: "next-event", startDate: "2026-01-22" }),
                ],
              }),
              fromPartial({
                year: 2025,
              }),
            ],
          }),
        ],
        [
          "eur:2025",
          fromPartial({
            seasons: [
              fromPartial({
                year: 2025,
                events: [
                  fromPartial({
                    id: "previous-season-other-event",
                    startDate: "2025-11-05",
                  }),
                  fromPartial({
                    id: "previous-season-event",
                    startDate: "2025-11-12",
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

    expect(result).toBe("previous-season-event");
  });
});
