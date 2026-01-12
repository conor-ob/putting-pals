import type {
  CompetitionService,
  ScheduleClient,
  ScheduleYears,
  ScheduleYearsService,
  TourCode,
  Tournament,
  TournamentService,
} from "@putting-pals/putting-pals-api";
import { parseISO } from "date-fns";
import { parseStartDate } from "../tournament/tournament-utils";
import { UnsupportedTourCodeError } from "../utils/service-error";

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
        return this.getPgaTourScheduleYears();
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  private async getPuttingPalsScheduleYears(): Promise<ScheduleYears> {
    const [pgaTourScheduleYears, puttingPalsHistoricalSchedule] =
      await Promise.all([
        this.getPgaTourScheduleYears(),
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

  private async getPgaTourScheduleYears(): Promise<ScheduleYears> {
    return this.scheduleClient.getScheduleYears();
  }
}
