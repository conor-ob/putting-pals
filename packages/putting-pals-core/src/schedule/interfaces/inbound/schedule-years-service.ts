import type { TourCode } from "../../../tour/domain/types";
import type { ScheduleYears } from "../../domain/types";

export interface ScheduleYearsService {
  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears>;
}
