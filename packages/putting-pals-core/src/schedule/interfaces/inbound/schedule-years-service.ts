import type {
  ScheduleYears,
  TourCode,
} from "../../../../../putting-pals-schema/src";

export interface ScheduleYearsService {
  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears>;
}
