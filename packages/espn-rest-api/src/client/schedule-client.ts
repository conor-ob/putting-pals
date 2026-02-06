import {
  type ScheduleClient,
  UnsupportedTourCodeError,
} from "@putting-pals/putting-pals-core";
import type {
  Schedule,
  ScheduleUpcoming,
  ScheduleYears,
  TourCode,
} from "@putting-pals/putting-pals-schema";
import { format, parseISO } from "date-fns";
import z from "zod";

type EspnEvent = z.infer<typeof EspnEventSchema>;

const EspnEventSchema = z.object({
  name: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  status: z.string(),
  link: z.url(),
  locations: z.array(
    z.object({
      venue: z.object({
        fullName: z.string(),
      }),
    }),
  ),
});

function groupEventsByMonth(events: EspnEvent[]) {
  const monthMap = new Map<string, { events: EspnEvent[]; date: Date }>();

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
        return {
          __typename: "ScheduleTournament" as const,
          champion: "",
          championId: "",
          champions: [],
          city: city ?? "",
          country: stateOrCountry ?? "",
          countryCode: stateOrCountry ?? "",
          courseName: courseName ?? "",
          date: event.startDate,
          dateAccessibilityText: "",
          display: "SHOW" as const,
          id: event.link.substring(event.link.lastIndexOf("=") + 1),
          sequenceNumber: 0,
          startDate: 0,
          state: stateOrCountry ?? "",
          stateCode: stateOrCountry ?? "",
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

// https://site.api.espn.com/apis/site/v2/sports/golf/pga/scoreboard
// https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard
// https://developer.sportradar.com/golf/reference/golf-tournament-schedule
// https://site.api.espn.com/apis/site/v2/sports/golf/pga/news
// https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=pga
// https://site.api.espn.com/apis/site/v2/sports/golf/leaderboard?event=401219795
// https://www.espn.com/golf/schedule/_/tour/pga?_xhr=pageContent&offset=-04%3A00

type EspnRestApiTourCode = "eur" | "liv";

const ScheduleYearsSchema = z
  .object({
    dropdowns: z.object({
      seasons: z.array(
        z.object({
          value: z.number(),
          label: z.string(),
          paramValue: z.number(),
        }),
      ),
      currentSeason: z.number(),
    }),
  })
  .transform((espnData) => ({
    __typename: "ScheduleYears" as const,
    years: espnData.dropdowns.seasons.map((s) => ({
      __typename: "ScheduleYear" as const,
      default: s.value === espnData.dropdowns.currentSeason,
      displayValue: s.label,
      queryValue: s.paramValue.toString(),
    })),
  }));

const ScheduleSchema = z
  .object({
    events: z.array(EspnEventSchema),
    requestedSeason: z.number(),
    tourScheduleName: z.string(),
  })
  .transform((espnData) => ({
    __typename: "Schedule" as const,
    completed: groupEventsByMonth(
      espnData.events.filter((e) => e.status === "post"),
    ),
    upcoming: groupEventsByMonth(
      espnData.events.filter((e) => e.status !== "post"),
    ),
    filters: [],
    seasonYear: espnData.requestedSeason.toString(),
    tour: espnData.tourScheduleName,
  }));

export class EspnRestApiScheduleClient implements ScheduleClient {
  async getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    const response = await fetch(
      `https://www.espn.com/golf/schedule/_/tour/${this.mapTourCode(tourCode)}?_xhr=pageContent`,
    );
    const data = await response.json();
    return ScheduleYearsSchema.parse(data);
  }

  async getSchedule(tourCode: TourCode, year?: string): Promise<Schedule> {
    const seasonParam = year ? `season/${year}` : "";
    const response = await fetch(
      `https://www.espn.com/golf/schedule/_/tour/${this.mapTourCode(tourCode)}/${seasonParam}?_xhr=pageContent`,
    );
    const data = await response.json();
    return ScheduleSchema.parse(data);
  }

  async getCompleteSchedule(tourCode: TourCode): Promise<readonly Schedule[]> {
    return [await this.getSchedule(tourCode)];
  }

  async getUpcomingSchedule(tourCode: TourCode): Promise<ScheduleUpcoming> {
    const schedule = await this.getSchedule(tourCode);
    return {
      __typename: "ScheduleUpcoming" as const,
      filters: [],
      id: `${tourCode}-undefined`,
      tournaments: schedule.upcoming
        .flatMap((month) => month.tournaments)
        .slice(0, 3),
    };
  }

  private mapTourCode(tourCode: TourCode): EspnRestApiTourCode {
    switch (tourCode) {
      case "D":
        return "eur";
      case "L":
        return "liv";
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
