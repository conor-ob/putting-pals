import type { TourCode } from "@putting-pals/putting-pals-api";

export interface LeaderboardEventProcessor {
  detectChange(tourCode: TourCode): Promise<void>;
}
