import { injectDependencies as injectEspnSportsApiDependencies } from "@putting-pals/espn-sports-api";
import { injectDependencies as injectPgaTourApiDependencies } from "@putting-pals/pga-tour-api";
import { injectDependencies as injectPuttingPalsApiDependencies } from "@putting-pals/putting-pals-api";
import { injectDependencies as injectCoreDependencies } from "@putting-pals/putting-pals-core";
import { injectDependencies as injectDatabaseDependencies } from "@putting-pals/putting-pals-db";
import type { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    dependencies: ReturnType<typeof injectCoreDependencies>;
  }
}

export default function (fastify: FastifyInstance) {
  const databaseDependencies = injectDatabaseDependencies();
  const pgaTourApiDependencies = injectPgaTourApiDependencies();
  const puttingPalsApiDependencies = injectPuttingPalsApiDependencies(
    pgaTourApiDependencies.leaderboardClient,
    pgaTourApiDependencies.batchTournamentClient,
    pgaTourApiDependencies.seasonClient,
    pgaTourApiDependencies.scheduleClient,
  );
  const espnSportsApiDependencies = injectEspnSportsApiDependencies();
  const coreDependencies = injectCoreDependencies(
    puttingPalsApiDependencies.competitionRepository,
    databaseDependencies.activeTournamentRepository,
    databaseDependencies.leaderboardFeedRepository,
    databaseDependencies.leaderboardSnapshotRepository,
    databaseDependencies.featureFlagRepository,
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

  fastify.decorate("dependencies", coreDependencies);
}
