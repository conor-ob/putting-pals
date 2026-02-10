import type z from "zod";
import type {
  ApiLeaderboardCompetitionSchema,
  ApiLeaderboardEventSchema,
  ApiLeaderboardSchema,
} from "./schemas";

export type ApiLeaderboardCompetition = z.infer<
  typeof ApiLeaderboardCompetitionSchema
>;

export type ApiLeaderboardEvent = z.infer<typeof ApiLeaderboardEventSchema>;

export type ApiLeaderboard = z.infer<typeof ApiLeaderboardSchema>;
