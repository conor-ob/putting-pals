import type {
  DomainSchedule,
  DomainScheduleUpcoming,
  DomainScheduleYears,
} from "../generated/graphql";

export interface ScheduleClient {
  getScheduleYears(): Promise<DomainScheduleYears>;

  getSchedule(year?: string): Promise<DomainSchedule>;

  getCompleteSchedule(): Promise<readonly DomainSchedule[]>;

  getUpcomingSchedule(): Promise<DomainScheduleUpcoming>;
}
