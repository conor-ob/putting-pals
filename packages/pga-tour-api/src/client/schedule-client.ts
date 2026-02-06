import type {
  Schedule,
  ScheduleClient,
  ScheduleUpcoming,
  ScheduleYears,
  TourCode,
} from "@putting-pals/putting-pals-core";
import type { Sdk } from "../generated/graphql";
import { mapDomainToApiTourCode } from "../utils/tour-code";

export class ScheduleGraphQlClient implements ScheduleClient {
  constructor(private readonly sdk: Sdk) {
    this.sdk = sdk;
  }

  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    return this.sdk
      .ScheduleYears({ tourCode: mapDomainToApiTourCode(tourCode) })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    return this.sdk.Schedule({ tourCode, year }).then((data) => data.schedule);
  }

  async getCompleteSchedule(tourCode: TourCode): Promise<readonly Schedule[]> {
    return this.sdk
      .CompleteSchedule({ tourCode: mapDomainToApiTourCode(tourCode) })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode })
      .then((data) => data.upcomingSchedule);
  }
}
