import { UnsupportedTourCodeError } from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { Tournament } from "./domain/types";
import type { ActiveTournamentService } from "./interfaces/inbound/active-tournament-service";
import type { TournamentService } from "./interfaces/inbound/tournament-service";
import type { TournamentClient } from "./interfaces/outbound/tournament-client";

export class TournamentServiceImpl implements TournamentService {
  constructor(
    private readonly pgaTourApiTournamentClient: TournamentClient,
    private readonly espnSportsApiTournamentClient: TournamentClient,
    private readonly activeTournamentService: ActiveTournamentService,
  ) {
    this.pgaTourApiTournamentClient = pgaTourApiTournamentClient;
    this.espnSportsApiTournamentClient = espnSportsApiTournamentClient;
    this.activeTournamentService = activeTournamentService;
  }

  async getTournament(tourCode: TourCode, id?: string): Promise<Tournament> {
    const tournamentId =
      await this.activeTournamentService.getActiveTournamentId(tourCode, id);
    switch (tourCode) {
      case "putting-pals-tour":
      case "pga-tour":
      case "korn-ferry-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
        return this.pgaTourApiTournamentClient.getTournament(tournamentId);
      case "dp-world-tour":
      case "liv-golf-tour":
        return this.espnSportsApiTournamentClient.getTournament(tournamentId);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }

  async getTournaments(
    tourCode: TourCode,
    ids: string[],
  ): Promise<Tournament[]> {
    switch (tourCode) {
      case "putting-pals-tour":
      case "pga-tour":
      case "korn-ferry-tour":
      case "pga-tour-champions":
      case "pga-tour-americas":
        return this.pgaTourApiTournamentClient.getTournaments(ids);
      case "dp-world-tour":
      case "liv-golf-tour":
        return this.espnSportsApiTournamentClient.getTournaments(ids);
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
