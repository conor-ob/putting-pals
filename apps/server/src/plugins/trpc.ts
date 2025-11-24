import { createTrpcContext } from "@putting-pals/putting-pals-api/context";
import type { AppRouter } from "@putting-pals/putting-pals-api/router";
import { appRouter } from "@putting-pals/putting-pals-api/router";
import type {
  CreateFastifyContextOptions,
  FastifyTRPCPluginOptions,
} from "@trpc/server/adapters/fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import type { FastifyInstance } from "fastify";
import { env } from "~/env/schema";

export default function (fastify: FastifyInstance) {
  fastify.register(fastifyTRPCPlugin, {
    prefix: "/trpc",
    trpcOptions: {
      router: appRouter,
      createContext: (opts: CreateFastifyContextOptions) =>
        createTrpcContext({
          opts,
          apiKey: env.PGA_TOUR_API_KEY,
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
