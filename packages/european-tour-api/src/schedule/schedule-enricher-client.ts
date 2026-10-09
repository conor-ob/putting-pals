import type {
  Schedule,
  ScheduleClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { mapWithConcurrency } from "@putting-pals/putting-pals-utils";
import type { EuropeanTourApiImpl } from "../api/european-tour-api";
import type { ScheduleScraper } from "./schedule-scraper";

export class EuropeanTourApiScheduleEnricherClient implements ScheduleClient {
  constructor(
    private readonly europeanTourApi: EuropeanTourApiImpl,
    private readonly europeanTourScheduleScraper: ScheduleScraper,
    private readonly espnSportsApiScheduleClient: ScheduleClient,
  ) {
    this.europeanTourApi = europeanTourApi;
    this.espnSportsApiScheduleClient = espnSportsApiScheduleClient;
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    const [schedule, scrapedSchedule] = await Promise.all([
      this.espnSportsApiScheduleClient.getSchedule(tourCode, year),
      this.europeanTourScheduleScraper.scrapeSchedule(year),
    ]);

    const results = await mapWithConcurrency(scrapedSchedule.events, 5, (e) =>
      this.europeanTourApi.getEventCard(tourCode, e.eventId),
    );

    const events = results.map((e, i) => {
      const result = results[i];
      return {
        ...e,
        value:
          result?.status === "fulfilled"
            ? {
                ...result.value,
                imageUrl: result.value.imageUrl.replace(
                  "{formatInstructions}",
                  "t_et__banner_lg_720x344-2x",
                ),
              }
            : undefined,
      };
    });

    console.log("events", JSON.stringify(events, null, 2));

    return schedule;
  }
}
