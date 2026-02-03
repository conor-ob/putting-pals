import type { Competition } from "../../../../../putting-pals-schema/src";

export interface CompetitionService {
  getCompetition(id: string): Competition;
  getCompetitions(): Competition[];
}
