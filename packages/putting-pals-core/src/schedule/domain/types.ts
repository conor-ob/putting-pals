import type z from "zod";
import type {
  ScheduleMonthSchema,
  ScheduleSchema,
  ScheduleTournamentSchema,
} from "./schemas";

export type Schedule = z.infer<typeof ScheduleSchema>;

export type ScheduleMonth = z.infer<typeof ScheduleMonthSchema>;

export type ScheduleTournament = z.infer<typeof ScheduleTournamentSchema>;
