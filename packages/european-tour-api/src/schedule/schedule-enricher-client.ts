import type {
  Schedule,
  ScheduleClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { mapWithConcurrency } from "@putting-pals/putting-pals-utils";
import type { EuropeanTourApiImpl } from "../api/european-tour-api";
import {
  NAME_SIMILARITY_THRESHOLD,
  nameSimilarity,
} from "../utils/name-similarity";
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
    const [schedule, scrapedSchedule, miniSchedule] = await Promise.all([
      this.espnSportsApiScheduleClient.getSchedule(tourCode, year),
      this.europeanTourScheduleScraper.scrapeSchedule(year),
      this.europeanTourApi.getMiniSchedule(tourCode),
    ]);

    const eventCards = await mapWithConcurrency(
      scrapedSchedule.events,
      5,
      (e) => this.europeanTourApi.getEventCard(tourCode, e.eventId),
    );

    const events = scrapedSchedule.events.map((event, i) => {
      const eventCard = eventCards[i];
      return {
        ...event,
        imageUrl:
          eventCard?.status === "fulfilled"
            ? eventCard.value.imageUrl.replace(
                "{formatInstructions}",
                "t_et__banner_lg_720x344-2x",
              )
            : undefined,
      };
    });

    return {
      completed: schedule.completed.map((t) => {
        const matchingEvent = events
          .map((e) => ({
            event: e,
            score: nameSimilarity(e.eventName, t.name),
          }))
          .filter(({ score }) => score >= NAME_SIMILARITY_THRESHOLD)
          .sort((a, b) => b.score - a.score)[0]?.event;

        if (matchingEvent === undefined) {
          return t;
        }

        return {
          ...t,
          images: {
            ...t.images,
            cover: matchingEvent.imageUrl ?? "",
          },
        };
      }),
      upcoming: schedule.upcoming.map((t) => {
        const matchingEvent = events
          .map((e) => ({
            event: e,
            score: nameSimilarity(e.eventName, t.name),
          }))
          .filter(({ score }) => score >= NAME_SIMILARITY_THRESHOLD)
          .sort((a, b) => b.score - a.score)[0]?.event;

        if (matchingEvent === undefined) {
          return t;
        }

        return {
          ...t,
          images: {
            ...t.images,
            cover: matchingEvent.imageUrl ?? "",
          },
        };
      }),
    };
  }
}
