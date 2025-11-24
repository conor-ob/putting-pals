import type { IncomingMessage, Server, ServerResponse } from "node:http";
import type { FastifyInstance, FastifyServerOptions } from "fastify";
import Fastify from "fastify";

import registerCorsPlugin from "~/plugins/cors";
import registerLoggerPlugin from "~/plugins/logger";
import registerRateLimitPlugin from "~/plugins/ratelimit";
import registerTrpcPlugin from "~/plugins/trpc";
import registerHealthCheckRoute from "~/routes/health";

export function createServer(opts?: FastifyServerOptions) {
  const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> =
    Fastify(opts);

  registerLoggerPlugin(fastify);
  registerCorsPlugin(fastify);
  registerRateLimitPlugin(fastify);
  registerTrpcPlugin(fastify);
  registerHealthCheckRoute(fastify);

  return fastify;
}
