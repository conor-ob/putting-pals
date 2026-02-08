import type { TourCode } from "../../../tour/domain/types";
import type { ProcessEventResult } from "../../domain/types";

export interface LeaderboardEventProcessorService {
  processEvent(
    tourCode: TourCode,
    tournamentId: string,
  ): Promise<ProcessEventResult>;
}
