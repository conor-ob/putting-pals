import type z from "zod";
import type { InferenceTourCodeSchema, InferenceTypeSchema } from "./schemas";

type TypeName =
  | "string"
  | "number"
  | "boolean"
  | "object"
  | "array"
  | "null"
  | "undefined";

export type InferredSchema = {
  types: Record<TypeName, true>;
  optional: boolean;
  values?: Record<string, true>; // primitives only
  children?: Record<string, InferredSchema>; // for objects
  items?: InferredSchema; // for arrays
};

export type InferenceTourCode = z.infer<typeof InferenceTourCodeSchema>;

export type InferenceType = z.infer<typeof InferenceTypeSchema>;
