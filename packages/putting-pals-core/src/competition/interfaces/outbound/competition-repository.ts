import type { Competition } from "@putting-pals/putting-pals-schema";

export interface CompetitionRepository {
  getCompetition(id: string): Competition | undefined;
  getCompetitions(): Competition[];
}
