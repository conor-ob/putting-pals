import type { TourCode } from "@putting-pals/putting-pals-schema";
import type { ProcessEventResult } from "../../domain/types";

export interface LeaderboardEventProcessorService {
  processEvent(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<ProcessEventResult>;
}
