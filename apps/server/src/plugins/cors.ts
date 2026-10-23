import FastifyCors from "@fastify/cors";
import type { FastifyInstance } from "fastify";
import { env } from "~/env/schema";

// In production both frontends reach the server same-origin through their
// Caddy /api proxy, and native apps don't enforce CORS. Only Expo web in
// local development (localhost:8081 -> localhost:4000) is cross-origin
export default function (fastify: FastifyInstance) {
  if (env.NODE_ENV !== "development") {
    return;
  }
  fastify.register(FastifyCors, {
    origin: /^http:\/\/localhost:\d+$/,
  });
}
