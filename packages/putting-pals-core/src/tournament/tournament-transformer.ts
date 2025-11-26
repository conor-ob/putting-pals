import type {
  ImageAsset,
  Tournament,
} from "@putting-pals/pga-tour-schema/types";
import type { RecursivePartial } from "../utils/type-utils";

export function transformTournament(tournament: Tournament) {
  return {
    beautyImage: getImageUrl(
      tournament.beautyImageAsset,
      "jpg",
      "ar_0.667,c_crop",
    ),
    displayDate: tournament.displayDate,
    id: tournament.id,
    roundDisplay: tournament.roundDisplay,
    roundStatus: tournament.roundStatus,
    roundStatusColor: tournament.roundStatusColor,
    roundStatusDisplay: tournament.roundStatusDisplay,
    tournamentLogo: tournament.tournamentLogoAsset.map((imageAsset) =>
      getImageUrl(imageAsset, "png"),
    ),
    tournamentName: sanitizeTournamentName(tournament.tournamentName),
    tournamentStatus: tournament.tournamentStatus,
  } satisfies RecursivePartial<Tournament>;
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
