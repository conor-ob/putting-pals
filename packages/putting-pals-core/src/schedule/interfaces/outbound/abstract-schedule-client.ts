import type { TourCode } from "../../../tour/domain/types";
import type { Schedule } from "../../domain/types";
import type { ScheduleClient } from "./schedule-client";

export abstract class AbstractScheduleClient<T> implements ScheduleClient {
  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule[]> {
    const schedule = await this.getScheduleRemote(tourCode, year);
    return this.mapSchedule(schedule);
  }

  abstract getScheduleRemote(tourCode: TourCode, year?: string): Promise<T>;
  abstract mapSchedule(schedule: T): Schedule[];
}
