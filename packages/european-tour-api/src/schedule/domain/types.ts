import type z from "zod";
import type {
  EuropeanTourMiniScheduleEventSchema,
  EuropeanTourMiniScheduleSchema,
  EuropeanTourScheduleSchema,
  EuropeanTourTournamentSchema,
} from "./schemas";

export type EuropeanTourSchedule = z.infer<typeof EuropeanTourScheduleSchema>;

export type EuropeanTourTournament = z.infer<
  typeof EuropeanTourTournamentSchema
>;

export type EuropeanTourMiniScheduleEvent = z.infer<
  typeof EuropeanTourMiniScheduleEventSchema
>;

export type EuropeanTourMiniSchedule = z.infer<
  typeof EuropeanTourMiniScheduleSchema
>;
