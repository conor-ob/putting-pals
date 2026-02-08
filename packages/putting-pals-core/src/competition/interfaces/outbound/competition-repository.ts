import type { Competition } from "../../domain/types";

export interface CompetitionRepository {
  getCompetition(id: string): Competition | undefined;
  getCompetitions(): Competition[];
}
