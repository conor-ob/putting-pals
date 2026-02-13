import {
  AbstractSeasonClient,
  type Season,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import type { ApiScheduleYears, Sdk } from "../generated/graphql";
import { mapDomainToApiTourCode } from "../utils/tour-code";

export class PgaTourApiSeasonClient extends AbstractSeasonClient<ApiScheduleYears> {
  constructor(private readonly sdk: Sdk) {
    super();
    this.sdk = sdk;
  }

  override async getSeasonsRemote(
    tourCode: TourCode,
  ): Promise<ApiScheduleYears> {
    const data = await this.sdk.ScheduleYears({
      tourCode: mapDomainToApiTourCode(tourCode),
    });
    return data.scheduleYears;
  }

  override mapSeasons(scheduleYears: ApiScheduleYears): Season[] {
    return scheduleYears.years.map((year) => ({
      current: year.default,
      displayValue: year.displayValue,
      value: Number(year.queryValue),
    }));
  }
}
