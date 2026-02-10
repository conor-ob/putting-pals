import { resolve } from "@putting-pals/iso-countries";
import {
  NotFoundError,
  NotImplementedError,
  type TourCode,
  type Tournament,
  type TournamentClient,
  type TournamentStatus,
} from "@putting-pals/putting-pals-core";
import type { EspnSportsApi } from "../api/espn-sports-api";
import type { TourScheduleEvent } from "../schedule/domain/types";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { ApiTournamentSeasonSchema } from "./domain/schemas";
import { resolve as resolveTournamentData } from "./tournament-data-resolver";

export class EspnSportsApiTournamentClient implements TournamentClient {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    this.espnSportsApi = espnSportsApi;
  }

  async getTournament(tourCode: TourCode, id: string): Promise<Tournament> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const tournamentSeasonResponse = await fetch(
      `https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=${apiTourCode}&event=${id}`,
    );
    const tournamentSeasonData = await tournamentSeasonResponse.json();
    const apiTournamentSeason =
      ApiTournamentSeasonSchema.parse(tournamentSeasonData);
    const season = apiTournamentSeason.events[0]?.season.year;
    if (season === undefined) {
      throw new NotFoundError(`Season for tournament ${id} not found`);
    }

    const tourSchedule = await this.espnSportsApi.getTourSchedule(
      tourCode,
      season,
    );
    const tournament = tourSchedule.seasons
      .flatMap((s) => s.events ?? [])
      .find((e) => e.id === id);
    if (tournament === undefined) {
      throw new NotFoundError(`Tournament ${id} not found`);
    }

    // const schedule = await new EspnSportsApiScheduleClient().getSchedule(
    //   tourCode,
    // );
    // const tournaments = [...schedule.completed, ...schedule.upcoming].flatMap(
    //   (month) => month.tournaments,
    // );
    // const tournament = tournaments.find((t) => t.id === id);
    // if (tournament === undefined) {
    //   throw new NotFoundError(`Tournament ${id} not found`);
    // }
    const location = getTournamentLocation(tournament);
    const tournamentData = resolveTournamentData(id);
    const logo =
      tournamentData?.images?.logo ??
      `https://www.europeantour.com/Images/Flags/${location.countryCode}_64x64_2x.png`;
    const cover =
      tournamentData?.images?.cover ??
      `https://www.europeantour.com/Images/Flags/${location.countryCode}_64x64_2x.png`;
    return {
      __typename: "Tournament",
      id: id,
      name: tournament.label,
      images: {
        logo: logo,
        cover: cover,
      },
      schedule: {
        startDate: tournament.startDate,
        endDate: tournament.endDate,
        displayDate: tournament.startDate,
      },
      location: getTournamentLocation(tournament),
      courses: [],
      status: {
        roundDisplay: "Official",
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
        tournamentStatus: mapTournamentStatus(tournament.status),
      },
    };
  }

  getTournaments(_ids: string[]): Promise<Tournament[]> {
    throw new NotImplementedError();
  }
}

function mapTournamentStatus(status: string): TournamentStatus {
  switch (status) {
    case "pre":
      return "NOT_STARTED";
    case "post":
      return "COMPLETED";
    default:
      return "IN_PROGRESS";
  }
}

function getTournamentLocation(
  tournament: TourScheduleEvent,
): Tournament["location"] {
  const locationString = tournament.locations?.[0];
  if (locationString === undefined) {
    return {
      __typename: "Country",
      city: "TBD",
      country: "TBD",
      countryCode: "TBD",
      displayLocation: "TBD",
    };
  }
  const [_courseName, location] = locationString
    .split("-")
    .map((s) => s.trim());
  const [city, stateOrCountry] = (location ?? "")
    .split(",")
    .map((s) => s.trim());
  const state = resolve(stateOrCountry ? `US-${stateOrCountry}` : "");
  if (state !== null && state.__typename === "State") {
    const parent = resolve(state.parent);
    if (parent === null || parent.__typename !== "Country") {
      throw new NotFoundError(`Country for state ${state.name} not found`);
    }
    return {
      __typename: "State",
      city: city ?? "",
      state: state.name,
      stateCode: state.iso2.replace("US-", ""),
      country: parent.name,
      countryCode: parent.ioc ?? parent.iso3,
      displayLocation: `${city}, ${state.name} • ${parent.iso3}`,
    };
  }

  const country = resolve(stateOrCountry ?? "");
  if (country === null || country.__typename === "State") {
    throw new NotFoundError(`Country ${stateOrCountry} not found`);
  }
  return {
    __typename: "Country",
    city: city ?? "",
    country: country.name,
    countryCode: country.ioc ?? country.iso3,
    displayLocation: `${city} • ${country.name}`,
  };
}
