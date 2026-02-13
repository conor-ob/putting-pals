import type {
  ActiveTournamentClient,
  BatchTournamentClient,
  CompetitionRepository,
  LeaderboardClient,
  ScheduleClient,
  SeasonClient,
} from "@putting-pals/putting-pals-core";
import { PuttingPalsApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { CompetitionRepositoryImpl } from "../repository/competition-repository";
import { PuttingPalsApiScheduleClient } from "../schedule/schedule-client";
import { PuttingPalsApiSeasonClient } from "../season/season-client";
import { PuttingPalsApiActiveTournamentClient } from "../tournament/active-tournament-client";

export function injectDependencies(
  pgaTourApiLeaderboardClient: LeaderboardClient,
  pgaTourApiBatchTournamentClient: BatchTournamentClient,
  pgaTourApiSeasonClient: SeasonClient,
  pgaTourApiScheduleClient: ScheduleClient,
): {
  competitionRepository: CompetitionRepository;
  leaderboardClient: LeaderboardClient;
  seasonClient: SeasonClient;
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
    seasonClient: new PuttingPalsApiSeasonClient(
      competitionRepository,
      pgaTourApiBatchTournamentClient,
      pgaTourApiSeasonClient,
    ),
    scheduleClient: new PuttingPalsApiScheduleClient(
      competitionRepository,
      pgaTourApiScheduleClient,
    ),
    activeTournamentClient: new PuttingPalsApiActiveTournamentClient(
      competitionRepository,
      pgaTourApiBatchTournamentClient,
    ),
  };
}
