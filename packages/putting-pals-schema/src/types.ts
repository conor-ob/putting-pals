import type { z } from "zod";
import type { CompetitionSchema, CompetitorSchema } from "./schemas";

export type Competitor = z.infer<typeof CompetitorSchema>;

export type Competition = z.infer<typeof CompetitionSchema>;
