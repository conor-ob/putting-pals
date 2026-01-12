import type { Competition } from "../data/types";

export interface CompetitionRepository {
  getCompetition(id: string): Competition | undefined;

  getCompetitions(): Competition[];
}
