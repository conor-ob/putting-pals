import type { TourCode } from "../../../tour/domain/types";
import type {
  Schedule,
  ScheduleUpcoming,
  ScheduleYears,
} from "../../domain/types";

export interface ScheduleClient {
  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears>;
  getSchedule(tourCode: TourCode, year?: string): Promise<Schedule>;
  getCompleteSchedule(tourCode: TourCode): Promise<readonly Schedule[]>;
  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming>;
}
