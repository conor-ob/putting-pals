import type z from "zod";
import type { SeasonSchema } from "./schemas";

export type Season = z.infer<typeof SeasonSchema>;
