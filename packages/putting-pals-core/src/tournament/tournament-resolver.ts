import type {
  CompetitionService,
  PgaTourWebScraper,
  TourCode,
  TournamentClient,
  TournamentResolver,
} from "@putting-pals/putting-pals-api";
import {
  NotFoundError,
  UnsupportedTourCodeError,
} from "../utils/service-error";
import { parseStartDate } from "./tournament-utils";

export class TournamentResolverImpl implements TournamentResolver {
  constructor(
    private readonly tournamentClient: TournamentClient,
    private readonly pgaTourWebScraper: PgaTourWebScraper,
    private readonly competitionService: CompetitionService,
  ) {
    this.tournamentClient = tournamentClient;
    this.pgaTourWebScraper = pgaTourWebScraper;
    this.competitionService = competitionService;
  }

  getCurrentTournamentId(tourCode: TourCode): Promise<string> {
    switch (tourCode) {
      case "P":
        return this.getCurrentPuttingPalsTournamentId();
      case "R":
        return this.getCurrentPgaTourTournamentId();
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  private async getCurrentPgaTourTournamentId(): Promise<string> {
    const tournamentId = await this.pgaTourWebScraper.getCurrentTournamentId();
    if (tournamentId === undefined) {
      throw new NotFoundError("Failed to get current PGA TOUR tournament id");
    }
    return tournamentId;
  }

  private async getCurrentPuttingPalsTournamentId(): Promise<string> {
    const competitions = this.competitionService.getCompetitions();

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

    const tournaments =
      await this.tournamentClient.getTournaments(competitionIds);
    const currentTournament = [...tournaments].sort((a, b) =>
      parseStartDate(b).localeCompare(parseStartDate(a)),
    )[0];

    if (currentTournament === undefined) {
      throw new NotFoundError("No tournament found");
    }

    return currentTournament.id;
  }
}
