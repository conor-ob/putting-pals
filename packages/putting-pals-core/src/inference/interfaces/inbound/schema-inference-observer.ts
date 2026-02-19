import type { InferenceTourCode, InferenceType } from "../../domain/types";

export interface SchemaInferenceObserver {
  inferSchema(tourCode: InferenceTourCode, type: InferenceType): Promise<void>;
}
