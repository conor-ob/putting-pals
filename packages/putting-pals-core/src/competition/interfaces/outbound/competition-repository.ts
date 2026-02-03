import type { Competition } from "../../../../../putting-pals-schema/src";

export interface CompetitionRepository {
  getCompetition(id: string): Competition | undefined;
  getCompetitions(): Competition[];
}
