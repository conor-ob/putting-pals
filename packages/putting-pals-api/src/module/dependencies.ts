import type {
  ActiveTournamentClient,
  CompetitionRepository,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { PuttingPalsApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { CompetitionRepositoryImpl } from "../repository/competition-repository";
import { PuttingPalsApiScheduleClient } from "../schedule/schedule-client";
import { PuttingPalsApiActiveTournamentClient } from "../tournament/active-tournament-client";

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
