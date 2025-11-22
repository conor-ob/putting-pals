import fastifyRequestLogger from "@mgcrea/fastify-request-logger";
import type { FastifyInstance } from "fastify";

export default function (fastify: FastifyInstance) {
  fastify.register(fastifyRequestLogger);
}
