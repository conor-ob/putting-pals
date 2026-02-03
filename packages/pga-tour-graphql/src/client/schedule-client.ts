import type {
  Schedule,
  ScheduleClient,
  ScheduleUpcoming,
  ScheduleYears,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { GraphQlClient } from "./graphql-client";

export class ScheduleGraphQlClient
  extends GraphQlClient
  implements ScheduleClient
{
  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    return this.sdk
      .ScheduleYears({ tourCode: tourCode as Exclude<TourCode, "D" | "P"> })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    return this.sdk.Schedule({ tourCode, year }).then((data) => data.schedule);
  }

  async getCompleteSchedule(tourCode: TourCode): Promise<readonly Schedule[]> {
    return this.sdk
      .CompleteSchedule({ tourCode: tourCode as Exclude<TourCode, "D" | "P"> })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode })
      .then((data) => data.upcomingSchedule);
  }
}
