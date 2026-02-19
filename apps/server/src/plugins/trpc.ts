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
        return createTrpcContext({
          competitionService: fastify.dependencies.competitionService,
          feedService: fastify.dependencies.feedService,
          leaderboardEventProcessor:
            fastify.dependencies.leaderboardEventProcessor,
          leaderboardService: fastify.dependencies.leaderboardService,
          scheduleService: fastify.dependencies.scheduleService,
          seasonService: fastify.dependencies.seasonService,
          tourService: fastify.dependencies.tourService,
          tournamentService: fastify.dependencies.tournamentService,
          batchTournamentService: fastify.dependencies.batchTournamentService,
          schemaInferenceObserver: fastify.dependencies.schemaInferenceObserver,
        });
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
