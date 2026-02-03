import type { TourCode } from "../../../../../putting-pals-schema/src";

export interface LeaderboardEventProcessor {
  processEvent(tourCode: TourCode): Promise<void>;
}
