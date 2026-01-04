import type {
  CompleteScheduleQuery,
  LeaderboardHoleByHoleQuery,
  LeaderboardV3Query,
  ScheduleQuery,
  ScheduleYearsQuery,
  TournamentsQuery,
  UpcomingScheduleQuery,
} from "./generated/graphql";

export * from "./generated/graphql";

export type ApiLeaderboard = NonNullable<LeaderboardV3Query["leaderboardV3"]>;

export type ApiLeaderboardHoleByHole = NonNullable<
  LeaderboardHoleByHoleQuery["leaderboardHoleByHole"]
>;

export type ApiSchedule = NonNullable<ScheduleQuery["schedule"]>;

export type ApiScheduleYears = NonNullable<ScheduleYearsQuery["scheduleYears"]>;

export type ApiCompleteSchedule = NonNullable<
  CompleteScheduleQuery["completeSchedule"]
>;

export type ApiUpcomingSchedule = NonNullable<
  UpcomingScheduleQuery["upcomingSchedule"]
>;

export type ApiTournament = NonNullable<
  TournamentsQuery["tournaments"]
>[number];
