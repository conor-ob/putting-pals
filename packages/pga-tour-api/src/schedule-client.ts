import { GraphQlClient } from "./graphql-client";

export class ScheduleClient extends GraphQlClient {
  async getScheduleYears() {
    return this.sdk
      .ScheduleYears({ tourCode: "R" })
      .then((data) => data.scheduleYears);
  }

  async getSchedule(year?: string) {
    return this.sdk
      .Schedule({ tourCode: "R", year })
      .then((data) => data.schedule);
  }

  async getCompleteSchedule() {
    return this.sdk
      .CompleteSchedule({ tourCode: "R" })
      .then((data) => data.completeSchedule);
  }

  async getUpcomingSchedule() {
    return this.sdk
      .UpcomingSchedule({ tourCode: "R" })
      .then((data) => data.upcomingSchedule);
  }
}
