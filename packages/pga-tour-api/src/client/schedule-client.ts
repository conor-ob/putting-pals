import type {
  DomainSchedule,
  DomainScheduleUpcoming,
  DomainScheduleYears,
  ScheduleClient,
} from "@putting-pals/putting-pals-schema";
import { GraphQlClient } from "./graphql-client";

export class ScheduleGraphQlClient
  extends GraphQlClient
  implements ScheduleClient
{
  async getScheduleYears(): Promise<DomainScheduleYears> {
    return this.sdk
      .ScheduleYears({ tourCode: "R" })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(year?: string): Promise<DomainSchedule> {
    return this.sdk
      .Schedule({ tourCode: "R", year })
      .then((data) => data.schedule);
  }

  async getCompleteSchedule(): Promise<readonly DomainSchedule[]> {
    return this.sdk
      .CompleteSchedule({ tourCode: "R" })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule(): Promise<DomainScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode: "R" })
      .then((data) => data.upcomingSchedule);
  }
}
