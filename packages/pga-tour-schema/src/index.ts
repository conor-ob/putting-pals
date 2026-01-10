import {
  type ApiScheduleMonthFieldsFragment,
  type ApiScheduleTournamentFieldsFragment,
  getSdk,
  type Sdk,
} from "./generated/graphql";

export type { Sdk };

export type ApiLeaderboardV3 = Awaited<
  ReturnType<Sdk["LeaderboardV3"]>
>["leaderboardV3"];

export type ApiLeaderboardHoleByHole = NonNullable<
  Awaited<ReturnType<Sdk["LeaderboardHoleByHole"]>>["leaderboardHoleByHole"]
>;

export type ApiSchedule = Awaited<ReturnType<Sdk["Schedule"]>>["schedule"];

export type ApiScheduleYears = Awaited<
  ReturnType<Sdk["ScheduleYears"]>
>["scheduleYears"];

export type ApiCompleteSchedule = Awaited<
  ReturnType<Sdk["CompleteSchedule"]>
>["completeSchedule"];

export type ApiUpcomingSchedule = Awaited<
  ReturnType<Sdk["UpcomingSchedule"]>
>["upcomingSchedule"];

export type ApiScheduleMonth = ApiScheduleMonthFieldsFragment;

export type ApiScheduleTournament = ApiScheduleTournamentFieldsFragment;

export type ApiTournament = Awaited<
  ReturnType<Sdk["Tournaments"]>
>["tournaments"][number];

export { getSdk };
