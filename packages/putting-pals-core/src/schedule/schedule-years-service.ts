import { ScheduleClient } from "@putting-pals/pga-tour-api/schedule";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { parseISO } from "date-fns";
import { CompetitionService } from "../competition/competition-service";
import { TournamentService } from "../tournament/tournament-service";
import { assertNever } from "../utils/type-utils";
import { transformScheduleYears } from "./schedule-years-transformer";

export class ScheduleYearsService {
  getScheduleYears(tourCode: TourCode) {
    switch (tourCode) {
      case "P":
        return this.getPuttingPalsScheduleYears();
      case "R":
        return this.getPgaTourScheduleYears();
      default:
        assertNever(tourCode);
    }
  }

  private async getPuttingPalsScheduleYears() {
    const [pgaTourScheduleYears, puttingPalsHistoricalSchedule] =
      await Promise.all([
        this.getPgaTourScheduleYears(),
        this.getPuttingPalsHistoricalSchedule(),
      ]);
    return pgaTourScheduleYears.filter((year) =>
      puttingPalsHistoricalSchedule.some(
        (schedule) =>
          parseISO(schedule.startDate).getFullYear() ===
          Number(year.queryValue),
      ),
    );
  }

  private async getPuttingPalsHistoricalSchedule() {
    const competitions = new CompetitionService().getCompetitions();
    const tournamentIds = competitions.map(
      (competition) => competition.tournamentId,
    );
    const tournaments = await new TournamentService().getTournaments(
      tournamentIds,
    );
    return tournaments;
  }

  private async getPgaTourScheduleYears() {
    const scheduleYears = await new ScheduleClient().getScheduleYears();
    return transformScheduleYears(scheduleYears);
  }
}
