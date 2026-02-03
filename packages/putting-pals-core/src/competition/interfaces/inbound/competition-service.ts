import type { Competition } from "@putting-pals/putting-pals-api";

export interface CompetitionService {
  getCompetition(id: string): Competition;
  getCompetitions(): Competition[];
}
