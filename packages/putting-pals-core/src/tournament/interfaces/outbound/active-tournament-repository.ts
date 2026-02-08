import type { TourCode } from "../../../tour/domain/types";

export type ActiveTournament = {
  tournamentId: string;
  lastUpdatedAt: Date;
};

export interface ActiveTournamentRepository {
  getActiveTournament(
    tourCode: TourCode,
  ): Promise<ActiveTournament | undefined>;
  setActiveTournament(tourCode: TourCode, tournamentId: string): Promise<void>;
}
