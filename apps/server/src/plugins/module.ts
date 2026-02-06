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
  const puttingPalsApiDependencies = injectPuttingPalsApiDependencies();
  const databaseDependencies = injectDatabaseDependencies();
  const pgaTourApiDependencies = injectPgaTourApiDependencies();
  const coreDependencies = injectCoreDependencies(
    puttingPalsApiDependencies.competitionRepository,
    databaseDependencies.activeTournamentRepository,
    databaseDependencies.leaderboardFeedRepository,
    databaseDependencies.leaderboardSnapshotRepository,
    databaseDependencies.featureFlagRepository,
    pgaTourApiDependencies.leaderboardClient,
    pgaTourApiDependencies.scheduleClient,
    pgaTourApiDependencies.tournamentClient,
    pgaTourApiDependencies.pgaTourWebScraper,
  );

  fastify.decorate("dependencies", coreDependencies);
}
