import {
  AbstractScheduleClient,
  type Schedule,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import type {
  ApiSchedule,
  ApiScheduleUpcoming,
  ApiTourCode,
  Sdk,
} from "../generated/graphql";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { transformSchedule } from "./schedule-transformer";

type AggregateSchedule = {
  schedule: ApiSchedule[];
  upcoming: ApiScheduleUpcoming;
};

export class PgaTourApiScheduleClient extends AbstractScheduleClient<AggregateSchedule> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getScheduleRemote(
    tourCode: TourCode,
    year?: string,
  ): Promise<AggregateSchedule> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const [aggregateSchedule, upcomingSchedule] = await Promise.all([
      this.getFullSchedule(apiTourCode, year),
      this.getUpcomingSchedule(apiTourCode),
    ]);
    return {
      schedule: aggregateSchedule,
      upcoming: upcomingSchedule,
    };
  }

  override mapSchedule(aggregateSchedule: AggregateSchedule): Schedule {
    const transformedSchedule = aggregateSchedule.schedule.map((schedule) =>
      transformSchedule(schedule, aggregateSchedule.upcoming.tournaments),
    );

    return {
      completed: transformedSchedule.flatMap((schedule) => schedule.completed),
      upcoming: transformedSchedule.flatMap((schedule) => schedule.upcoming),
    };
  }

  private async getFullSchedule(
    tourCode: ApiTourCode,
    year?: string,
  ): Promise<ApiSchedule[]> {
    if (year === undefined) {
      return this.sdk
        .CompleteSchedule({ tourCode })
        .then((data) => data.completeSchedule);
    }
    const schedule = await this.sdk
      .Schedule({ tourCode, year })
      .then((data) => data.schedule);
    return [schedule];
  }

  private async getUpcomingSchedule(
    tourCode: ApiTourCode,
  ): Promise<ApiScheduleUpcoming> {
    return this.sdk
      .UpcomingSchedule({ tourCode })
      .then((data) => data.upcomingSchedule);
  }
}
