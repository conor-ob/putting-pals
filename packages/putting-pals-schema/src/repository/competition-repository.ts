import type { Competition } from "..";

export interface CompetitionRepository {
  getCompetition(id: string): Competition | undefined;

  getCompetitions(): Competition[];
}
