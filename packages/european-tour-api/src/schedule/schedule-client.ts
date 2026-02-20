import {
  AbstractScheduleClient,
  NotFoundError,
  type Schedule,
  type TourCode,
  type Tournament,
} from "@putting-pals/putting-pals-core";
import * as cheerio from "cheerio";
import type { EuropeanTourApi } from "../api/european-tour-api";
import { EuropeanTourScheduleSchema } from "./domain/schemas";
import type {
  EuropeanTourSchedule,
  EuropeanTourTournament,
} from "./domain/types";

type EnrichedTournament = {
  tournament: EuropeanTourTournament;
  tournamentInfo?: string;
  tournamentStatus?: string;
};

export class EuropeanTourApiScheduleClient extends AbstractScheduleClient<
  EnrichedTournament[]
> {
  constructor(private readonly europeanTourApi: EuropeanTourApi) {
    super();
    this.europeanTourApi = europeanTourApi;
  }

  override async getScheduleRemote(
    tourCode: TourCode,
    year?: string,
  ): Promise<EnrichedTournament[]> {
    const response = await fetch(
      `https://www.europeantour.com/dpworld-tour/schedule${year ? `/${year}` : ""}`,
      {
        method: "GET",
      },
    );
    const text = await response.text();
    const $ = cheerio.load(text);
    const scripts = $('script[type="application/ld+json"]');

    for (const script of scripts.toArray()) {
      const html = $(script).html();
      if (html === null) {
        continue;
      }

      const result = EuropeanTourScheduleSchema.safeParse(JSON.parse(html));

      if (result.success) {
        return this.enrichSchedule(result.data);
      }
    }

    throw new NotFoundError("Schedule not found");
  }

  private async enrichSchedule(
    schedule: EuropeanTourSchedule,
  ): Promise<EnrichedTournament[]> {
    const tournaments = schedule.subEvent;
    const enrichedTournaments = tournaments.map((tournament) => {
      return {
        tournament,
        tournamentInfo: undefined,
        tournamentStatus: undefined,
      };
    });

    // while (
    //   enrichedTournaments.some(
    //     (tournament) =>
    //       tournament.tournamentInfo === undefined ||
    //       tournament.tournamentStatus === undefined,
    //   )
    // ) {}
    const BATCH_SIZE = 25;
    const LIMIT = 150;
    for (let batchStart = 100; batchStart < LIMIT; batchStart += BATCH_SIZE) {
      const batchEnd = Math.min(batchStart + BATCH_SIZE, LIMIT);
      const results = await Promise.all(
        Array.from({ length: batchEnd - batchStart }, async (_, j) => {
          const eventId = batchStart + j;
          const [libraryData, statusData] = await Promise.all([
            fetch(
              `https://www.europeantour.com/library/events/2026${eventId}/favourite`,
              { method: "GET" },
            ).then((r) => r.json()),
            fetch(
              `https://www.europeantour.com/api/sportdata/Event/Status/2026${eventId}`,
              { method: "GET" },
            ).then((r_1) => r_1.json()),
          ]);
          return {
            eventId,
            libraryData,
            statusData,
          };
        }),
      );

      const aggregated = this.aggregate(enrichedTournaments, results);
      if (
        !aggregated.some(
          (tournament) =>
            tournament.tournamentInfo === undefined ||
            tournament.tournamentStatus === undefined,
        )
      ) {
        return aggregated;
      }
    }

    return enrichedTournaments;
  }

  private aggregate(
    enrichedTournaments: EnrichedTournament[],
    results: { eventId: number; libraryData: any; statusData: any }[],
  ): EnrichedTournament[] {
    return [];
  }

  private async fetchTournamentData(): Promise<void> {
    const BATCH_SIZE = 25;
    const start = new Date().getTime();
    for (let start = 100; start < 150; start += BATCH_SIZE) {
      const end = Math.min(start + BATCH_SIZE, 150);
      const results = await Promise.all(
        Array.from({ length: end - start }, (_, j) => {
          const i = start + j;
          return fetch(
            `https://www.europeantour.com/library/events/2026${i}/favourite`,
            { method: "GET" },
          ).then(async (response) => ({ i, data: await response.json() }));
        }),
      );
      for (const { i, data } of results) {
        console.log("response", i, data);
      }
    }
    const end = new Date().getTime();
    console.log(`Fetched tournaments in ${end - start}ms`);
  }

  override mapSchedule(schedule: EnrichedTournament[]): Schedule {
    const tournaments = schedule.map((tournament) => {
      const event = tournament.tournament;
      return {
        __typename: "Tournament",
        id: event.name,
        name: event.name,
        images: {
          logo: "",
          cover: "",
        },
        schedule: {
          status: "COMPLETED",
          startDate: event.StartDate,
          endDate: event.EndDate,
          displayDate: event.StartDate,
        },
        location: {
          __typename: "Country",
          city: "",
          country: "",
          countryCode: "",
          displayLocation: "",
        },
        courses: [],
        status: {
          roundDisplay: "",
          roundStatus: "OFFICIAL",
          roundStatusColor: "GREEN",
          roundStatusDisplay: "",
        },
      } satisfies Tournament;
    });
    return {
      completed: tournaments.filter(
        (tournament) => new Date(tournament.schedule.startDate) < new Date(),
      ),
      upcoming: tournaments.filter(
        (tournament) => new Date(tournament.schedule.startDate) >= new Date(),
      ),
    };
  }
}
