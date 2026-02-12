import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Schedule } from "./domain/types";
import type { ScheduleService } from "./interfaces/inbound/schedule-service";
import type { ScheduleClient } from "./interfaces/outbound/schedule-client";

export class ScheduleServiceImpl implements ScheduleService {
  constructor(
    private readonly puttingPalsApiScheduleClient: ScheduleClient,
    private readonly pgaTourApiScheduleClient: ScheduleClient,
    private readonly espnSportsApiScheduleClient: ScheduleClient,
  ) {
    this.puttingPalsApiScheduleClient = puttingPalsApiScheduleClient;
    this.pgaTourApiScheduleClient = pgaTourApiScheduleClient;
    this.espnSportsApiScheduleClient = espnSportsApiScheduleClient;
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule[]> {
    switch (tourCode) {
      case "pal": {
        return this.puttingPalsApiScheduleClient.getSchedule(tourCode, year);
      }
      case "pga":
      case "dev":
      case "snr":
      case "pam": {
        return this.pgaTourApiScheduleClient.getSchedule(tourCode, year);
      }
      case "eur":
      case "liv": {
        return this.espnSportsApiScheduleClient.getSchedule(tourCode, year);
      }
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
