import type z from "zod";
import type { CompetitorSchema } from "./schemas";

export type Competitor = z.infer<typeof CompetitorSchema>;
