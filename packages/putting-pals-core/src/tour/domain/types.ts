import type z from "zod";
import type { TourCodeSchema, TourNameSchema, TourSchema } from "./schemas";

export type Tour = z.infer<typeof TourSchema>;

export type TourCode = z.infer<typeof TourCodeSchema>;

export type TourName = z.infer<typeof TourNameSchema>;
