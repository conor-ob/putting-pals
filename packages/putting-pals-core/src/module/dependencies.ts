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
import type { ScheduleYearsService } from "../schedule/interfaces/inbound/schedule-years-service";
import type { ScheduleClient } from "../schedule/interfaces/outbound/schedule-client";
import { ScheduleServiceImpl } from "../schedule/schedule-service";
import { ScheduleYearsServiceImpl } from "../schedule/schedule-years-service";
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
  repositoryDependencies: {
    activeTournamentRepository: ActiveTournamentRepository;
    leaderboardFeedRepository: LeaderboardFeedRepository;
    leaderboardSnapshotRepository: LeaderboardSnapshotRepository;
    competitionRepository: CompetitionRepository;
    featureFlagRepository: FeatureFlagRepository;
  },
  pgaTourApiDependencies: {
    activeTournamentClient: ActiveTournamentClient;
    leaderboardClient: LeaderboardClient;
    scheduleClient: ScheduleClient;
    tournamentClient: TournamentClient;
    batchTournamentClient: BatchTournamentClient;
  },
  espnSportsApiDependencies: {
    activeTournamentClient: ActiveTournamentClient;
    leaderboardClient: LeaderboardClient;
    scheduleClient: ScheduleClient;
    tournamentClient: TournamentClient;
  },
  puttingPalsApiDependencies: {
    tournamentClient: TournamentClient;
    batchTournamentClient: BatchTournamentClient;
    activeTournamentClient: ActiveTournamentClient;
    leaderboardClient: LeaderboardClient;
    scheduleClient: ScheduleClient;
  },
): {
  competitionService: CompetitionService;
  feedService: FeedService;
  leaderboardEventProcessor: LeaderboardEventProcessor;
  leaderboardService: LeaderboardService;
  scheduleService: ScheduleService;
  scheduleYearsService: ScheduleYearsService;
  tournamentService: TournamentService;
  batchTournamentService: BatchTournamentService;
  tourService: TourService;
} {
  const competitionService = new CompetitionServiceImpl(
    repositoryDependencies.competitionRepository,
  );
  const activeTournamentService = new ActiveTournamentServiceImpl(
    pgaTourApiDependencies.activeTournamentClient,
    puttingPalsApiDependencies.activeTournamentClient,
    espnSportsApiDependencies.activeTournamentClient,
    repositoryDependencies.activeTournamentRepository,
  );
  const tournamentService = new TournamentServiceImpl(
    puttingPalsApiDependencies.tournamentClient,
    pgaTourApiDependencies.tournamentClient,
    espnSportsApiDependencies.tournamentClient,
    activeTournamentService,
  );
  const batchTournamentService = new BatchTournamentServiceImpl(
    pgaTourApiDependencies.batchTournamentClient,
    puttingPalsApiDependencies.batchTournamentClient,
  );
  const leaderboardService = new LeaderboardServiceImpl(
    puttingPalsApiDependencies.leaderboardClient,
    pgaTourApiDependencies.leaderboardClient,
    espnSportsApiDependencies.leaderboardClient,
    activeTournamentService,
  );
  const featureFlagService = new FeatureFlagServiceImpl(
    repositoryDependencies.featureFlagRepository,
  );
  return {
    competitionService: competitionService,
    feedService: new FeedServiceImpl(
      tournamentService,
      leaderboardService,
      activeTournamentService,
      repositoryDependencies.leaderboardFeedRepository,
    ),
    leaderboardEventProcessor: new LeaderboardEventProcessorImpl(
      activeTournamentService,
      [
        new TournamentEventProcessorImpl(
          tournamentService,
          repositoryDependencies.leaderboardSnapshotRepository,
        ),
        new LeaderboardEventProcessorServiceImpl(
          leaderboardService,
          repositoryDependencies.leaderboardSnapshotRepository,
        ),
      ],
      repositoryDependencies.leaderboardFeedRepository,
    ),
    leaderboardService: leaderboardService,
    scheduleService: new ScheduleServiceImpl(
      puttingPalsApiDependencies.scheduleClient,
      pgaTourApiDependencies.scheduleClient,
      espnSportsApiDependencies.scheduleClient,
    ),
    scheduleYearsService: new ScheduleYearsServiceImpl(
      puttingPalsApiDependencies.scheduleClient,
      pgaTourApiDependencies.scheduleClient,
      espnSportsApiDependencies.scheduleClient,
    ),
    tournamentService: tournamentService,
    batchTournamentService: batchTournamentService,
    tourService: new TourServiceImpl(featureFlagService),
  };
}
