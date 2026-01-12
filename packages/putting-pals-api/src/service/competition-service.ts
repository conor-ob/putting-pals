import type { Competition } from "../data/types";

export interface CompetitionService {
  getCompetition(id: string): Competition;

  getCompetitions(): Competition[];
}
