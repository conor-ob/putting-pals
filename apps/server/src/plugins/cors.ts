import type { FastifyInstance } from "fastify";
import FastifyCors from "@fastify/cors";

import { env } from "../env/schema";

export default function (fastify: FastifyInstance) {
  fastify.register(FastifyCors, {
    origin: env.ORIGIN,
    credentials: true,
  });
}
