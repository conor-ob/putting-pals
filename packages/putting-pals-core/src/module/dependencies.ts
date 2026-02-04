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
import type { TournamentService } from "../tournament/interfaces/inbound/tournament-service";
import type { ActiveTournamentRepository } from "../tournament/interfaces/outbound/active-tournament-repository";
import type { PgaTourWebScraper } from "../tournament/interfaces/outbound/pga-tour-web-scraper";
import type { TournamentClient } from "../tournament/interfaces/outbound/tournament-client";
import { TournamentEventProcessorImpl } from "../tournament/tournament-event-processor";
import { TournamentResolverImpl } from "../tournament/tournament-resolver";
import { TournamentServiceImpl } from "../tournament/tournament-service";

export function injectDependencies(
  competitionRepository: CompetitionRepository,
  activeTournamentRepository: ActiveTournamentRepository,
  leaderboardFeedRepository: LeaderboardFeedRepository,
  leaderboardSnapshotRepository: LeaderboardSnapshotRepository,
  featureFlagRepository: FeatureFlagRepository,
  leaderboardClient: LeaderboardClient,
  scheduleClient: ScheduleClient,
  tournamentClient: TournamentClient,
  pgaTourWebScraper: PgaTourWebScraper,
): {
  competitionService: CompetitionService;
  feedService: FeedService;
  leaderboardEventProcessor: LeaderboardEventProcessor;
  leaderboardService: LeaderboardService;
  scheduleService: ScheduleService;
  scheduleYearsService: ScheduleYearsService;
  tournamentService: TournamentService;
  tourService: TourService;
} {
  const competitionService = new CompetitionServiceImpl(competitionRepository);
  const tournamentResolver = new TournamentResolverImpl(
    tournamentClient,
    pgaTourWebScraper,
    competitionService,
    activeTournamentRepository,
  );
  const tournamentService = new TournamentServiceImpl(
    tournamentClient,
    tournamentResolver,
  );
  const leaderboardService = new LeaderboardServiceImpl(
    leaderboardClient,
    tournamentResolver,
    competitionService,
  );
  const featureFlagService = new FeatureFlagServiceImpl(featureFlagRepository);
  return {
    competitionService: competitionService,
    feedService: new FeedServiceImpl(
      tournamentService,
      leaderboardService,
      tournamentResolver,
      leaderboardFeedRepository,
    ),
    leaderboardEventProcessor: new LeaderboardEventProcessorImpl(
      tournamentResolver,
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
      scheduleClient,
      competitionService,
    ),
    scheduleYearsService: new ScheduleYearsServiceImpl(
      scheduleClient,
      competitionService,
      tournamentService,
    ),
    tournamentService: tournamentService,
    tourService: new TourServiceImpl(featureFlagService),
  };
}
