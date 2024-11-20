import type {
  CreateFastifyContextOptions,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import type { FastifyInstance } from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";

import type { AppRouter } from "@pkg/api/types";
import { createTrpcContext } from "@pkg/api/context";
import { appRouter } from "@pkg/api/root";

export default function (fastify: FastifyInstance) {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: appRouter,
      createContext: (opts: CreateFastifyContextOptions) =>
        createTrpcContext({
          opts,
        }),
      onError({ path, type, error }) {
        fastify.log.error(
          error,
          `Error in tRPC ${type} handler on path '${path}': ${error.message}`,
        );
      },
    } satisfies FastifyTRPCPluginOptions<AppRouter>["trpcOptions"],
  });
}
