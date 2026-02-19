import type { InferenceType, InferredSchema } from "../../domain/types";

export interface SchemaInferenceRepository {
  getSchema(type: InferenceType): Promise<InferredSchema | undefined>;
  createSchema(type: InferenceType, schema: InferredSchema): Promise<void>;
  updateSchema(type: InferenceType, schema: InferredSchema): Promise<void>;
}
