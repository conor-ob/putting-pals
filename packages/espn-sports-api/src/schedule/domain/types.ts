import type z from "zod";
import type {
  ApiEventSchema,
  TourScheduleEventSchema,
  TourScheduleSchema,
  TourScheduleSeasonsSchema,
} from "./schemas";

export type ApiEvent = z.infer<typeof ApiEventSchema>;

export type TourSchedule = z.infer<typeof TourScheduleSchema>;

export type TourScheduleSeason = z.infer<typeof TourScheduleSeasonsSchema>;

export type TourScheduleEvent = z.infer<typeof TourScheduleEventSchema>;
