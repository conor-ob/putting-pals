import type { InferredSchemaChange } from "../../domain/types";

export interface SchemaInferenceChangeRepository {
  createChanges(change: InferredSchemaChange[]): Promise<void>;
}
