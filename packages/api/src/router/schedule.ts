import { CompetitionDatabase } from "@pkg/db";

import { TournamentService } from "../service/tournament";
import { publicProcedure, router } from "../trpc";

export const scheduleRouter = router({
  competition: publicProcedure.query(async () => {
    const competitions = new CompetitionDatabase().getCompetitions();
    return new TournamentService().getTournaments(
      competitions.map((it) => it.tournamentId),
    );
  }),
});
