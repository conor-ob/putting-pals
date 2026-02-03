import type {
  ScheduleYears,
  TourCode,
} from "@putting-pals/putting-pals-schema";

export interface ScheduleYearsService {
  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears>;
}
