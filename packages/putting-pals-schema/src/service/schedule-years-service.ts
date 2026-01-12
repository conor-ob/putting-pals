import type { ScheduleYears, TourCode } from "@putting-pals/putting-pals-api";

export interface ScheduleYearsService {
  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears>;
}
