import type z from "zod";
import type { EventStatusSchema } from "./schemas";

export type EventStatus = z.infer<typeof EventStatusSchema>;
