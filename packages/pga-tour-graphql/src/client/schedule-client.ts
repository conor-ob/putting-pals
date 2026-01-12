import type {
  Schedule,
  ScheduleUpcoming,
  ScheduleYears,
} from "@putting-pals/putting-pals-api";
import type { ScheduleClient } from "@putting-pals/putting-pals-schema";
import { GraphQlClient } from "./graphql-client";

export class ScheduleGraphQlClient
  extends GraphQlClient
  implements ScheduleClient
{
  async getScheduleYears(): Promise<ScheduleYears> {
    return this.sdk
      .ScheduleYears({ tourCode: "R" })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(year?: string): Promise<Schedule> {
    return this.sdk
      .Schedule({ tourCode: "R", year })
      .then((data) => data.schedule);
  }

  async getCompleteSchedule(): Promise<readonly Schedule[]> {
    return this.sdk
      .CompleteSchedule({ tourCode: "R" })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule(): Promise<ScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode: "R" })
      .then((data) => data.upcomingSchedule);
  }
}
