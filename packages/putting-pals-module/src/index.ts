import { injectDependencies as injectEspnSportsApiDependencies } from "@putting-pals/espn-sports-api";
import { injectDependencies as injectPgaTourApiDependencies } from "@putting-pals/pga-tour-api";
import { injectDependencies as injectPuttingPalsApiDependencies } from "@putting-pals/putting-pals-api";
import { injectDependencies as injectCoreDependencies } from "@putting-pals/putting-pals-core";
import { injectDependencies as injectDatabaseDependencies } from "@putting-pals/putting-pals-db";

export type Dependencies = ReturnType<typeof injectCoreDependencies>;

/**
 * Composition root shared by the server and the jobs: wires every adapter
 * into the core services. Reads DATABASE_URL.
 */
export function injectDependencies(): Dependencies {
  const databaseDependencies = injectDatabaseDependencies();
  const pgaTourApiDependencies = injectPgaTourApiDependencies();
  const puttingPalsApiDependencies = injectPuttingPalsApiDependencies(
    pgaTourApiDependencies.leaderboardClient,
    pgaTourApiDependencies.batchTournamentClient,
    pgaTourApiDependencies.seasonClient,
    pgaTourApiDependencies.scheduleClient,
  );
  const espnSportsApiDependencies = injectEspnSportsApiDependencies();
  return injectCoreDependencies(
    puttingPalsApiDependencies.competitionRepository,
    databaseDependencies.activeTournamentRepository,
    databaseDependencies.leaderboardFeedRepository,
    databaseDependencies.leaderboardSnapshotRepository,
    databaseDependencies.featureFlagRepository,
    databaseDependencies.schemaInferenceRepository,
    pgaTourApiDependencies.activeTournamentClient,
    pgaTourApiDependencies.leaderboardClient,
    pgaTourApiDependencies.seasonClient,
    pgaTourApiDependencies.scheduleClient,
    pgaTourApiDependencies.tournamentClient,
    pgaTourApiDependencies.batchTournamentClient,
    espnSportsApiDependencies.activeTournamentClient,
    espnSportsApiDependencies.leaderboardClient,
    espnSportsApiDependencies.seasonClient,
    espnSportsApiDependencies.scheduleClient,
    espnSportsApiDependencies.tournamentClient,
    puttingPalsApiDependencies.activeTournamentClient,
    puttingPalsApiDependencies.leaderboardClient,
    puttingPalsApiDependencies.seasonClient,
    puttingPalsApiDependencies.scheduleClient,
  );
}
