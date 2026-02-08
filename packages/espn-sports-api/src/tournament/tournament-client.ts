import { resolve } from "@putting-pals/iso-countries";
import {
  NotFoundError,
  NotImplementedError,
  type TourCode,
  type Tournament,
  type TournamentClient,
} from "@putting-pals/putting-pals-core";
import { ApiScheduleSchema } from "../schedule/domain/schemas";
import type { ApiEvent } from "../schedule/domain/types";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { ApiTournamentSeasonSchema } from "./domain/schemas";

export class EspnSportsApiTournamentClient implements TournamentClient {
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

    const scheduleResponse = await fetch(
      `https://www.espn.com/golf/schedule/_/tour/${apiTourCode}/season/${season}?_xhr=pageContent`,
    );
    const scheduleData = await scheduleResponse.json();
    const schedule = ApiScheduleSchema.parse(scheduleData);
    const tournament = schedule.events.find((e) => e.link.endsWith(id));
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
    return {
      __typename: "Tournament",
      id: id,
      name: tournament.name,
      images: {
        logo: `https://www.europeantour.com/Images/Flags/${location.countryCode}_64x64_2x.png`,
        cover: `https://www.europeantour.com/Images/Flags/${location.countryCode}_64x64_2x.png`,
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
        tournamentStatus: "COMPLETED",
      },
    };
  }

  getTournaments(_ids: string[]): Promise<Tournament[]> {
    throw new NotImplementedError();
  }
}

function getTournamentLocation(tournament: ApiEvent): Tournament["location"] {
  const venue = tournament.locations[0]?.venue;
  const [_courseName, location] = (venue?.fullName ?? "")
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
