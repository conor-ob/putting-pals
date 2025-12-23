import { PgaTourWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import type { TourCode } from "@putting-pals/putting-pals-schema/types";
import { assertNever } from "@putting-pals/putting-pals-utils/type-utils";
import { CompetitionService } from "../competition/competition-service";
import { NotFoundError } from "../utils/service-error";
import { TournamentService } from "./tournament-service";

export class TournamentResolver {
  getCurrentTournamentId(tourCode: TourCode) {
    switch (tourCode) {
      case "P":
        return this.getCurrentPuttingPalsTournamentId();
      case "R":
        return this.getCurrentPgaTourTournamentId();
      default:
        assertNever(tourCode);
    }
  }

  private async getCurrentPgaTourTournamentId() {
    const tournamentId = await new PgaTourWebScraper().getCurrentTournamentId();
    if (tournamentId === undefined) {
      throw new NotFoundError("Failed to get current PGA TOUR tournament id");
    }
    return tournamentId;
  }

  private async getCurrentPuttingPalsTournamentId() {
    const competitions = new CompetitionService().getCompetitions();

    const oddsAvailableCompetition = competitions.find(
      (competition) =>
        competition.competitors.length === 0 &&
        competition.paddyPowerId !== undefined,
    );

    if (oddsAvailableCompetition !== undefined) {
      return oddsAvailableCompetition.tournamentId;
    }

    const inProgressCompetition = competitions.find(
      (competition) =>
        competition.competitors.length > 0 &&
        competition.winnerId === undefined &&
        competition.runnerUpId === undefined,
    );

    if (inProgressCompetition !== undefined) {
      return inProgressCompetition.tournamentId;
    }

    const competitionIds = competitions
      .filter((competition) => competition.competitors.length > 0)
      .map((competition) => competition.tournamentId);

    const tournaments = await new TournamentService().getTournaments(
      competitionIds,
    );
    const currentTournament = tournaments.sort((a, b) =>
      b.startDate.localeCompare(a.startDate),
    )[0];

    if (currentTournament === undefined) {
      throw new NotFoundError("No tournament found");
    }

    return currentTournament.id;
  }
}
