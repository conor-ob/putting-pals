import type { TourCode } from "../../../tour/domain/types";
import type {
  Schedule,
  ScheduleUpcoming,
  ScheduleYears,
} from "../../domain/types";
import type { ScheduleClient } from "./schedule-client";

export abstract class AbstractScheduleClient<SY, S, SU>
  implements ScheduleClient
{
  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    const scheduleYears = await this.getScheduleYearsRemote(tourCode);
    return this.mapScheduleYears(scheduleYears);
  }

  abstract getScheduleYearsRemote(tourCode: TourCode): Promise<SY>;
  abstract mapScheduleYears(scheduleYear: SY): ScheduleYears;

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    const schedule = await this.getScheduleRemote(tourCode, year);
    return this.mapSchedule(schedule);
  }

  abstract getScheduleRemote(tourCode: TourCode, year?: string): Promise<S>;
  abstract mapSchedule(schedule: S): Schedule;

  async getCompleteSchedule(tourCode: TourCode): Promise<Schedule[]> {
    const completeSchedule = await this.getCompleteScheduleRemote(tourCode);
    return this.mapCompleteSchedule(completeSchedule);
  }

  abstract getCompleteScheduleRemote(tourCode: TourCode): Promise<S[]>;
  abstract mapCompleteSchedule(completeSchedule: S[]): Schedule[];

  async getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    const upcomingSchedule = await this.getUpcomingScheduleRemote(tourCode);
    return this.mapUpcomingSchedule(upcomingSchedule);
  }

  abstract getUpcomingScheduleRemote(tourCode: TourCode): Promise<SU>;
  abstract mapUpcomingSchedule(upcomingSchedule: SU): ScheduleUpcoming;
}
