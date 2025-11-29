import type {
  Schedule,
  ScheduleMonth,
  ScheduleTournament,
} from "@putting-pals/pga-tour-schema/types";
import { getImageUrl } from "../utils/image-utils";
import { stripParenthesizedYear } from "../utils/string-utils";
import type { RecursivePartial } from "../utils/type-utils";

export function transformSchedule(schedule: Schedule) {
  return {
    year: schedule.seasonYear,
    yearSort: Number(schedule.seasonYear),
    completed: schedule.completed.map(transformScheduleMonth),
    upcoming: schedule.upcoming.map(transformScheduleMonth),
  } satisfies RecursivePartial<Schedule> & { year: string; yearSort: number };
}

export function transformScheduleTournament(tournament: ScheduleTournament) {
  return {
    beautyImage: tournament.beautyImageAsset
      ? getImageUrl(tournament.beautyImageAsset, "jpg", "ar_0.667,c_crop")
      : undefined,
    date: tournament.date,
    id: tournament.id,
    sortDate: tournament.sortDate,
    status: tournament.status
      ? {
          leaderboardTakeover: tournament.status.leaderboardTakeover, // TODO: remove
          roundDisplay: tournament.status.roundDisplay,
          roundStatus: tournament.status.roundStatus,
          roundStatusColor: tournament.status.roundStatusColor,
          roundStatusDisplay: tournament.status.roundStatusDisplay,
        }
      : undefined,
    tournamentLogo: getImageUrl(tournament.tournamentLogoAsset, "png"),
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
    tournamentStatus: tournament.tournamentStatus,
  } satisfies RecursivePartial<ScheduleTournament>;
}

function transformScheduleMonth(scheduleMonth: ScheduleMonth) {
  return {
    year: scheduleMonth.year,
    month: scheduleMonth.month,
    monthSort: scheduleMonth.monthSort ?? 0, // TODO: add default month sort
    tournaments: scheduleMonth.tournaments.map(transformScheduleTournament),
  };
}
