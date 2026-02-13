import { resolve } from "@putting-pals/iso-countries";
import type {
  Tournament,
  TournamentStatus,
} from "@putting-pals/putting-pals-core";
import { NotFoundError } from "@putting-pals/putting-pals-core";
import { formatISO, parse } from "date-fns";
import { TournamentSchema } from "../../../putting-pals-core/src/tournament/domain/schemas";
import type { ApiTournament } from "../generated/graphql";
import { getImageUrl } from "../utils/image-utils";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformTournament(tournament: ApiTournament): Tournament {
  const transformedTournament = {
    ...tournament,
    name: stripParenthesizedYear(tournament.tournamentName),
    images: {
      // biome-ignore lint/style/noNonNullAssertion: should always be defined
      logo: getImageUrl(tournament.tournamentLogoAsset[0]!, "png"),
      cover: getImageUrl(tournament.beautyImageAsset, "png"),
    },
    schedule: parseDate(tournament.tournamentStatus, tournament.displayDate),
    location: getTournamentLocation(tournament),
    courses: tournament.courses.map((course) => ({
      __typename: "Course",
      id: course.id,
      name: course.courseName,
    })),
    status: {
      roundDisplay: tournament.roundDisplay,
      roundStatus: tournament.roundStatus,
      roundStatusColor: tournament.roundStatusColor,
      roundStatusDisplay: tournament.roundStatusDisplay,
    },
  } satisfies Tournament;
  return TournamentSchema.parse(transformedTournament);
}

/**
 * Parses display date strings in two formats:
 * - "Jan 29 - Feb 1, 2026" (different months: end date includes month)
 * - "Jan 29 - 30, 2026" (same month: end date is day and year only)
 */
export function parseDate(
  tournamentStatus: TournamentStatus,
  displayDate: string,
): {
  status: TournamentStatus;
  startDate: string;
  endDate: string;
  displayDate: string;
} {
  const parts = displayDate.split(" - ");
  const startPart = parts[0]?.trim();
  const endPart = parts[1]?.trim();
  if (!startPart || !endPart) {
    return {
      status: tournamentStatus,
      startDate: "",
      endDate: "",
      displayDate,
    };
  }
  const yearMatch = displayDate.match(/,\s*(\d{4})\s*$/);
  const year = yearMatch ? yearMatch[1] : String(new Date().getFullYear());

  const startDateStr = `${startPart}, ${year}`;

  // End part has month (e.g. "Feb 1, 2026") or same-month day only (e.g. "30, 2026")
  const endHasMonth = /^[A-Za-z]{3}\s+\d+/.test(endPart);
  const endDateStr = endHasMonth
    ? endPart
    : `${startPart.replace(/\s*\d+\s*$/, "").trim()} ${endPart}`;

  const parsedStart = parse(startDateStr, "MMM d, yyyy", new Date());
  const parsedEnd = parse(endDateStr, "MMM d, yyyy", new Date());
  return {
    status: tournamentStatus,
    startDate: formatISO(parsedStart),
    endDate: formatISO(parsedEnd),
    displayDate,
  };
}

export function parseStartDate(tournament: ApiTournament): string {
  return parseDate(tournament.tournamentStatus, tournament.displayDate)
    .startDate;
}

export function parseEndDate(tournament: ApiTournament): string {
  return parseDate(tournament.tournamentStatus, tournament.displayDate).endDate;
}

function getTournamentLocation(
  tournament: ApiTournament,
): Tournament["location"] {
  const state = resolve(tournament.state);
  if (state !== null && state.__typename === "State") {
    const parent = resolve(state.parent);
    if (parent === null || parent.__typename !== "Country") {
      throw new NotFoundError(`Country for state ${state.name} not found`);
    }
    return {
      __typename: "State",
      city: tournament.city,
      state: state.name,
      stateCode: state.iso2.replace("US-", ""),
      country: parent.name,
      countryCode: parent.ioc ?? parent.iso3,
      displayLocation: `${tournament.city}, ${state.name} • ${parent.iso3}`,
    };
  }

  const country = resolve(tournament.country);
  if (country === null || country.__typename === "State") {
    throw new NotFoundError(`Country ${tournament.country} not found`);
  }
  return {
    __typename: "Country",
    city: tournament.city,
    country: country.name,
    countryCode: country.ioc ?? country.iso3,
    displayLocation: `${tournament.city} • ${country.name}`,
  };
}
