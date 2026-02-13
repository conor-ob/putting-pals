import { resolve } from "@putting-pals/iso-countries";
import {
  AbstractScheduleClient,
  NotFoundError,
  type Schedule,
  type TourCode,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import { format, isSameMonth, parseISO } from "date-fns";
import type { EspnSportsApi } from "../api/espn-sports-api";
import { mapTournamentStatus } from "../utils/tournament-status";
import type { TourScheduleEvent, TourScheduleSeason } from "./domain/types";

export class EspnSportsApiScheduleClient extends AbstractScheduleClient<TourScheduleSeason> {
  constructor(private readonly espnSportsApi: EspnSportsApi) {
    super();
    this.espnSportsApi = espnSportsApi;
  }

  override async getScheduleRemote(
    tourCode: TourCode,
    year?: string,
  ): Promise<TourScheduleSeason> {
    const tourSchedule = await this.espnSportsApi.getTourSchedule(
      tourCode,
      year ? Number(year) : undefined,
    );

    const season = tourSchedule.seasons.find(
      (s) => s.year === (year ? Number(year) : tourSchedule.currentSeason),
    );
    if (season === undefined) {
      throw new NotFoundError(`Season ${year} not found`);
    }
    return season;
  }

  override mapSchedule(season: TourScheduleSeason): Schedule {
    return {
      completed: (season.events?.filter((e) => e.status === "post") ?? []).map(
        (e) => this.mapEventToTournament(e),
      ),
      upcoming: (season.events?.filter((e) => e.status !== "post") ?? []).map(
        (e) => this.mapEventToTournament(e),
      ),
    };
  }

  private mapEventToTournament(event: TourScheduleEvent): Tournament {
    const venue = event.locations?.[0];
    const [courseName, _location] = (venue ?? "")
      .split("-")
      .map((s) => s.trim());
    return {
      __typename: "Tournament" as const,
      id: event.id,
      name: event.label,
      images: {
        logo: "",
        cover: "",
      },
      schedule: {
        status: mapTournamentStatus(event.status),
        startDate: event.startDate,
        endDate: event.endDate,
        displayDate: this.formatDate(event.startDate, event.endDate),
      },
      location: this.getTournamentLocation(event),
      courses: [
        {
          __typename: "Course" as const,
          id: event.id,
          name: courseName ?? "",
        },
      ],
      status: {
        roundDisplay: "Official",
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
      },
    };
  }
  // champion: "",
  // championId: "",
  // champions: [],
  // city: city ?? "",
  // country: countryName,
  // countryCode: countryCode,
  // courseName: courseName ?? "",
  // date: event.startDate,
  // dateAccessibilityText: "",
  // display: "SHOW" as const,
  // id: event.link.substring(event.link.lastIndexOf("=") + 1),
  // sequenceNumber: 0,
  // startDate: 0,
  // state: stateName,
  // stateCode: stateCode,
  // ticketsEnabled: false,
  // tournamentLogo: "",
  // tournamentLogoAsset: {
  //   __typename: "ImageAsset" as const,
  //   imageOrg: "",
  //   imagePath: "",
  //   assetType: "",
  //   deliveryType: "",
  // },
  // tournamentName: event.label,
  // tournamentStatus: "NOT_STARTED" as const,
  // useTournamentSiteURL: false,

  private getTournamentLocation(
    event: TourScheduleEvent,
  ): Tournament["location"] {
    const venue = event.locations?.[0];
    const [_courseName, location] = (venue ?? "")
      .split("-")
      .map((s) => s.trim());
    const [city, stateOrCountry] = (location ?? "")
      .split(",")
      .map((s) => s.trim());
    const state = resolve(stateOrCountry ? `US-${stateOrCountry}` : "");
    let countryCode = "";
    let countryName = "";
    let stateCode = "";
    let stateName = "";
    if (state?.__typename === "State") {
      stateCode = state.iso2.replace("US-", "");
      stateName = state.name;
      const parent = resolve(state.parent);
      if (parent?.__typename === "Country") {
        countryCode = parent.ioc ?? "";
        countryName = parent.name;
      }
      return {
        __typename: "State",
        city: city ?? "",
        state: stateName,
        stateCode: stateCode,
        country: countryName,
        countryCode: countryCode,
        displayLocation: `${city}, ${stateName} • ${countryCode}`,
      };
    } else {
      const country = resolve(stateOrCountry ?? "");
      if (
        country?.__typename === "Country" ||
        country?.__typename === "Subdivision"
      ) {
        countryCode = country.ioc ?? "";
        countryName = country.name;
      }
      return {
        __typename: "Country",
        city: city ?? "",
        country: countryName,
        countryCode: countryCode,
        displayLocation: `${city} • ${countryName}`,
      };
    }
  }

  private formatDate(startDateIso: string, endDateIso: string): string {
    const startDate = parseISO(startDateIso);
    const endDate = parseISO(endDateIso);
    if (isSameMonth(startDate, endDate)) {
      return `${format(startDate, "MMM d")} - ${format(endDate, "d")}`;
    } else {
      return `${format(startDate, "MMM d")} - ${format(endDate, "MMM d")}`;
    }
  }
}
