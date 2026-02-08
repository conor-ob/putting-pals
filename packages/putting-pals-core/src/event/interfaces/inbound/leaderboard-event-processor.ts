import type { TourCode } from "../../../tour/domain/types";

export interface LeaderboardEventProcessor {
  processEvent(tourCode: TourCode): Promise<void>;
}
