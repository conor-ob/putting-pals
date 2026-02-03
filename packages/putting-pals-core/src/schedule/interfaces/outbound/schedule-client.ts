import type {
  Schedule,
  ScheduleUpcoming,
  ScheduleYears,
  TourCode,
} from "@putting-pals/putting-pals-api";

export interface ScheduleClient {
  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears>;
  getSchedule(tourCode: TourCode, year?: string): Promise<Schedule>;
  getCompleteSchedule(tourCode: TourCode): Promise<readonly Schedule[]>;
  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming>;
}
