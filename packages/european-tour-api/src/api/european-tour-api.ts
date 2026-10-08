import {
  InternalServerError,
  NotFoundError,
  type TourCode,
  type Tournament,
  TournamentSchema,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import { EuropeanTourMiniScheduleSchema } from "../schedule/domain/schemas";
import type { EuropeanTourMiniScheduleEvent } from "../schedule/domain/types";
import {
  EventMetadataSchema,
  EventStatusSchema,
} from "../tournament/domain/schemas";
import type { EventMetadata, EventStatus } from "../tournament/domain/types";

export interface EuropeanTourApi {
  getEventStatus(eventId: number): Promise<EventStatus>;
  getEventMetadata(eventId: number): Promise<EventMetadata>;
  getMiniSchedule(tourCode: TourCode): Promise<EuropeanTourMiniScheduleEvent[]>;
  getTournament(tourCode: TourCode, id: string): Promise<Tournament>;
}

export class EuropeanTourApiImpl implements EuropeanTourApi {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async get(path: string): Promise<unknown> {
    const response = await fetch(`${this.baseUrl}/${path}`, { method: "GET" });
    if (!response.ok) {
      const body = await response.text();
      throw new InternalServerError(
        `ESPN API error: ${response.status} ${response.statusText}${body ? ` - ${body}` : ""}`,
      );
    }
    return await response.json();
  }

  async getEventStatus(eventId: number): Promise<EventStatus> {
    const response = await this.get(`api/sportdata/Event/Status/${eventId}`);
    return EventStatusSchema.parse(response);
  }

  async getEventMetadata(eventId: number): Promise<EventMetadata> {
    const response = await this.get(`library/events/${eventId}/favourite`);
    return EventMetadataSchema.parse(response);
  }

  async getTournament(_tourCode: TourCode, id: string): Promise<Tournament> {
    const response = await this.get(`${this.baseUrl}/api/v1/eventinfo/${id}`);
    return TournamentSchema.parse(response);
  }

  async getMiniSchedule(
    tourCode: TourCode,
  ): Promise<EuropeanTourMiniScheduleEvent[]> {
    const apiTourCode = this.mapDomainToApiTourCode(tourCode);
    const response = await this.get(
      `api/sportdata/MiniSchedule/Tour/${apiTourCode}`,
    );
    const miniSchedule = EuropeanTourMiniScheduleSchema.parse(response);
    const events = miniSchedule.Tours.find(
      (tour) => tour.TourId === parseInt(apiTourCode, 10),
    )?.Events;

    if (!events) {
      throw new NotFoundError(
        `Mini schedule not found for tour code: ${tourCode}`,
      );
    }

    return events;
  }

  private mapDomainToApiTourCode(tourCode: TourCode): string {
    switch (tourCode) {
      case "eur":
        return "1";
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
