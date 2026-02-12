import type { TourCode } from "../../../tour/domain/types";
import type { Season } from "../../domain/types";

export interface SeasonClient {
  getSeasons(tourCode: TourCode): Promise<Season[]>;
}
