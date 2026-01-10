import type {
  ApiSchedule,
  ApiScheduleMonth,
  ApiScheduleTournament,
} from "@putting-pals/pga-tour-schema";
import { getImageUrl } from "../utils/image-utils";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformSchedule(schedule: ApiSchedule) {
  return {
    year: schedule.seasonYear,
    yearSort: Number(schedule.seasonYear),
    completed: schedule.completed.map(transformScheduleMonth),
    upcoming: schedule.upcoming.map(transformScheduleMonth),
  };
}

export function transformScheduleTournament(tournament: ApiScheduleTournament) {
  return {
    beautyImage: tournament.beautyImageAsset
      ? getImageUrl(tournament.beautyImageAsset, "jpg", "ar_0.667,c_crop")
      : undefined,
    date: tournament.date,
    id: tournament.id,
    sortDate: tournament.sortDate,
    status: tournament.status
      ? {
          roundDisplay: tournament.status.roundDisplay,
          roundStatus: tournament.status.roundStatus,
          roundStatusColor: tournament.status.roundStatusColor,
          roundStatusDisplay: tournament.status.roundStatusDisplay,
        }
      : undefined,
    tournamentLogo: getImageUrl(tournament.tournamentLogoAsset, "png"),
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
    tournamentStatus: tournament.tournamentStatus,
  };
}

function transformScheduleMonth(scheduleMonth: ApiScheduleMonth) {
  return {
    year: scheduleMonth.year,
    month: scheduleMonth.month,
    monthSort: scheduleMonth.monthSort ?? 0, // TODO: add default month sort
    tournaments: scheduleMonth.tournaments.map(transformScheduleTournament),
  };
}
