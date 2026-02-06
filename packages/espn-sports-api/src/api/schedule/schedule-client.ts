import {
  NotImplementedError,
  type Schedule,
  type ScheduleClient,
  type ScheduleUpcoming,
  type ScheduleYears,
  type TourCode,
} from "@putting-pals/putting-pals-core";

export class EspnSportsApiScheduleClient implements ScheduleClient {
  getScheduleYears(_tourCode: TourCode): Promise<ScheduleYears> {
    throw new NotImplementedError();
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
