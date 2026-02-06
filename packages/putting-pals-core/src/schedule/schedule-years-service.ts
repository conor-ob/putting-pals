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
      case "putting-pals-tour":
        return this.puttingPalsApiScheduleClient.getScheduleYears(tourCode);
      case "pga-tour":
      case "korn-ferry-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
        return this.pgaTourApiScheduleClient.getScheduleYears(tourCode);
      case "dp-world-tour":
      case "liv-golf-tour":
        return this.espnSportsApiScheduleClient.getScheduleYears(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
