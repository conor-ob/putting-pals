import "./instrument";

import { env } from "./env/schema";
import { createServer } from "./server";

const server = createServer({
  logger: {
    level: env.NODE_ENV === "production" ? "warn" : "debug",
    transport: {
      target: "@mgcrea/pino-pretty-compact",
      options: { translateTime: "HH:MM:ss Z", ignore: "pid,hostname" },
    },
  },
  disableRequestLogging: true,
});

if (env.NODE_ENV === "production") {
  server.listen({ host: "::", port: env.PORT }, (err, address) => {
    if (err) {
      server.log.error("Error starting server: %s", err);
      server.log.error("Stacktrace: %s", err.stack);
      process.exit(1);
    }
    server.log.info(`Server listening on ${address} 🚀`);
  });
}

export const viteNodeApp = server;
