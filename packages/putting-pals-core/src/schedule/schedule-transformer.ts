import {
  type ImageAsset,
  RoundStatus,
  RoundStatusColor,
  type Schedule,
  type ScheduleMonth,
} from "@putting-pals/pga-tour-schema/types";
import type { TransformedSchedule } from "./schedule-grouper";

export function transformSchedule(schedule: Schedule) {
  function transformScheduleMonth(scheduleMonth: ScheduleMonth) {
    return {
      month: scheduleMonth.month,
      monthSort: scheduleMonth.monthSort ?? 0, // TODO: add default month sort
      tournaments: scheduleMonth.tournaments.map((tournament) => ({
        beautyImage: tournament.beautyImageAsset
          ? getImageUrl(tournament.beautyImageAsset, "jpg", "ar_0.667,c_crop")
          : "",
        displayDate: tournament.date, // TODO format
        endDate: tournament.date, // TODO format
        id: tournament.id,
        roundDisplay: tournament.status?.roundDisplay ?? "",
        roundStatus: tournament.status?.roundStatus ?? RoundStatus.Upcoming,
        roundStatusColor:
          tournament.status?.roundStatusColor ?? RoundStatusColor.Gray,
        roundStatusDisplay: tournament.status?.roundStatusDisplay ?? "",
        startDate: tournament.date, // TODO format
        tournamentLogo: [getImageUrl(tournament.tournamentLogoAsset, "png")],
        tournamentName: sanitizeTournamentName(tournament.tournamentName),
        tournamentStatus: tournament.tournamentStatus,
      })),
    };
  }

  return {
    year: schedule.seasonYear,
    yearSort: Number(schedule.seasonYear),
    completed: schedule.completed.map(transformScheduleMonth),
    upcoming: schedule.upcoming.map(transformScheduleMonth),
  } satisfies TransformedSchedule[number];
}

function sanitizeTournamentName(tournamentName: string) {
  return tournamentName
    .replace(/\s*\(\d{4}\)\s*/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function getImageUrl(
  imageAsset: ImageAsset,
  imageFormat: "jpg" | "png",
  imageAdjustment?: string,
) {
  return `https://res.cloudinary.com/${imageAsset.imageOrg}/${imageAdjustment ? `${imageAdjustment}/` : ""}d_${imageAsset.fallbackImage}/${imageAsset.imagePath}.${imageFormat}`;
}
