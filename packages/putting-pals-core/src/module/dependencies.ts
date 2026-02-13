import { CompetitionServiceImpl } from "../competition/competition-service";
import type { CompetitionService } from "../competition/interfaces/inbound/competition-service";
import type { CompetitionRepository } from "../competition/interfaces/outbound/competition-repository";
import { LeaderboardEventProcessorImpl } from "../event/event-processor";
import type { LeaderboardEventProcessor } from "../event/interfaces/inbound/leaderboard-event-processor";
import type { LeaderboardSnapshotRepository } from "../event/interfaces/outbound/leaderboard-snapshot-repository";
import { FeedServiceImpl } from "../feed/feed-service";
import type { FeedService } from "../feed/interfaces/inbound/feed-service";
import type { LeaderboardFeedRepository } from "../feed/interfaces/outbound/leaderboard-feed-repository";
import { FeatureFlagServiceImpl } from "../flag/feature-flag-service";
import type { FeatureFlagRepository } from "../flag/interfaces/outbound/feature-flag-repository";
import type { LeaderboardService } from "../leaderboard/interfaces/inbound/leaderboard-service";
import type { LeaderboardClient } from "../leaderboard/interfaces/outbound/leaderboard-client";
import { LeaderboardEventProcessorServiceImpl } from "../leaderboard/leaderboard-event-processor-service";
import { LeaderboardServiceImpl } from "../leaderboard/leaderboard-service";
import type { ScheduleService } from "../schedule/interfaces/inbound/schedule-service";
import type { ScheduleClient } from "../schedule/interfaces/outbound/schedule-client";
import { ScheduleServiceImpl } from "../schedule/schedule-service";
import type { SeasonService } from "../season/interfaces/inbound/season-service";
import type { SeasonClient } from "../season/interfaces/outbound/season-client";
import { SeasonServiceImpl } from "../season/season-service";
import type { TourService } from "../tour/interfaces/inbound/tour-service";
import { TourServiceImpl } from "../tour/tour-service";
import { ActiveTournamentServiceImpl } from "../tournament/active-tournament-service";
import { BatchTournamentServiceImpl } from "../tournament/batch-tournament-service";
import type { BatchTournamentService } from "../tournament/interfaces/inbound/batch-tournament-service";
import type { TournamentService } from "../tournament/interfaces/inbound/tournament-service";
import type { ActiveTournamentClient } from "../tournament/interfaces/outbound/active-tournament-client";
import type { ActiveTournamentRepository } from "../tournament/interfaces/outbound/active-tournament-repository";
import type { BatchTournamentClient } from "../tournament/interfaces/outbound/batch-tournament-client";
import type { TournamentClient } from "../tournament/interfaces/outbound/tournament-client";
import { TournamentEventProcessorImpl } from "../tournament/tournament-event-processor";
import { TournamentServiceImpl } from "../tournament/tournament-service";

export function injectDependencies(
  competitionRepository: CompetitionRepository,
  activeTournamentRepository: ActiveTournamentRepository,
  leaderboardFeedRepository: LeaderboardFeedRepository,
  leaderboardSnapshotRepository: LeaderboardSnapshotRepository,
  featureFlagRepository: FeatureFlagRepository,
  pgaTourApiActiveTournamentClient: ActiveTournamentClient,
  pgaTourApiLeaderboardClient: LeaderboardClient,
  pgaTourApiSeasonClient: SeasonClient,
  pgaTourApiScheduleClient: ScheduleClient,
  pgaTourApiTournamentClient: TournamentClient,
  pgaTourApiBatchTournamentClient: BatchTournamentClient,
  espnSportsApiActiveTournamentClient: ActiveTournamentClient,
  espnSportsApiLeaderboardClient: LeaderboardClient,
  espnSportsApiSeasonClient: SeasonClient,
  espnSportsApiScheduleClient: ScheduleClient,
  espnSportsApiTournamentClient: TournamentClient,
  puttingPalsApiActiveTournamentClient: ActiveTournamentClient,
  puttingPalsApiLeaderboardClient: LeaderboardClient,
  puttingPalsApiSeasonClient: SeasonClient,
  puttingPalsApiScheduleClient: ScheduleClient,
): {
  competitionService: CompetitionService;
  feedService: FeedService;
  leaderboardEventProcessor: LeaderboardEventProcessor;
  leaderboardService: LeaderboardService;
  scheduleService: ScheduleService;
  seasonService: SeasonService;
  tournamentService: TournamentService;
  batchTournamentService: BatchTournamentService;
  tourService: TourService;
} {
  const competitionService = new CompetitionServiceImpl(competitionRepository);
  const activeTournamentService = new ActiveTournamentServiceImpl(
    pgaTourApiActiveTournamentClient,
    puttingPalsApiActiveTournamentClient,
    espnSportsApiActiveTournamentClient,
    activeTournamentRepository,
  );
  const tournamentService = new TournamentServiceImpl(
    pgaTourApiTournamentClient,
    espnSportsApiTournamentClient,
    activeTournamentService,
  );
  const batchTournamentService = new BatchTournamentServiceImpl(
    pgaTourApiBatchTournamentClient,
  );
  const leaderboardService = new LeaderboardServiceImpl(
    puttingPalsApiLeaderboardClient,
    pgaTourApiLeaderboardClient,
    espnSportsApiLeaderboardClient,
    activeTournamentService,
  );
  const featureFlagService = new FeatureFlagServiceImpl(featureFlagRepository);
  return {
    competitionService: competitionService,
    feedService: new FeedServiceImpl(
      tournamentService,
      leaderboardService,
      activeTournamentService,
      leaderboardFeedRepository,
    ),
    leaderboardEventProcessor: new LeaderboardEventProcessorImpl(
      activeTournamentService,
      [
        new TournamentEventProcessorImpl(
          tournamentService,
          leaderboardSnapshotRepository,
        ),
        new LeaderboardEventProcessorServiceImpl(
          leaderboardService,
          leaderboardSnapshotRepository,
        ),
      ],
      leaderboardFeedRepository,
    ),
    leaderboardService: leaderboardService,
    scheduleService: new ScheduleServiceImpl(
      puttingPalsApiScheduleClient,
      pgaTourApiScheduleClient,
      espnSportsApiScheduleClient,
    ),
    seasonService: new SeasonServiceImpl(
      puttingPalsApiSeasonClient,
      pgaTourApiSeasonClient,
      espnSportsApiSeasonClient,
    ),
    tournamentService: tournamentService,
    batchTournamentService: batchTournamentService,
    tourService: new TourServiceImpl(featureFlagService),
  };
}
