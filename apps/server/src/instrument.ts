import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

import { env } from "./env/schema";

Sentry.init({
  enabled: env.NODE_ENV === "production",
  environment: env.NODE_ENV,
  dsn: env.SENTRY_DSN,
  release: `${env.SENTRY_PROJECT}@${env.GIT_COMMIT_SHA}`,
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
  ],

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
