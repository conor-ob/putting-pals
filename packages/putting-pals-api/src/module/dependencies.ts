import type {
  ActiveTournamentClient,
  BatchTournamentClient,
  CompetitionRepository,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { PuttingPalsApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { CompetitionRepositoryImpl } from "../repository/competition-repository";
import { PuttingPalsApiScheduleClient } from "../schedule/schedule-client";
import { PuttingPalsApiActiveTournamentClient } from "../tournament/active-tournament-client";
import { PuttingPalsApiBatchTournamentClient } from "../tournament/batch-tournament-client";
import { PuttingPalsApiTournamentClient } from "../tournament/tournament-client";

export function injectDependencies(
  pgaTourApiLeaderboardClient: LeaderboardClient,
  pgaTourApiTournamentClient: TournamentClient,
  pgaTourApiBatchTournamentClient: BatchTournamentClient,
  pgaTourApiScheduleClient: ScheduleClient,
): {
  competitionRepository: CompetitionRepository;
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  tournamentClient: TournamentClient;
  batchTournamentClient: BatchTournamentClient;
  activeTournamentClient: ActiveTournamentClient;
} {
  const competitionRepository = new CompetitionRepositoryImpl();
  return {
    competitionRepository: competitionRepository,
    leaderboardClient: new PuttingPalsApiLeaderboardClient(
      competitionRepository,
      pgaTourApiLeaderboardClient,
    ),
    scheduleClient: new PuttingPalsApiScheduleClient(
      competitionRepository,
      pgaTourApiBatchTournamentClient,
      pgaTourApiScheduleClient,
    ),
    tournamentClient: new PuttingPalsApiTournamentClient(
      pgaTourApiTournamentClient,
    ),
    batchTournamentClient: new PuttingPalsApiBatchTournamentClient(
      pgaTourApiBatchTournamentClient,
    ),
    activeTournamentClient: new PuttingPalsApiActiveTournamentClient(
      competitionRepository,
      pgaTourApiBatchTournamentClient,
    ),
  };
}
