import type { TourCode } from "@putting-pals/putting-pals-schema";

export interface LeaderboardEventProcessor {
  processEvent(tourCode: TourCode): Promise<void>;
}
