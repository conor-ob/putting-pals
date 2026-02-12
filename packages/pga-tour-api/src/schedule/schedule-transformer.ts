import type {
  Schedule,
  ScheduleMonth,
  ScheduleTournament,
} from "@putting-pals/putting-pals-core";
import type {
  ApiSchedule,
  ApiScheduleMonth,
  ApiScheduleTournament,
} from "../generated/graphql";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformSchedule(
  schedule: ApiSchedule,
  upcomingTournaments: ApiScheduleTournament[],
): Schedule {
  return {
    ...schedule,
    completed: schedule.completed.map((scheduleMonth) =>
      transformScheduleMonth(scheduleMonth, upcomingTournaments),
    ),
    upcoming: schedule.upcoming.map((scheduleMonth) =>
      transformScheduleMonth(scheduleMonth, upcomingTournaments),
    ),
  };
}

export function transformScheduleTournament(
  tournament: ApiScheduleTournament,
  upcomingTournaments: ApiScheduleTournament[],
): ScheduleTournament {
  const upcomingTournament = upcomingTournaments.find(
    (upcomingTournament) => upcomingTournament.id === tournament.id,
  );

  if (upcomingTournament !== undefined) {
    return {
      ...tournament,
      status: upcomingTournament.status,
      tournamentName: stripParenthesizedYear(tournament.tournamentName),
    };
  } else {
    return {
      ...tournament,
      tournamentName: stripParenthesizedYear(tournament.tournamentName),
    };
  }
}

function transformScheduleMonth(
  scheduleMonth: ApiScheduleMonth,
  upcomingTournaments: ApiScheduleTournament[],
): ScheduleMonth {
  return {
    ...scheduleMonth,
    monthSort: scheduleMonth.monthSort,
    tournaments: scheduleMonth.tournaments.map((tournament) =>
      transformScheduleTournament(tournament, upcomingTournaments),
    ),
  };
}
