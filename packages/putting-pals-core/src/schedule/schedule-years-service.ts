import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { ScheduleYears } from "./domain/types";
import type { ScheduleYearsService } from "./interfaces/inbound/schedule-years-service";
import type { ScheduleClient } from "./interfaces/outbound/schedule-client";

export class ScheduleYearsServiceImpl implements ScheduleYearsService {
  constructor(
    private readonly puttingPalsApiScheduleClient: ScheduleClient,
    private readonly pgaTourApiScheduleClient: ScheduleClient,
    private readonly espnSportsApiScheduleClient: ScheduleClient,
  ) {
    this.puttingPalsApiScheduleClient = puttingPalsApiScheduleClient;
    this.pgaTourApiScheduleClient = pgaTourApiScheduleClient;
    this.espnSportsApiScheduleClient = espnSportsApiScheduleClient;
  }

  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    switch (tourCode) {
      case "pal":
        return this.puttingPalsApiScheduleClient.getScheduleYears(tourCode);
      case "pga":
      case "dev":
      case "snr":
      case "pam":
        return this.pgaTourApiScheduleClient.getScheduleYears(tourCode);
      case "eur":
      case "liv":
        return this.espnSportsApiScheduleClient.getScheduleYears(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
