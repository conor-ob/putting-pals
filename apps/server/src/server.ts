import type { FastifyInstance, FastifyServerOptions } from "fastify";
import type { IncomingMessage, Server, ServerResponse } from "http";
import Fastify from "fastify";

import registerCorsPlugin from "./plugins/cors";
import registerLoggerPlugin from "./plugins/logger";
import registerRateLimitPlugin from "./plugins/ratelimit";
import registerSentryPlugin from "./plugins/sentry";
import registerTrpcPlugin from "./plugins/trpc";
import registerHealthCheckRoute from "./routes/health";
import registerRedirectRoute from "./routes/redirect";
import registerSentryRoute from "./routes/sentry";

export function createServer(opts?: FastifyServerOptions) {
  const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> =
    Fastify(opts);

  registerSentryPlugin(fastify);
  registerLoggerPlugin(fastify);
  registerCorsPlugin(fastify);
  registerRateLimitPlugin(fastify);
  registerTrpcPlugin(fastify);

  registerHealthCheckRoute(fastify);
  registerRedirectRoute(fastify);
  registerSentryRoute(fastify);

  return fastify;
}
