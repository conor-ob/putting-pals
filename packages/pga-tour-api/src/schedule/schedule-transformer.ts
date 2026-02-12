import { resolve } from "@putting-pals/iso-countries";
import {
  NotFoundError,
  type Schedule,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import type { ApiSchedule, ApiScheduleTournament } from "../generated/graphql";
import { getImageUrl } from "../utils/image-utils";
import { stripParenthesizedYear } from "../utils/string-utils";

export function transformSchedule(
  schedule: ApiSchedule,
  upcomingTournaments: ApiScheduleTournament[],
): Schedule {
  return {
    completed: schedule.completed.flatMap((scheduleMonth) =>
      scheduleMonth.tournaments
        .map((tournament) =>
          transformScheduleTournament(tournament, upcomingTournaments),
        )
        .map((tournament) => mapTournament(tournament)),
    ),
    upcoming: schedule.upcoming.flatMap((scheduleMonth) =>
      scheduleMonth.tournaments
        .map((tournament) =>
          transformScheduleTournament(tournament, upcomingTournaments),
        )
        .map((tournament) => mapTournament(tournament)),
    ),
  };
}

function transformScheduleTournament(
  tournament: ApiScheduleTournament,
  upcomingTournaments: ApiScheduleTournament[],
): ApiScheduleTournament {
  const upcomingTournament = upcomingTournaments.find(
    (upcomingTournament) => upcomingTournament.id === tournament.id,
  );

  if (upcomingTournament !== undefined) {
    return {
      ...tournament,
      status: upcomingTournament.status,
      tournamentName: stripParenthesizedYear(tournament.tournamentName),
    };
  } else {
    return {
      ...tournament,
      tournamentName: stripParenthesizedYear(tournament.tournamentName),
    };
  }
}

function mapTournament(tournament: ApiScheduleTournament): Tournament {
  return {
    __typename: "Tournament",
    id: tournament.id,
    name: stripParenthesizedYear(tournament.tournamentName),
    images: {
      logo: getImageUrl(tournament.tournamentLogoAsset, "png"),
      // biome-ignore lint/style/noNonNullAssertion: todo
      cover: getImageUrl(tournament.beautyImageAsset!, "png"),
    },
    schedule: {
      startDate: "",
      endDate: "",
      displayDate: "",
    },
    location: getTournamentLocation(tournament),
    courses: [
      {
        __typename: "Course",
        id: tournament.courseName,
        name: tournament.courseName,
      },
    ],
    status: mapTournamentStatus(tournament),
  };
}

function getTournamentLocation(
  tournament: ApiScheduleTournament,
): Tournament["location"] {
  const state = resolve(
    tournament.state === ""
      ? tournament.stateCode === ""
        ? tournament.state
        : `US-${tournament.stateCode}`
      : tournament.state,
  );
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

  const country = resolve(
    tournament.country === "" ? tournament.countryCode : tournament.country,
  );
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

// TODO status === "UPCOMING" if in future
function mapTournamentStatus(
  tournament: ApiScheduleTournament,
): Tournament["status"] {
  return {
    roundDisplay: tournament.status?.roundDisplay ?? "",
    roundStatus: tournament.status?.roundStatus ?? "OFFICIAL",
    roundStatusColor: tournament.status?.roundStatusColor ?? "GREEN",
    roundStatusDisplay: tournament.status?.roundStatusDisplay ?? "",
    tournamentStatus: tournament.tournamentStatus ?? "COMPLETED",
  };
}
