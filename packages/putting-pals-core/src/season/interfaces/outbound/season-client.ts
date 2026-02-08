import type { Season } from "../../domain/types";

export interface SeasonClient {
  getSeasons(): Promise<Season[]>;
}
