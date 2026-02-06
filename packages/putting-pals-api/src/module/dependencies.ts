import type {
  ActiveTournamentClient,
  CompetitionRepository,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { PuttingPalsApiLeaderboardClient } from "../api/leaderboard/leaderboard-client";
import { PuttingPalsApiScheduleClient } from "../api/schedule/schedule-client";
import { PuttingPalsApiActiveTournamentClient } from "../api/tournament/active-tournament-client";
import { CompetitionRepositoryImpl } from "../repository/competition-repository";

export function injectDependencies(
  pgaTourApiLeaderboardClient: LeaderboardClient,
  pgaTourApiTournamentClient: TournamentClient,
  pgaTourApiScheduleClient: ScheduleClient,
): {
  competitionRepository: CompetitionRepository;
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
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
      pgaTourApiTournamentClient,
      pgaTourApiScheduleClient,
    ),
    activeTournamentClient: new PuttingPalsApiActiveTournamentClient(
      competitionRepository,
      pgaTourApiTournamentClient,
    ),
  };
}
