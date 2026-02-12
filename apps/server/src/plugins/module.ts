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
    pgaTourApiDependencies.tournamentClient,
    pgaTourApiDependencies.batchTournamentClient,
    pgaTourApiDependencies.scheduleClient,
  );
  const espnSportsApiDependencies = injectEspnSportsApiDependencies();
  const coreDependencies = injectCoreDependencies(
    {
      activeTournamentRepository:
        databaseDependencies.activeTournamentRepository,
      leaderboardFeedRepository: databaseDependencies.leaderboardFeedRepository,
      leaderboardSnapshotRepository:
        databaseDependencies.leaderboardSnapshotRepository,
      competitionRepository: puttingPalsApiDependencies.competitionRepository,
      featureFlagRepository: databaseDependencies.featureFlagRepository,
    },
    {
      activeTournamentClient: pgaTourApiDependencies.activeTournamentClient,
      leaderboardClient: pgaTourApiDependencies.leaderboardClient,
      scheduleClient: pgaTourApiDependencies.scheduleClient,
      tournamentClient: pgaTourApiDependencies.tournamentClient,
      batchTournamentClient: pgaTourApiDependencies.batchTournamentClient,
    },
    {
      activeTournamentClient: espnSportsApiDependencies.activeTournamentClient,
      leaderboardClient: espnSportsApiDependencies.leaderboardClient,
      scheduleClient: espnSportsApiDependencies.scheduleClient,
      tournamentClient: espnSportsApiDependencies.tournamentClient,
    },
    {
      tournamentClient: puttingPalsApiDependencies.tournamentClient,
      batchTournamentClient: puttingPalsApiDependencies.batchTournamentClient,
      activeTournamentClient: puttingPalsApiDependencies.activeTournamentClient,
      leaderboardClient: puttingPalsApiDependencies.leaderboardClient,
      scheduleClient: puttingPalsApiDependencies.scheduleClient,
    },
  );

  fastify.decorate("dependencies", coreDependencies);
}
