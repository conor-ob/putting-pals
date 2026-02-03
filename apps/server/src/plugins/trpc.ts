import { injectDependencies as injectPgaTourGraphQlDependencies } from "@putting-pals/pga-tour-graphql";
import { injectDependencies as injectPgaTourScraperDependencies } from "@putting-pals/pga-tour-scaper";
import { injectDependencies as injectCoreDependencies } from "@putting-pals/putting-pals-core";
import { injectDependencies as injectDataDependencies } from "@putting-pals/putting-pals-data";
import { injectDependencies as injectDatabaseDependencies } from "@putting-pals/putting-pals-db";
import {
  type AppRouter,
  appRouter,
  createTrpcContext,
} from "@putting-pals/putting-pals-trpc";
import type {
  CreateFastifyContextOptions,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import type { FastifyInstance } from "fastify";

export default function (fastify: FastifyInstance) {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: appRouter,
      createContext({
        req: _req,
        res: _res,
        info: _info,
      }: CreateFastifyContextOptions) {
        return createContext();
      },
      onError({ path, type, error }) {
        fastify.log.error(
          error,
          `Error in tRPC ${type} handler on path '${path}': ${error.message}`,
        );
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
  });
}

function createContext() {
  const dataDependencies = injectDataDependencies();
  const databaseDependencies = injectDatabaseDependencies();
  const pgaTourGraphQlDependencies = injectPgaTourGraphQlDependencies();
  const pgaTourScraperDependencies = injectPgaTourScraperDependencies();
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
  );

  return createTrpcContext({
    tournamentService: coreDependencies.tournamentService,
    competitionService: coreDependencies.competitionService,
    leaderboardService: coreDependencies.leaderboardService,
    leaderboardEventProcessor: coreDependencies.leaderboardEventProcessor,
    feedService: coreDependencies.feedService,
    scheduleService: coreDependencies.scheduleService,
    scheduleYearsService: coreDependencies.scheduleYearsService,
    tourService: coreDependencies.tourService,
  });
}
