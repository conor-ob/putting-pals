import { resolve } from "@putting-pals/iso-countries";
import type {
  Schedule,
  ScheduleClient,
  ScheduleUpcoming,
  ScheduleYears,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { format, parseISO } from "date-fns";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { ApiScheduleSchema, ApiScheduleYearsSchema } from "./domain/schemas";
import type { ApiEvent } from "./domain/types";

export class EspnSportsApiScheduleClient implements ScheduleClient {
  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const response = await fetch(
      `https://www.espn.com/golf/schedule/_/tour/${apiTourCode}?_xhr=pageContent`,
    );
    const data = await response.json();
    return ApiScheduleYearsSchema.transform((data) => ({
      years: data.dropdowns.seasons.map((season) => ({
        default: season.value === data.dropdowns.currentSeason,
        displayValue: season.label,
        queryValue: season.paramValue.toString(),
      })),
    })).parse(data);
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const seasonParam = year ? `season/${year}` : "";
    const response = await fetch(
      `https://www.espn.com/golf/schedule/_/tour/${apiTourCode}/${seasonParam}?_xhr=pageContent`,
    );
    const data = await response.json();
    return ApiScheduleSchema.transform((data) => ({
      completed: groupEventsByMonth(
        data.events.filter((e) => e.status === "post"),
      ),
      upcoming: groupEventsByMonth(
        data.events.filter((e) => e.status !== "post"),
      ),
    })).parse(data);
  }

  async getCompleteSchedule(tourCode: TourCode): Promise<Schedule[]> {
    const schedule = await this.getSchedule(tourCode);
    return [schedule];
  }

  async getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    const schedule = await this.getSchedule(tourCode);
    return {
      tournaments: schedule.upcoming
        .flatMap((month) => month.tournaments)
        .slice(0, 3),
    };
  }
}

function groupEventsByMonth(events: ApiEvent[]) {
  const monthMap = new Map<string, { events: ApiEvent[]; date: Date }>();

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
        const venue = event.locations[0]?.venue;
        const [courseName, location] = (venue?.fullName ?? "")
          .split("-")
          .map((s) => s.trim());
        const [city, stateOrCountry] = (location ?? "")
          .split(",")
          .map((s) => s.trim());
        const state = resolve(stateOrCountry ? `US-${stateOrCountry}` : "");
        let stateCode = "";
        let stateName = "";
        if (state?.__typename === "State") {
          stateCode = state.alpha2;
          stateName = state.name;
        }
        const country = resolve(stateOrCountry ?? "");
        let countryCode = "";
        let countryName = "";
        if (
          country?.__typename === "Country" ||
          country?.__typename === "Subdivision"
        ) {
          countryCode = country.ioc ?? "";
          countryName = country.name;
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
          tournamentName: event.name,
          tournamentStatus: "NOT_STARTED" as const,
          useTournamentSiteURL: false,
        };
      }),
    }));
}
