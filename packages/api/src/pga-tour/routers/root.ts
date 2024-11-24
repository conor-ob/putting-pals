import { router } from "../../trpc";
import { leaderboardRouter } from "./leaderboard";
import { tournamentRouter } from "./tournament";

export const pgaTourRouter = router({
  leaderboard: leaderboardRouter,
  tournament: tournamentRouter,
});
