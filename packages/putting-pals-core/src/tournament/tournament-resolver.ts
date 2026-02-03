import type {
  ActiveTournament,
  ActiveTournamentRepository,
  PgaTourWebScraper,
  TourCode,
} from "@putting-pals/putting-pals-api";
import { differenceInMinutes } from "date-fns";
import type { CompetitionService } from "../competition/interfaces/inbound/competition-service";
import {
  NotFoundError,
  UnsupportedTourCodeError,
} from "../error/service-error";
import type { TournamentResolver } from "./interfaces/inbound/tournament-resolver";
import type { TournamentClient } from "./interfaces/outbound/tournament-client";
import { parseStartDate } from "./tournament-utils";

export class TournamentResolverImpl implements TournamentResolver {
  constructor(
    private readonly tournamentClient: TournamentClient,
    private readonly pgaTourWebScraper: PgaTourWebScraper,
    private readonly competitionService: CompetitionService,
    private readonly activeTournamentRepository: ActiveTournamentRepository,
  ) {
    this.tournamentClient = tournamentClient;
    this.pgaTourWebScraper = pgaTourWebScraper;
    this.competitionService = competitionService;
    this.activeTournamentRepository = activeTournamentRepository;
  }

  async getActiveTournamentId(tourCode: TourCode): Promise<string> {
    const activeTournament = await this.getCachedActiveTournamentId(tourCode);

    if (
      activeTournament !== undefined &&
      differenceInMinutes(new Date(), activeTournament.lastUpdatedAt) < 60
    ) {
      return activeTournament.tournamentId;
    }

    const remoteActiveTournamentId =
      await this.getRemoteActiveTournamentId(tourCode);
    await this.activeTournamentRepository.setActiveTournament(
      tourCode,
      remoteActiveTournamentId,
    );
    return remoteActiveTournamentId;
  }

  private async getCachedActiveTournamentId(
    tourCode: TourCode,
  ): Promise<ActiveTournament | undefined> {
    return this.activeTournamentRepository.getActiveTournament(tourCode);
  }

  private async getRemoteActiveTournamentId(
    tourCode: TourCode,
  ): Promise<string> {
    switch (tourCode) {
      case "P":
        return this.getActivePuttingPalsTournamentId(tourCode);
      case "R":
      case "S":
      case "H":
      case "Y":
        return this.getActivePgaTourTournamentId(tourCode);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  private async getActivePgaTourTournamentId(
    tourCode: TourCode,
  ): Promise<string> {
    const tournamentId =
      await this.pgaTourWebScraper.getActiveTournamentId(tourCode);
    if (tournamentId === undefined) {
      throw new NotFoundError("Failed to get active PGA TOUR tournament id");
    }
    return tournamentId;
  }

  private async getActivePuttingPalsTournamentId(
    tourCode: TourCode,
  ): Promise<string> {
    const activeTournament =
      await this.activeTournamentRepository.getActiveTournament(tourCode);

    if (activeTournament === undefined) {
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
      const activeTournament = [...tournaments].sort((a, b) =>
        parseStartDate(b).localeCompare(parseStartDate(a)),
      )[0];

      if (activeTournament === undefined) {
        throw new NotFoundError("No tournament found");
      }

      return activeTournament.id;
    }

    return activeTournament.tournamentId;
  }
}
