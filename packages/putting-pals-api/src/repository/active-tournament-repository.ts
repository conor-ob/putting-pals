import type { TourCode } from "../graphql/putting-pals/generated/graphql";

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
