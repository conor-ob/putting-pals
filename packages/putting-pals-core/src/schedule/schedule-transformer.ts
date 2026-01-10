import type {
  DomainSchedule,
  DomainScheduleMonth,
  DomainScheduleTournament,
} from "@putting-pals/putting-pals-schema";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformSchedule(schedule: DomainSchedule): DomainSchedule {
  return {
    ...schedule,
    completed: schedule.completed.map(transformScheduleMonth),
    upcoming: schedule.upcoming.map(transformScheduleMonth),
  };
}

export function transformScheduleTournament(
  tournament: DomainScheduleTournament,
): DomainScheduleTournament {
  return {
    ...tournament,
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
  };
}

function transformScheduleMonth(
  scheduleMonth: DomainScheduleMonth,
): DomainScheduleMonth {
  return {
    ...scheduleMonth,
    monthSort: scheduleMonth.monthSort ?? 0, // TODO: add default month sort
    tournaments: scheduleMonth.tournaments.map(transformScheduleTournament),
  };
}
