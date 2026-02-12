import z from "zod";
import { TournamentSchema } from "../../tournament/domain/schemas";

export const ScheduleSchema = z.object({
  completed: z.array(TournamentSchema),
  upcoming: z.array(TournamentSchema),
});
