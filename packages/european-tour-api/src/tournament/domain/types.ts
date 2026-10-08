import type z from "zod";
import type { EventMetadataSchema, EventStatusSchema } from "./schemas";

export type EventStatus = z.infer<typeof EventStatusSchema>;

export type EventMetadata = z.infer<typeof EventMetadataSchema>;
