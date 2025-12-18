import FastifyCors from "@fastify/cors";
import type { FastifyInstance } from "fastify";
import { env } from "~/env/schema";

export default function (fastify: FastifyInstance) {
  fastify.register(FastifyCors, {
    origin: env.ORIGIN,
    credentials: true,
  });
}
