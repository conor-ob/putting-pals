import type {
  CompetitionService,
  DomainScheduleYears,
  DomainTourCode,
  ScheduleClient,
  ScheduleYearsService,
  TournamentService,
} from "@putting-pals/putting-pals-schema";
import { parseISO } from "date-fns";
import { parseStartDate } from "../tournament/tournament-utils";

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

  getScheduleYears(tourCode: DomainTourCode): Promise<DomainScheduleYears> {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsScheduleYears();
      case "R":
        return this.getPgaTourScheduleYears();
      default:
        throw new Error(`Unsupported tour code: ${tourCode}`);
    }
  }

  private async getPuttingPalsScheduleYears() {
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

  private async getPuttingPalsHistoricalSchedule() {
    const competitions = this.competitionService.getCompetitions();
    const tournamentIds = competitions.map(
      (competition) => competition.tournamentId,
    );
    const tournaments =
      await this.tournamentService.getTournaments(tournamentIds);
    return tournaments;
  }

  private async getPgaTourScheduleYears() {
    return this.scheduleClient.getScheduleYears();
  }
}
