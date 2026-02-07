import {
  NotImplementedError,
  type Schedule,
  type ScheduleClient,
  type ScheduleUpcoming,
  type ScheduleYears,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { ApiScheduleSchema } from "./domain/schemas";

export class EspnSportsApiScheduleClient implements ScheduleClient {
  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const response = await fetch(
      `https://www.espn.com/golf/schedule/_/tour/${apiTourCode}?_xhr=pageContent`,
    );
    const data = await response.json();
    return ApiScheduleSchema.transform((data) => ({
      years: data.dropdowns.seasons.map((season) => ({
        default: season.value === data.dropdowns.currentSeason,
        displayValue: season.label,
        queryValue: season.paramValue.toString(),
      })),
    })).parse(data);
  }

  getSchedule(_tourCode: TourCode, _year?: string): Promise<Schedule> {
    throw new NotImplementedError();
  }

  getCompleteSchedule(_tourCode: TourCode): Promise<Schedule[]> {
    throw new NotImplementedError();
  }

  getUpcomingSchedule(_tourCode: TourCode): Promise<ScheduleUpcoming> {
    throw new NotImplementedError();
  }
}
