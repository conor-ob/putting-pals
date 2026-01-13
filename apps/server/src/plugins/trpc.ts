import {
  LeaderboardGraphQlClient,
  ScheduleGraphQlClient,
  TournamentGraphQlClient,
} from "@putting-pals/pga-tour-graphql";
import { PgaTourCheerioWebScraper } from "@putting-pals/pga-tour-scaper";
import {
  CompetitionServiceImpl,
  FeedServiceImpl,
  LeaderboardServiceImpl,
  ScheduleServiceImpl,
  ScheduleYearsServiceImpl,
  TournamentResolverImpl,
  TournamentServiceImpl,
} from "@putting-pals/putting-pals-core";
import { CompetitionRepositoryImpl } from "@putting-pals/putting-pals-data";
import {
  AggregatePostgresRepository,
  createDatabaseConnection,
  LeaderboardFeedPostgresRepository,
} from "@putting-pals/putting-pals-db";
import {
  ApolloCacheNormalizer,
  LeaderboardEventProcessorImpl,
  LeaderboardEventProcessorServiceImpl,
  LeaderboardHoleByHoleEventProcessorServiceImpl,
  TournamentEventProcessorImpl,
} from "@putting-pals/putting-pals-event";
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
  const leaderboardFeedRepository = new LeaderboardFeedPostgresRepository(
    database,
  );
  const aggregateRepository = new AggregatePostgresRepository(database);

  const feedService = new FeedServiceImpl(
    tournamentService,
    leaderboardService,
    tournamentResolver,
    leaderboardFeedRepository,
  );

  const normalizer = new ApolloCacheNormalizer();

  const leaderboardEventProcessor = new LeaderboardEventProcessorImpl(
    tournamentResolver,
    [
      new TournamentEventProcessorImpl(
        tournamentService,
        normalizer,
        aggregateRepository,
      ),
      new LeaderboardEventProcessorServiceImpl(
        leaderboardService,
        normalizer,
        aggregateRepository,
      ),
      new LeaderboardHoleByHoleEventProcessorServiceImpl(
        tournamentService,
        leaderboardService,
        normalizer,
        aggregateRepository,
      ),
    ],
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
