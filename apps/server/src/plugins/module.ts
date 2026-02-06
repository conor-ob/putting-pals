import { injectDependencies as injectEspnRestApiDependencies } from "@putting-pals/espn-rest-api";
import { injectDependencies as injectPgaTourGraphQlDependencies } from "@putting-pals/pga-tour-graphql";
import { injectDependencies as injectPgaTourScraperDependencies } from "@putting-pals/pga-tour-scaper";
import { injectDependencies as injectCoreDependencies } from "@putting-pals/putting-pals-core";
import { injectDependencies as injectDataDependencies } from "@putting-pals/putting-pals-data";
import { injectDependencies as injectDatabaseDependencies } from "@putting-pals/putting-pals-db";
import type { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    dependencies: ReturnType<typeof injectCoreDependencies>;
  }
}

export default function (fastify: FastifyInstance) {
  const dataDependencies = injectDataDependencies();
  const databaseDependencies = injectDatabaseDependencies();
  const pgaTourGraphQlDependencies = injectPgaTourGraphQlDependencies();
  const pgaTourScraperDependencies = injectPgaTourScraperDependencies();
  const espnRestApiDependencies = injectEspnRestApiDependencies();
  const coreDependencies = injectCoreDependencies(
    dataDependencies.competitionRepository,
    databaseDependencies.activeTournamentRepository,
    databaseDependencies.leaderboardFeedRepository,
    databaseDependencies.leaderboardSnapshotRepository,
    databaseDependencies.featureFlagRepository,
    pgaTourGraphQlDependencies.leaderboardClient,
    pgaTourGraphQlDependencies.scheduleClient,
    pgaTourGraphQlDependencies.tournamentClient,
    pgaTourScraperDependencies.pgaTourWebScraper,
    espnRestApiDependencies.espnScheduleClient,
  );

  fastify.decorate("dependencies", coreDependencies);
}
