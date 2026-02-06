import {
  type Schedule,
  type ScheduleClient,
  type ScheduleUpcoming,
  type ScheduleYears,
  type TourCode,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type { Sdk } from "@putting-pals/putting-pals-schema";

export class ScheduleGraphQlClient implements ScheduleClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    return this.sdk
      .ScheduleYears({ tourCode: this.validateTourCode(tourCode) })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    return this.sdk.Schedule({ tourCode, year }).then((data) => data.schedule);
  }

  async getCompleteSchedule(tourCode: TourCode): Promise<readonly Schedule[]> {
    return this.sdk
      .CompleteSchedule({ tourCode: this.validateTourCode(tourCode) })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode })
      .then((data) => data.upcomingSchedule);
  }

  private validateTourCode(tourCode: TourCode) {
    if (
      tourCode === "dp-world-tour" ||
      tourCode === "liv-golf-tour" ||
      tourCode === "putting-pals-tour"
    ) {
      throw new UnsupportedTourCodeError(tourCode);
    }

    switch (tourCode) {
      case "pga-tour":
        return "R";
      case "pga-tour-champions":
        return "S";
      case "korn-ferry-tour":
        return "H";
      case "pga-tour-americas":
        return "Y";
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
