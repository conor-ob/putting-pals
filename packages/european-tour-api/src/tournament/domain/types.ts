import type z from "zod";
import type { ApiEventCardSchema, ApiEventStatusSchema } from "./schemas";

export type ApiEventStatus = z.infer<typeof ApiEventStatusSchema>;

export type ApiEventCard = z.infer<typeof ApiEventCardSchema>;
