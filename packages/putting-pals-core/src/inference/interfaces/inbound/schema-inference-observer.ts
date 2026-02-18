import type { TourCode } from "../../../tour/domain/types";

export interface SchemaInferenceObserver {
  inferSchema(tourCode: TourCode): Promise<void>;
}
