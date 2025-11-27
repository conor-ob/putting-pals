import type {
  ImageAsset,
  Tournament,
} from "@putting-pals/pga-tour-schema/types";
import { formatISO, parse } from "date-fns";
import type { RecursivePartial } from "../utils/type-utils";

export function transformTournament(tournament: Tournament) {
  return {
    beautyImage: getImageUrl(
      tournament.beautyImageAsset,
      "jpg",
      "ar_0.667,c_crop",
    ),
    displayDate: tournament.displayDate,
    endDate: parseEndDate(tournament.displayDate),
    id: tournament.id,
    roundDisplay: tournament.roundDisplay,
    roundStatus: tournament.roundStatus,
    roundStatusColor: tournament.roundStatusColor,
    roundStatusDisplay: tournament.roundStatusDisplay,
    startDate: parseStartDate(tournament.displayDate),
    tournamentLogo: tournament.tournamentLogoAsset.map((imageAsset) =>
      getImageUrl(imageAsset, "png"),
    ),
    tournamentName: sanitizeTournamentName(tournament.tournamentName),
    tournamentStatus: tournament.tournamentStatus,
  } satisfies RecursivePartial<
    Tournament & { endDate: string; startDate: string }
  >;
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

export function parseEndDate(displayDate: string) {
  const endDate = displayDate.replace(/\d+\s+-\s+/, "");
  const parsedEndDate = parse(endDate, "MMM d, yyyy", new Date());
  return formatISO(parsedEndDate);
}

export function parseStartDate(displayDate: string) {
  const startDate = displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}
