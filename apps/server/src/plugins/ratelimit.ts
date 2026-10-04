import FastifyRateLimit from "@fastify/rate-limit";
import type { FastifyInstance } from "fastify";

export default function (fastify: FastifyInstance) {
  fastify.register(FastifyRateLimit, {
    max: 200,
    timeWindow: "1 minute",
    // the real client ip, set by cloudflare and passed through by caddy.
    // falls back to the peer ip for requests that don't come through cloudflare
    // (e.g. jobs calling us over railway's private network)
    keyGenerator: (request) => {
      const ip = request.headers["cf-connecting-ip"];
      return typeof ip === "string" && ip ? ip : request.ip;
    },
  });
}
