import type { TourCode } from "../../../tour/domain/types";
import type { Schedule } from "../../domain/types";

export interface ScheduleService {
  getSchedule(tourCode: TourCode, year?: string): Promise<Schedule[]>;
}
