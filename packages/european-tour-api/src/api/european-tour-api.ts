import {
  InternalServerError,
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import { ApiMiniScheduleSchema } from "../schedule/domain/schemas";
import type { ApiMiniSchedule } from "../schedule/domain/types";
import {
  ApiEventCardSchema,
  ApiEventStatusSchema,
} from "../tournament/domain/schemas";
import type { ApiEventCard, ApiEventStatus } from "../tournament/domain/types";

export interface EuropeanTourApi {
  getEventStatus(tourCode: TourCode, eventId: number): Promise<ApiEventStatus>;
  getEventCard(tourCode: TourCode, eventId: number): Promise<ApiEventCard>;
  getMiniSchedule(tourCode: TourCode): Promise<ApiMiniSchedule>;
}

export class EuropeanTourApiImpl implements EuropeanTourApi {
  constructor(private readonly baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async get(tourCode: TourCode, path: string): Promise<unknown> {
    const apiTourCode = this.mapDomainToApiTourCode(tourCode);
    const response = await fetch(
      `${this.baseUrl}/${path.replaceAll("{tourCode}", apiTourCode)}`,
      { method: "GET" },
    );
    if (!response.ok) {
      const body = await response.text();
      throw new InternalServerError(
        `European Tour API error: ${response.status} ${response.statusText}${body ? ` - ${body}` : ""}`,
      );
    }
    return await response.json();
  }

  async getEventStatus(
    tourCode: TourCode,
    eventId: number,
  ): Promise<ApiEventStatus> {
    const path = `api/sportdata/Event/Status/${eventId}`;
    const response = await this.get(tourCode, path);
    return ApiEventStatusSchema.parse(response);
  }

  async getEventCard(
    tourCode: TourCode,
    eventId: number,
  ): Promise<ApiEventCard> {
    const path = `library/events/${eventId}/favourite`;
    const response = await this.get(tourCode, path);
    return ApiEventCardSchema.parse(response);
  }

  async getMiniSchedule(tourCode: TourCode): Promise<ApiMiniSchedule> {
    const path = `api/sportdata/MiniSchedule/Tour/{tourCode}`;
    const response = await this.get(tourCode, path);
    return ApiMiniScheduleSchema.parse(response);
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
