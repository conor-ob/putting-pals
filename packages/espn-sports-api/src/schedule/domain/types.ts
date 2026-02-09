import type z from "zod";
import type {
  ApiEventSchema,
  TourScheduleEventSchema,
  TourScheduleSchema,
} from "./schemas";

export type ApiEvent = z.infer<typeof ApiEventSchema>;

export type TourSchedule = z.infer<typeof TourScheduleSchema>;

export type TourScheduleEvent = z.infer<typeof TourScheduleEventSchema>;
