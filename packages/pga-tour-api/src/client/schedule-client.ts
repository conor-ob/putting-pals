import type {
  ApiCompleteSchedule,
  ApiSchedule,
  ApiScheduleYears,
  ApiUpcomingSchedule,
} from "@putting-pals/pga-tour-schema";
import { GraphQlClient } from "./graphql-client";

export class ScheduleClient extends GraphQlClient {
  async getScheduleYears(): Promise<ApiScheduleYears> {
    return this.sdk
      .ScheduleYears({ tourCode: "R" })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(year?: string): Promise<ApiSchedule> {
    return this.sdk
      .Schedule({ tourCode: "R", year })
      .then((data) => data.schedule);
  }

  async getCompleteSchedule(): Promise<ApiCompleteSchedule> {
    return this.sdk
      .CompleteSchedule({ tourCode: "R" })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule(): Promise<ApiUpcomingSchedule> {
    return this.sdk
      .UpcomingSchedule({ tourCode: "R" })
      .then((data) => data.upcomingSchedule);
  }
}
