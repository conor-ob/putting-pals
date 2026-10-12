import type { InferenceType, InferredSchema } from "../../domain/types";

export interface SchemaInferenceRepository {
  /**
   * Stores `update(current)` as the schema for `type`, where `current` is
   * undefined if none is stored yet. Concurrent updates of the same type run
   * one at a time, so none of them is lost.
   */
  updateSchema(
    type: InferenceType,
    update: (current: InferredSchema | undefined) => InferredSchema,
  ): Promise<void>;
}
