import type {
  Schedule,
  ScheduleUpcoming,
  ScheduleYears,
} from "@putting-pals/putting-pals-api";

export interface ScheduleClient {
  getScheduleYears(): Promise<ScheduleYears>;

  getSchedule(year?: string): Promise<Schedule>;

  getCompleteSchedule(): Promise<readonly Schedule[]>;

  getUpcomingSchedule(): Promise<ScheduleUpcoming>;
}
