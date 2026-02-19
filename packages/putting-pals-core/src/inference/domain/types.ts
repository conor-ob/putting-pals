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

export type FieldMeta = {
  types: Record<TypeName, true>;
  optional: boolean;
  values?: Record<string, true>; // primitives only
  children?: Record<string, FieldMeta>; // for objects
  items?: FieldMeta; // for arrays
};

export type InferenceTourCode = z.infer<typeof InferenceTourCodeSchema>;

export type InferenceType = z.infer<typeof InferenceTypeSchema>;
