import type { FastifyInstance } from "fastify";

import { greeting } from "@pkg/utils/greeting";

import { env } from "../env/schema";

export default function (fastify: FastifyInstance) {
  fastify.get("/health", (_req, res) => {
    try {
      const healthCheck = {
        env: env.NODE_ENV,
        message: "OK",
        uptime: process.uptime(),
        timestamp: Date.now(),
        greeting: greeting("Fastify"),
      };

      res.status(200).send(healthCheck);
    } catch (e) {
      res.status(503).send(e);
    }
  });
}
