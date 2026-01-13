import type { EventEmitter, TourCode } from "@putting-pals/putting-pals-api";

export interface LeaderboardEventProcessorService {
  processEvent(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<EventEmitter[]>;
}
