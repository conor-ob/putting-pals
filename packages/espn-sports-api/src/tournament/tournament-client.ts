import { resolve } from "@putting-pals/iso-countries";
import {
  AbstractTournamentClient,
  NotFoundError,
  type TourCode,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import { format, isSameMonth, parseISO } from "date-fns";
import type { EspnSportsApi } from "../api/espn-sports-api";
import type { ApiLeaderboardCompetition } from "../leaderboard/domain/types";
import type { TourScheduleEvent } from "../schedule/domain/types";
import {
  mapRoundStatus,
  mapTournamentStatus,
} from "../utils/tournament-status";
import { resolve as resolveTournamentData } from "./tournament-data-resolver";

type AggregatedTournament = {
  tournament: TourScheduleEvent;
  competition: ApiLeaderboardCompetition;
};

export class EspnSportsApiTournamentClient extends AbstractTournamentClient<AggregatedTournament> {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    super();
    this.espnSportsApi = espnSportsApi;
  }

  override async getTournamentRemote(
    tourCode: TourCode,
    id: string,
  ): Promise<AggregatedTournament> {
    const leaderboard = await this.espnSportsApi.getLeaderboard(tourCode, id);

    const season = leaderboard.events[0]?.season.year;
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

    const competition = leaderboard.events[0]?.competitions.find(
      (c) => c.id === id,
    );
    if (competition === undefined) {
      throw new NotFoundError(`Competition for tournament ${id} not found`);
    }

    return {
      tournament,
      competition,
    };
  }

  override mapTournament(
    aggregatedTournament: AggregatedTournament,
  ): Tournament {
    const { tournament, competition } = aggregatedTournament;
    const location = this.getTournamentLocation(tournament);
    const tournamentData = resolveTournamentData(tournament.id);
    const logo =
      tournamentData?.images?.logo ??
      `https://www.europeantour.com/Images/Flags/${location.countryCode}_64x64_2x.png`;
    const cover =
      tournamentData?.images?.cover ??
      `https://www.europeantour.com/Images/Flags/${location.countryCode}_64x64_2x.png`;

    return {
      __typename: "Tournament",
      id: tournament.id,
      name: tournament.label,
      images: {
        logo: logo,
        cover: cover,
      },
      schedule: {
        status: mapTournamentStatus(tournament.status),
        startDate: tournament.startDate,
        endDate: tournament.endDate,
        displayDate: this.formatDate(tournament.startDate, tournament.endDate),
      },
      location: location,
      courses: [],
      status: mapRoundStatus(competition),
    };
  }

  private getTournamentLocation(
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

  private formatDate(startDateIso: string, endDateIso: string): string {
    const startDate = parseISO(startDateIso);
    const endDate = parseISO(endDateIso);
    if (isSameMonth(startDate, endDate)) {
      return `${format(startDate, "MMM d")} - ${format(endDate, "d, yyyy")}`;
    } else {
      return `${format(startDate, "MMM d")} - ${format(endDate, "MMM d, yyyy")}`;
    }
  }
}
