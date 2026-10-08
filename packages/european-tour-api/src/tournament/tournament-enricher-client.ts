import type {
  TourCode,
  Tournament,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import type { EuropeanTourApiImpl } from "../api/european-tour-api";
import type { EventStatus } from "./domain/types";

const NAME_SIMILARITY_THRESHOLD = 0.5;
const NAME_STOP_WORDS = new Set([
  "the",
  "presented",
  "pres",
  "by",
  "at",
  "in",
  "of",
  "and",
]);

// TODO: majors are not included in espn sports eur schedule
export class EuropeanTourApiTournamentEnricherClient
  implements TournamentClient
{
  constructor(
    private readonly europeanTourApi: EuropeanTourApiImpl,
    private readonly espnSportsApiTournamentClient: TournamentClient,
  ) {
    this.europeanTourApi = europeanTourApi;
    this.espnSportsApiTournamentClient = espnSportsApiTournamentClient;
  }

  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    const tournament = await this.espnSportsApiTournamentClient.getTournament(
      tourCode,
      id,
    );

    const miniSchedule = await this.europeanTourApi.getMiniSchedule("eur");
    const matchingEvent = miniSchedule
      .filter(
        (event) =>
          this.isSameIsoDay(event.StartDate, tournament.schedule.startDate) &&
          this.isSameIsoDay(event.EndDate, tournament.schedule.endDate),
      )
      .map((event) => ({
        event,
        score: this.nameSimilarity(event.EventName, tournament.name),
      }))
      .filter(({ score }) => score >= NAME_SIMILARITY_THRESHOLD)
      .sort((a, b) => b.score - a.score)[0]?.event;

    if (matchingEvent === undefined) {
      return tournament;
    }

    const eventStatus = await this.europeanTourApi.getEventStatus(
      matchingEvent.EventId,
    );

    return {
      ...tournament,
      schedule: this.enrichTournamentStatus(tournament, eventStatus),
      status: this.enrichRoundStatus(tournament, eventStatus),
    };
  }

  private isSameIsoDay(a: string, b: string) {
    return a.slice(0, 10) === b.slice(0, 10);
  }

  /**
   * Fraction of the shorter name's words that appear in the other name, so
   * extra sponsor words like "presented by X" don't reduce the score.
   */
  private nameSimilarity(a: string, b: string): number {
    const ta = this.nameTokens(a);
    const tb = this.nameTokens(b);
    if (ta.size === 0 || tb.size === 0) {
      return 0;
    }

    const shared = [...ta].filter((token) => tb.has(token)).length;
    return shared / Math.min(ta.size, tb.size);
  }

  private nameTokens(name: string): Set<string> {
    return new Set(
      name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9 ]/g, " ")
        .split(/\s+/)
        .filter((token) => token.length > 1 && !NAME_STOP_WORDS.has(token)),
    );
  }

  private enrichTournamentStatus(
    tournament: Tournament,
    eventStatus: EventStatus,
  ): Tournament["schedule"] {
    if (eventStatus.Status === 0) {
      return {
        ...tournament.schedule,
        status: "IN_PROGRESS",
      };
    } else {
      return tournament.schedule;
    }
  }

  private enrichRoundStatus(
    tournament: Tournament,
    eventStatus: EventStatus,
  ): Tournament["status"] {
    if (eventStatus.RoundStatus === 2) {
      return {
        ...tournament.status,
        roundStatus: "IN_PROGRESS",
        roundStatusColor: "RED",
        roundStatusDisplay: "In Progress",
      };
    } else {
      return tournament.status;
    }
  }
}
