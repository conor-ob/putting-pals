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
      server.log.error(err, "Error starting server: %s");
      server.log.error(err.stack, "Stacktrace: %s");
      process.exit(1);
    }
    server.log.info(`Server listening on ${address} 🚀`);
  });
}

export const viteNodeApp = server;
