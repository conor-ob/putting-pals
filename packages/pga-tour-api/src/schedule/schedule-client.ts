import {
  AbstractScheduleClient,
  type Schedule,
  type ScheduleUpcoming,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import type {
  ApiSchedule,
  ApiScheduleUpcoming,
  Sdk,
} from "../generated/graphql";
import { mapDomainToApiTourCode } from "../utils/tour-code";

export class PgaTourApiScheduleClient extends AbstractScheduleClient<
  ApiSchedule,
  ApiScheduleUpcoming
> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getScheduleRemote(
    tourCode: TourCode,
    year?: string,
  ): Promise<ApiSchedule> {
    return this.sdk.Schedule({ tourCode, year }).then((data) => data.schedule);
  }

  override mapSchedule(schedule: ApiSchedule): Schedule {
    return schedule;
  }

  override async getCompleteScheduleRemote(
    tourCode: TourCode,
  ): Promise<ApiSchedule[]> {
    return this.sdk
      .CompleteSchedule({ tourCode: mapDomainToApiTourCode(tourCode) })
      .then((data) => data.completeSchedule);
  }

  override mapCompleteSchedule(completeSchedule: ApiSchedule[]): Schedule[] {
    return completeSchedule;
  }

  override async getUpcomingScheduleRemote(
    tourCode: TourCode,
  ): Promise<ApiScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode })
      .then((data) => data.upcomingSchedule);
  }

  override mapUpcomingSchedule(
    upcomingSchedule: ApiScheduleUpcoming,
  ): ScheduleUpcoming {
    return upcomingSchedule;
  }
}
