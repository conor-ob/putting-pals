import * as Sentry from "@sentry/react";

Sentry.init({
  enabled: import.meta.env.NODE_ENV === "production",
  environment: import.meta.env.NODE_ENV as string,
  dsn: import.meta.env.SENTRY_DSN as string,
  release: `${import.meta.env.SENTRY_PROJECT}@${import.meta.env.GIT_COMMIT_SHA}`,
  integrations: [
    // Registers and configures the Tracing integration,
    // which automatically instruments your application to monitor its
    // performance, including custom Angular routing instrumentation
    Sentry.browserTracingIntegration(),
    // Registers the Replay integration,
    // which automatically captures Session Replays
    Sentry.replayIntegration(),
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: [/^\/api/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
