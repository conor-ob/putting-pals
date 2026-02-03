import type { TourCode } from "@putting-pals/putting-pals-api";

export interface LeaderboardEventProcessor {
  processEvent(tourCode: TourCode): Promise<void>;
}
