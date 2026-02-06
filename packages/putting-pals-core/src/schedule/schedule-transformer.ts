import { stripParenthesizedYear } from "../utils/string-utils";
import type {
  Schedule,
  ScheduleMonth,
  ScheduleTournament,
} from "./domain/types";

export function transformSchedule(schedule: Schedule): Schedule {
  return {
    ...schedule,
    completed: schedule.completed.map(transformScheduleMonth),
    upcoming: schedule.upcoming.map(transformScheduleMonth),
  };
}

export function transformScheduleTournament(
  tournament: ScheduleTournament,
): ScheduleTournament {
  return {
    ...tournament,
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
  };
}

function transformScheduleMonth(scheduleMonth: ScheduleMonth): ScheduleMonth {
  return {
    ...scheduleMonth,
    monthSort: scheduleMonth.monthSort,
    tournaments: scheduleMonth.tournaments.map(transformScheduleTournament),
  };
}
