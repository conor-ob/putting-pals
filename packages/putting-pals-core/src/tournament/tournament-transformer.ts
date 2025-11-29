import type { Tournament } from "@putting-pals/pga-tour-schema/types";
import { formatISO, parse } from "date-fns";
import { getImageUrl } from "../utils/image-utils";
import { stripParenthesizedYear } from "../utils/string-utils";
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
    startDate: parseStartDate(tournament.displayDate),
    tournamentLogo: tournament.tournamentLogoAsset.map((imageAsset) =>
      getImageUrl(imageAsset, "png"),
    ),
    tournamentName: stripParenthesizedYear(tournament.tournamentName),
    tournamentStatus: tournament.tournamentStatus,
  } satisfies RecursivePartial<
    Tournament & { endDate: string; startDate: string }
  >;
}

export function parseStartDate(displayDate: string) {
  const startDate = displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}
