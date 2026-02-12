import type { TourCode } from "../../../tour/domain/types";
import type { Schedule, ScheduleUpcoming } from "../../domain/types";

export interface ScheduleClient {
  getSchedule(tourCode: TourCode, year?: string): Promise<Schedule>;
  getCompleteSchedule(tourCode: TourCode): Promise<Schedule[]>;
  getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming>;
}
