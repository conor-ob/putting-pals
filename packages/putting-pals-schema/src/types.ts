import type { z } from "zod";
import type {
  CompetitionSchema,
  CompetitorSchema,
  TourCodeSchema,
} from "./schemas";

export type TourCode = z.infer<typeof TourCodeSchema>;

export type Competitor = z.infer<typeof CompetitorSchema>;

export type Competition = z.infer<typeof CompetitionSchema>;
