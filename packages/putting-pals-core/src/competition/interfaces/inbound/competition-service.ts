import type { Competition } from "../../domain/types";

export interface CompetitionService {
  getCompetition(id: string): Competition;
  getCompetitions(): Competition[];
}
