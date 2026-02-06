import type { TourCode } from "../../../tour/domain/types";

export interface ActiveTournamentClient {
  getActiveTournamentId(tourCode: TourCode): Promise<string | undefined>;
}
