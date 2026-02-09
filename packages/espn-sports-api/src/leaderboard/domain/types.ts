import type z from "zod";
import type { ApiLeaderboardSchema } from "./schemas";

export type ApiLeaderboard = z.infer<typeof ApiLeaderboardSchema>;
