import type {
  ScheduleYears,
  TourCode,
  Tournament,
} from "@putting-pals/putting-pals-schema";
import { parseISO } from "date-fns";
import type { CompetitionService } from "../competition/interfaces/inbound/competition-service";
import { UnsupportedTourCodeError } from "../error/service-error";
import type { TournamentService } from "../tournament/interfaces/inbound/tournament-service";
import { parseStartDate } from "../tournament/tournament-utils";
import type { ScheduleYearsService } from "./interfaces/inbound/schedule-years-service";
import type { ScheduleClient } from "./interfaces/outbound/schedule-client";

export class ScheduleYearsServiceImpl implements ScheduleYearsService {
  constructor(
    private readonly scheduleClient: ScheduleClient,
    private readonly competitionService: CompetitionService,
    private readonly tournamentService: TournamentService,
  ) {
    this.scheduleClient = scheduleClient;
    this.competitionService = competitionService;
    this.tournamentService = tournamentService;
  }

  getScheduleYears(tourCode: TourCode): Promise<ScheduleYears> {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsScheduleYears();
      case "R":
      case "S":
      case "H":
      case "Y":
        return this.getPgaTourScheduleYears(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  private async getPuttingPalsScheduleYears(): Promise<ScheduleYears> {
    const [pgaTourScheduleYears, puttingPalsHistoricalSchedule] =
      await Promise.all([
        this.getPgaTourScheduleYears("R"),
        this.getPuttingPalsHistoricalSchedule(),
      ]);
    return {
      ...pgaTourScheduleYears,
      years: pgaTourScheduleYears.years.filter((year) => {
        return puttingPalsHistoricalSchedule.some((tournament) => {
          return (
            parseISO(parseStartDate(tournament)).getFullYear() ===
            Number(year.queryValue)
          );
        });
      }),
    };
  }

  private async getPuttingPalsHistoricalSchedule(): Promise<
    readonly Tournament[]
  > {
    const competitions = this.competitionService.getCompetitions();
    const tournamentIds = competitions.map(
      (competition) => competition.tournamentId,
    );
    const tournaments =
      await this.tournamentService.getTournaments(tournamentIds);
    return tournaments;
  }

  private async getPgaTourScheduleYears(
    tourCode: TourCode,
  ): Promise<ScheduleYears> {
    return this.scheduleClient.getScheduleYears(tourCode);
  }
}
