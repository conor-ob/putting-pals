import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Schedule, ScheduleUpcoming } from "./domain/types";
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
      case "putting-pals-tour": {
        if (year === undefined) {
          return this.puttingPalsApiScheduleClient.getCompleteSchedule(
            tourCode,
          );
        }
        const schedule = await this.puttingPalsApiScheduleClient.getSchedule(
          tourCode,
          year,
        );
        return [schedule];
      }
      case "pga-tour":
      case "korn-ferry-tour":
      case "pga-tour-champions":
      case "pga-tour-americas": {
        if (year === undefined) {
          return this.pgaTourApiScheduleClient.getCompleteSchedule(tourCode);
        }
        const schedule = await this.pgaTourApiScheduleClient.getSchedule(
          tourCode,
          year,
        );
        return [schedule];
      }
      case "dp-world-tour":
      case "liv-golf-tour": {
        if (year === undefined) {
          return this.espnSportsApiScheduleClient.getCompleteSchedule(tourCode);
        }
        const schedule = await this.espnSportsApiScheduleClient.getSchedule(
          tourCode,
          year,
        );
        return [schedule];
      }
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    switch (tourCode) {
      case "putting-pals-tour":
        return this.puttingPalsApiScheduleClient.getUpcomingSchedule(tourCode);
      case "pga-tour":
      case "korn-ferry-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
        return this.pgaTourApiScheduleClient.getUpcomingSchedule(tourCode);
      case "dp-world-tour":
      case "liv-golf-tour":
        return this.espnSportsApiScheduleClient.getUpcomingSchedule(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
