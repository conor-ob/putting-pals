import type {
  Schedule,
  ScheduleUpcoming,
  TourCode,
} from "../../../../../putting-pals-schema/src";

export interface ScheduleService {
  getSchedule(tourCode: TourCode, year?: string): Promise<readonly Schedule[]>;
  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming>;
}
