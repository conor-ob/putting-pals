import type {
  DomainSchedule,
  DomainScheduleUpcoming,
  DomainTourCode,
} from "../generated/graphql";

export interface ScheduleService {
  getSchedule(
    tourCode: DomainTourCode,
    year?: string,
  ): Promise<readonly DomainSchedule[]>;

  getUpcomingSchedule(
    tourCode: DomainTourCode,
  ): Promise<DomainScheduleUpcoming>;
}
