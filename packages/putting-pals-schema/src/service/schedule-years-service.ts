import type { DomainScheduleYears, DomainTourCode } from "../generated/graphql";

export interface ScheduleYearsService {
  getScheduleYears(tourCode: DomainTourCode): Promise<DomainScheduleYears>;
}
