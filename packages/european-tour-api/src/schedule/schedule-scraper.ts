import { NotFoundError } from "@putting-pals/putting-pals-core";
import type { CheerioAPI } from "cheerio";
import * as cheerio from "cheerio";
import { EuropeanTourScheduleSchema } from "./domain/schemas";
import type { EuropeanTourSchedule } from "./domain/types";
import {
  type EventToggle,
  extractEventToggles,
  matchEventIds,
} from "./event-ids";

type EuropeanTourScrapedSchedule = {
  events: {
    eventId: number;
    eventName: string;
    startDate: string;
    endDate: string;
  }[];
};

export interface ScheduleScraper {
  scrapeSchedule(year?: string): Promise<EuropeanTourScrapedSchedule>;
}

// Matches `event-id`, `:event-id`, `v-bind:event-id`, `data-event-id` and
// `eventId` (attribute names are lowercased by the parser)
const EVENT_ID_ATTRIBUTE = /^(?::|v-bind:|data-)?event-?id$/i;
const EVENT_TITLE_ATTRIBUTE = /^(?::|v-bind:|data-)?event-?(?:title|name)$/i;

// Season year followed by a 3 digit sequence, e.g. 2026139
const EVENT_ID = /^\d{4}\d{3}$/;

export class EuropeanTourScheduleScraper implements ScheduleScraper {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async getSchedulePage(year?: string): Promise<cheerio.CheerioAPI> {
    const response = await fetch(
      `${this.baseUrl}/dpworld-tour/schedule${year ? `/${year}` : ""}`,
      {
        method: "GET",
      },
    );

    const text = await response.text();

    return cheerio.load(text);
  }

  async scrapeSchedule(year?: string): Promise<EuropeanTourScrapedSchedule> {
    const $ = await this.getSchedulePage(year);

    // const events = extractEventToggles($);

    const scheduledEvents = this.scrapeScheduledEventsScript($);

    const eventIds = this.scrapeEventIds($);

    const matched = matchEventIds(scheduledEvents.subEvent, eventIds);

    console.log("MATCHED", JSON.stringify(matched, null, 2));

    return {
      events: matched.map((m) => {
        return {
          eventId: m.eventId!, // TODO handle undefined
          eventName: m.tournament.name,
          startDate: m.tournament.StartDate,
          endDate: m.tournament.EndDate,
        };
      }),
    };
  }

  private scrapeScheduledEventsScript($: CheerioAPI): EuropeanTourSchedule {
    const scripts = $('script[type="application/ld+json"]');

    for (const script of scripts.toArray()) {
      const html = $(script).html();
      if (html === null) {
        continue;
      }

      const result = EuropeanTourScheduleSchema.safeParse(JSON.parse(html));

      if (result.success) {
        return result.data;
      }
    }

    throw new NotFoundError("Schedule not found");
  }

  private scrapeEventIds($: CheerioAPI): EventToggle[] {
    const toggles = new Map<number, EventToggle>();

    $("*").each((_, element) => {
      const attributes = Object.entries($(element).attr() ?? {});
      const eventId = attributes
        .find(([name]) => EVENT_ID_ATTRIBUTE.test(name))?.[1]
        ?.trim();
      const title = attributes
        .find(([name]) => EVENT_TITLE_ATTRIBUTE.test(name))?.[1]
        ?.trim();
      if (!eventId || !EVENT_ID.test(eventId) || !title) {
        return;
      }
      toggles.set(Number(eventId), { eventId: Number(eventId), title });
    });

    return [...toggles.values()];
  }
}
