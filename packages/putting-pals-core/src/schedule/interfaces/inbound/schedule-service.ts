import type { TourCode } from "../../../tour/domain/types";
import type { Schedule, ScheduleUpcoming } from "../../domain/types";

export interface ScheduleService {
  getSchedule(tourCode: TourCode, year?: string): Promise<Schedule[]>;
  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming>;
}
