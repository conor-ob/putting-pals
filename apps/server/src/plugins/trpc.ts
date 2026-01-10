import {
  LeaderboardGraphQlClient,
  ScheduleGraphQlClient,
  TournamentGraphQlClient,
} from "@putting-pals/pga-tour-api";
import { PgaTourCheerioWebScraper } from "@putting-pals/pga-tour-scaper/scraper";
import {
  type AppRouter,
  appRouter,
} from "@putting-pals/putting-pals-api/router";
import { createTrpcContext } from "@putting-pals/putting-pals-api/trpc";
import { CompetitionServiceImpl } from "@putting-pals/putting-pals-core/competition";
import { FeedServiceImpl } from "@putting-pals/putting-pals-core/feed";
import { LeaderboardServiceImpl } from "@putting-pals/putting-pals-core/leaderboard";
import { LeaderboardEventProcessorImpl } from "@putting-pals/putting-pals-core/leaderboard-event";
import { ScheduleServiceImpl } from "@putting-pals/putting-pals-core/schedule";
import { ScheduleYearsServiceImpl } from "@putting-pals/putting-pals-core/schedule-years";
import { TournamentServiceImpl } from "@putting-pals/putting-pals-core/tournament";
import { TournamentResolverImpl } from "@putting-pals/putting-pals-core/tournament-resolver";
import { CompetitionRepositoryImpl } from "@putting-pals/putting-pals-data";
import {
  createDatabaseConnection,
  LeaderboardFeedPostgresRepository,
  LeaderboardSnapshotPostgresRepository,
} from "@putting-pals/putting-pals-db/client";
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
  const tournamentClient = new TournamentGraphQlClient();
  const leaderboardClient = new LeaderboardGraphQlClient();
  const scheduleClient = new ScheduleGraphQlClient();
  const competitionRepository = new CompetitionRepositoryImpl();

  const pgaTourWebScraper = new PgaTourCheerioWebScraper();

  const competitionService = new CompetitionServiceImpl(competitionRepository);
  const tournamentResolver = new TournamentResolverImpl(
    tournamentClient,
    pgaTourWebScraper,
    competitionService,
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
  const scheduleService = new ScheduleServiceImpl(
    scheduleClient,
    competitionService,
  );
  const scheduleYearsService = new ScheduleYearsServiceImpl(
    scheduleClient,
    competitionService,
    tournamentService,
  );

  const database = createDatabaseConnection();
  const leaderboardSnapshotRepository =
    new LeaderboardSnapshotPostgresRepository(database);
  const leaderboardFeedRepository = new LeaderboardFeedPostgresRepository(
    database,
  );

  const feedService = new FeedServiceImpl(
    tournamentService,
    leaderboardService,
    tournamentResolver,
    leaderboardFeedRepository,
  );

  const leaderboardEventProcessor = new LeaderboardEventProcessorImpl(
    tournamentService,
    leaderboardService,
    tournamentResolver,
    leaderboardSnapshotRepository,
    leaderboardFeedRepository,
  );

  return createTrpcContext({
    tournamentService,
    competitionService,
    leaderboardService,
    leaderboardEventProcessor,
    feedService,
    scheduleService,
    scheduleYearsService,
  });
}
