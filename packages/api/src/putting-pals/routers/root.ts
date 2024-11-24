import { router } from "../../trpc";
import { leaderboardRouter } from "./leaderboard";
import { tournamentRouter } from "./tournament";

export const puttingPalsRouter = router({
  leaderboard: leaderboardRouter,
  tournament: tournamentRouter,
});
