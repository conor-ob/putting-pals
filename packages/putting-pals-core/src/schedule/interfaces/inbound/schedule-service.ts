import type {
  Schedule,
  ScheduleUpcoming,
  TourCode,
} from "@putting-pals/putting-pals-schema";

export interface ScheduleService {
  getSchedule(tourCode: TourCode, year?: string): Promise<readonly Schedule[]>;
  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming>;
}
