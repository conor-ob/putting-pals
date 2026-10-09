import type { CheerioAPI } from "cheerio";
import {
  NAME_SIMILARITY_THRESHOLD,
  nameSimilarity,
} from "../utils/name-similarity";
import type { EuropeanTourTournament } from "./domain/types";

export type EventToggle = {
  eventId: number;
  title: string;
};

export type TournamentWithEventId = {
  tournament: EuropeanTourTournament;
  eventId?: number;
};

// Matches `event-id`, `:event-id`, `v-bind:event-id`, `data-event-id` and
// `eventId` (attribute names are lowercased by the parser)
const EVENT_ID_ATTRIBUTE = /^(?::|v-bind:|data-)?event-?id$/i;
const EVENT_TITLE_ATTRIBUTE = /^(?::|v-bind:|data-)?event-?(?:title|name)$/i;

// Season year followed by a 3 digit sequence, e.g. 2026139
const EVENT_ID = /^\d{4}\d{3}$/;

/**
 * Reads any element with an event id and an event title attribute from the
 * schedule page, e.g. `<favourite-event-toggle :event-id=2026139
 * event-title="...">`. Attribute names are matched loosely so small markup
 * changes don't break scraping. The same event can appear more than once, so
 * results are deduplicated by event id.
 */
export function extractEventToggles($: CheerioAPI): EventToggle[] {
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

/**
 * Matches each tournament to an event toggle by name. Pairs are assigned
 * best score first, and each toggle is used at most once, so an event can't
 * steal another event's id on a shared word like "Championship".
 */
export function matchEventIds(
  tournaments: EuropeanTourTournament[],
  toggles: EventToggle[],
): TournamentWithEventId[] {
  const pairs = tournaments
    .flatMap((tournament, tournamentIndex) =>
      toggles.map((toggle) => ({
        tournamentIndex,
        toggle,
        score: nameSimilarity(tournament.name, toggle.title),
      })),
    )
    .filter(({ score }) => score >= NAME_SIMILARITY_THRESHOLD)
    .sort((a, b) => b.score - a.score);

  const eventIds = new Map<number, number>();
  const usedEventIds = new Set<number>();
  for (const { tournamentIndex, toggle } of pairs) {
    if (eventIds.has(tournamentIndex) || usedEventIds.has(toggle.eventId)) {
      continue;
    }
    eventIds.set(tournamentIndex, toggle.eventId);
    usedEventIds.add(toggle.eventId);
  }

  return tournaments.map((tournament, index) => ({
    tournament,
    eventId: eventIds.get(index),
  }));
}
