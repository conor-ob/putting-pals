import type { TourCode } from "@putting-pals/putting-pals-api";

export interface LeaderboardChangeDetector {
  detectChange(tourCode: TourCode): Promise<void>;
}
