import type { FastifyInstance } from "fastify";
import * as Sentry from "@sentry/node";

export default function (fastify: FastifyInstance) {
  Sentry.setupFastifyErrorHandler(fastify);
}
