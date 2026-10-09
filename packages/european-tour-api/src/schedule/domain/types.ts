import type z from "zod";
import type {
  ApiMiniScheduleSchema,
  EuropeanTourScheduleSchema,
  EuropeanTourTournamentSchema,
} from "./schemas";

export type EuropeanTourSchedule = z.infer<typeof EuropeanTourScheduleSchema>;

export type EuropeanTourTournament = z.infer<
  typeof EuropeanTourTournamentSchema
>;

export type ApiMiniSchedule = z.infer<typeof ApiMiniScheduleSchema>;
