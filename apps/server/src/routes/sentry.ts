import type { FastifyInstance } from "fastify";

export default function (fastify: FastifyInstance) {
  fastify.get("/sentry", (_req, _res) => {
    throw new Error("Sentry test error");
  });
}
