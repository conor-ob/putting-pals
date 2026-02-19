import type {
  ActiveTournamentRepository,
  FeatureFlagRepository,
  LeaderboardFeedRepository,
  LeaderboardSnapshotRepository,
  SchemaInferenceRepository,
} from "@putting-pals/putting-pals-core";
import { createDatabaseConnection } from "../db/connection";
import {
  activeTournamentTable,
  featureFlagTable,
  inferredSchemaTable,
  leaderboardFeedTable,
  leaderboardSnapshotTable,
} from "../db/schema";
import { ActiveTournamentPostgresRepository } from "../repository/active-tournament-repository";
import { FeatureFlagPostgresRepository } from "../repository/feature-flag-repository";
import { LeaderboardFeedPostgresRepository } from "../repository/leaderboard-feed-repository";
import { LeaderboardSnapshotPostgresRepository } from "../repository/leaderboard-snapshot-repository";
import { SchemaInferencePostgresRepository } from "../repository/schema-inference-repository";

export function injectDependencies(): {
  activeTournamentRepository: ActiveTournamentRepository;
  featureFlagRepository: FeatureFlagRepository;
  leaderboardFeedRepository: LeaderboardFeedRepository;
  leaderboardSnapshotRepository: LeaderboardSnapshotRepository;
  schemaInferenceRepository: SchemaInferenceRepository;
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
    schemaInferenceRepository: new SchemaInferencePostgresRepository(
      database,
      inferredSchemaTable,
    ),
  };
}
