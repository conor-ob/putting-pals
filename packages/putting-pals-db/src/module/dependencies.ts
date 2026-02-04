import type {
  ActiveTournamentRepository,
  FeatureFlagRepository,
  LeaderboardFeedRepository,
  LeaderboardSnapshotRepository,
} from "@putting-pals/putting-pals-core";
import { createDatabaseConnection } from "../db/connection";
import {
  activeTournamentTable,
  featureFlagTable,
  leaderboardFeedTable,
  leaderboardSnapshotTable,
} from "../db/schema";
import { ActiveTournamentPostgresRepository } from "../repository/active-tournament-repository";
import { FeatureFlagPostgresRepository } from "../repository/feature-flag-repository";
import { LeaderboardFeedPostgresRepository } from "../repository/leaderboard-feed-repository";
import { LeaderboardSnapshotPostgresRepository } from "../repository/leaderboard-snapshot-repository";

export function injectDependencies(): {
  activeTournamentRepository: ActiveTournamentRepository;
  featureFlagRepository: FeatureFlagRepository;
  leaderboardFeedRepository: LeaderboardFeedRepository;
  leaderboardSnapshotRepository: LeaderboardSnapshotRepository;
} {
  const database = createDatabaseConnection();
  return {
    activeTournamentRepository: new ActiveTournamentPostgresRepository(
      database,
      activeTournamentTable,
    ),
    featureFlagRepository: new FeatureFlagPostgresRepository(
      database,
      featureFlagTable,
    ),
    leaderboardFeedRepository: new LeaderboardFeedPostgresRepository(
      database,
      leaderboardFeedTable,
    ),
    leaderboardSnapshotRepository: new LeaderboardSnapshotPostgresRepository(
      database,
      leaderboardSnapshotTable,
    ),
  };
}
