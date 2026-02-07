import { differenceInMinutes } from "date-fns";
import {
  NotFoundError,
  UnsupportedTourCodeError,
} from "../error/service-error";
import type { TourCode } from "../tour/domain/types";
import type { ActiveTournamentService } from "./interfaces/inbound/active-tournament-service";
import type { ActiveTournamentClient } from "./interfaces/outbound/active-tournament-client";
import type {
  ActiveTournament,
  ActiveTournamentRepository,
} from "./interfaces/outbound/active-tournament-repository";

export class ActiveTournamentServiceImpl implements ActiveTournamentService {
  constructor(
    private readonly pgaTourApiActiveTournamentClient: ActiveTournamentClient,
    private readonly puttingPalsApiActiveTournamentClient: ActiveTournamentClient,
    private readonly espnSportsApiActiveTournamentClient: ActiveTournamentClient,
    private readonly activeTournamentRepository: ActiveTournamentRepository,
  ) {
    this.pgaTourApiActiveTournamentClient = pgaTourApiActiveTournamentClient;
    this.puttingPalsApiActiveTournamentClient =
      puttingPalsApiActiveTournamentClient;
    this.espnSportsApiActiveTournamentClient =
      espnSportsApiActiveTournamentClient;
    this.activeTournamentRepository = activeTournamentRepository;
  }

  async getActiveTournamentId(
    tourCode: TourCode,
    id?: string,
  ): Promise<string> {
    if (id !== undefined) {
      return id;
    }

    const activeTournament = await this.getCachedActiveTournamentId(tourCode);

    if (
      activeTournament !== undefined &&
      differenceInMinutes(new Date(), activeTournament.lastUpdatedAt) < 60
    ) {
      return activeTournament.tournamentId;
    }

    const remoteActiveTournamentId =
      await this.getRemoteActiveTournamentId(tourCode);

    if (remoteActiveTournamentId === undefined) {
      throw new NotFoundError("Failed to get active tournament id");
    }

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
  ): Promise<string | undefined> {
    switch (tourCode) {
      case "pal":
        return this.puttingPalsApiActiveTournamentClient.getActiveTournamentId(
          tourCode,
        );
      case "pga":
      case "dev":
      case "snr":
      case "pam":
        return this.pgaTourApiActiveTournamentClient.getActiveTournamentId(
          tourCode,
        );
      case "eur":
      case "liv":
        return this.espnSportsApiActiveTournamentClient.getActiveTournamentId(
          tourCode,
        );
      default:
        throw new UnsupportedTourCodeError(tourCode);
    }
  }
}
