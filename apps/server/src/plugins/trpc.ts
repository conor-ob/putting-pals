import {
  type AppRouter,
  appRouter,
} from "@putting-pals/putting-pals-api/router";
import { createTrpcContext } from "@putting-pals/putting-pals-api/trpc";
import { LeaderboardEventProcessor } from "@putting-pals/putting-pals-core/leaderboard-event";
import {
  db,
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
      createContext(_: CreateFastifyContextOptions) {
        const leaderboardSnapshotRepository =
          new LeaderboardSnapshotPostgresRepository(db);
        const leaderboardFeedRepository = new LeaderboardFeedPostgresRepository(
          db,
        );
        const leaderboardEventProcessor = new LeaderboardEventProcessor(
          leaderboardSnapshotRepository,
          leaderboardFeedRepository,
        );
        return createTrpcContext({
          leaderboardEventProcessor,
          leaderboardFeedRepository,
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
