import { resolve } from "@putting-pals/iso-countries";
import type { Tournament } from "@putting-pals/putting-pals-core";
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
    schedule: {
      startDate: parseStartDate(tournament),
      endDate: parseEndDate(tournament),
      displayDate: tournament.displayDate,
    },
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
      tournamentStatus: tournament.tournamentStatus,
    },
  } satisfies Tournament;
  return TournamentSchema.parse(transformedTournament);
}

export function parseStartDate(tournament: ApiTournament): string {
  const startDate = tournament.displayDate.replace(/\s+-\s+\d+/, "");
  const parsedStartDate = parse(startDate, "MMM d, yyyy", new Date());
  return formatISO(parsedStartDate);
}

export function parseEndDate(tournament: ApiTournament) {
  const endDate = tournament.displayDate.replace(/\d+\s+-\s+/, "");
  const parsedEndDate = parse(endDate, "MMM d, yyyy", new Date());
  return formatISO(parsedEndDate);
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
