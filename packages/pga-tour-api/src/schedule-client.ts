import {
  CompleteScheduleDocument,
  ScheduleDocument,
  ScheduleYearsDocument,
  UpcomingScheduleDocument,
} from "@putting-pals/pga-tour-schema/types";
import { GraphQlClient } from "./graphql-client";

export class ScheduleClient extends GraphQlClient {
  async getScheduleYears() {
    return this.query(ScheduleYearsDocument, { tourCode: "R" }).then(
      (data) => data.scheduleYears,
    );
  }

  async getSchedule(year?: string) {
    return this.query(ScheduleDocument, { tourCode: "R", year }).then(
      (data) => data.schedule,
    );
  }

  async getCompleteSchedule() {
    return this.query(CompleteScheduleDocument, { tourCode: "R" }).then(
      (data) => data.completeSchedule,
    );
  }

  async getUpcomingSchedule() {
    return this.query(UpcomingScheduleDocument, { tourCode: "R" }).then(
      (data) => data.upcomingSchedule,
    );
  }
}
