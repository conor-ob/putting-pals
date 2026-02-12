import { resolve } from "@putting-pals/iso-countries";
import {
  AbstractScheduleClient,
  NotFoundError,
  type Schedule,
  type ScheduleUpcoming,
  type TourCode,
} from "@putting-pals/putting-pals-core";
import { format, parseISO } from "date-fns";
import type { EspnSportsApi } from "../api/espn-sports-api";
import type { TourScheduleEvent, TourScheduleSeason } from "./domain/types";

export class EspnSportsApiScheduleClient extends AbstractScheduleClient<
  TourScheduleSeason,
  TourScheduleSeason
> {
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
      completed: this.groupEventsByMonth(
        season.events?.filter((e) => e.status === "post") ?? [],
      ),
      upcoming: this.groupEventsByMonth(
        season.events?.filter((e) => e.status !== "post") ?? [],
      ),
    };
  }

  override async getCompleteScheduleRemote(
    tourCode: TourCode,
  ): Promise<TourScheduleSeason[]> {
    const schedule = await this.getScheduleRemote(tourCode);
    return [schedule];
  }

  override mapCompleteSchedule(schedule: TourScheduleSeason[]): Schedule[] {
    return schedule.map((season) => this.mapSchedule(season));
  }

  override async getUpcomingScheduleRemote(
    tourCode: TourCode,
  ): Promise<TourScheduleSeason> {
    return this.getScheduleRemote(tourCode);
  }

  override mapUpcomingSchedule(schedule: TourScheduleSeason): ScheduleUpcoming {
    const mappedSchedule = this.mapSchedule(schedule);
    return {
      tournaments: mappedSchedule.upcoming
        .flatMap((month) => month.tournaments)
        .slice(0, 3),
    };
  }

  private groupEventsByMonth(events: TourScheduleEvent[]) {
    const monthMap = new Map<
      string,
      { events: TourScheduleEvent[]; date: Date }
    >();

    for (const event of events) {
      const date = parseISO(event.startDate);
      const monthKey = format(date, "yyyyMM");

      const existing = monthMap.get(monthKey);
      if (existing) {
        existing.events.push(event);
      } else {
        monthMap.set(monthKey, { events: [event], date });
      }
    }

    return Array.from(monthMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([monthKey, { events, date }]) => ({
        __typename: "ScheduleMonth" as const,
        month: format(date, "MMMM"),
        monthSort: Number.parseInt(monthKey, 10),
        year: format(date, "yyyy"),
        tournaments: events.map((event) => {
          const venue = event.locations?.[0];
          const [courseName, location] = (venue ?? "")
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
          } else {
            const country = resolve(stateOrCountry ?? "");
            if (
              country?.__typename === "Country" ||
              country?.__typename === "Subdivision"
            ) {
              countryCode = country.ioc ?? "";
              countryName = country.name;
            }
          }
          return {
            __typename: "ScheduleTournament" as const,
            champion: "",
            championId: "",
            champions: [],
            city: city ?? "",
            country: countryName,
            countryCode: countryCode,
            courseName: courseName ?? "",
            date: event.startDate,
            dateAccessibilityText: "",
            display: "SHOW" as const,
            id: event.link.substring(event.link.lastIndexOf("=") + 1),
            sequenceNumber: 0,
            startDate: 0,
            state: stateName,
            stateCode: stateCode,
            ticketsEnabled: false,
            tournamentLogo: "",
            tournamentLogoAsset: {
              __typename: "ImageAsset" as const,
              imageOrg: "",
              imagePath: "",
              assetType: "",
              deliveryType: "",
            },
            tournamentName: event.label,
            tournamentStatus: "NOT_STARTED" as const,
            useTournamentSiteURL: false,
          };
        }),
      }));
  }
}
