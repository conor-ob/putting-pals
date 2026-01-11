import type { Competition } from "..";

export interface CompetitionService {
  getCompetition(id: string): Competition;

  getCompetitions(): Competition[];
}
