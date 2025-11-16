import type { FastifyInstance } from "fastify";
import FastifyRateLimit from "@fastify/rate-limit";

export default function (fastify: FastifyInstance) {
  fastify.register(FastifyRateLimit, {
    max: 200,
    timeWindow: "1 minute",
    // TODO
    // keyGenerator: function (request) {
    //   return request.headers['x-real-ip'] // nginx
    //   || request.headers['x-client-ip'] // apache
    //   || request.headers['x-forwarded-for'] // use this only if you trust the header
    //   || request.session.username // you can limit based on any session value
    //   || request.ip // fallback to default
    // }
  });
}
