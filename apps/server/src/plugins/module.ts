import {
  type Dependencies,
  injectDependencies,
} from "@putting-pals/putting-pals-module";
import type { FastifyInstance } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    dependencies: Dependencies;
  }
}

export default function (fastify: FastifyInstance) {
  fastify.decorate("dependencies", injectDependencies());
}
