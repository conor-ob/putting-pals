import type { FastifyInstance } from "fastify";
import fastifyRequestLogger from "@mgcrea/fastify-request-logger";

export default function (fastify: FastifyInstance) {
  fastify.register(fastifyRequestLogger);
}
