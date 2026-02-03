import type { Competition } from "@putting-pals/putting-pals-api";

export interface CompetitionRepository {
  getCompetition(id: string): Competition | undefined;
  getCompetitions(): Competition[];
}
