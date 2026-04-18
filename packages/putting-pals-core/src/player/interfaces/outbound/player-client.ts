import type { TourCode } from "../../../tour/domain/types";
import type { Player } from "../../domain/types";

export interface PlayerClient {
  getPlayers(tourCode: TourCode): Player[];
}
