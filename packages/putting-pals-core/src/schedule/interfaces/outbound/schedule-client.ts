import type { TourCode } from "../../../tour/domain/types";
import type { Schedule } from "../../domain/types";

export interface ScheduleClient {
  getSchedule(tourCode: TourCode, year?: string): Promise<Schedule>;
}
