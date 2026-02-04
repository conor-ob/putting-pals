import type { Competition } from "@putting-pals/putting-pals-schema";

export interface CompetitionService {
  getCompetition(id: string): Competition;
  getCompetitions(): Competition[];
}
