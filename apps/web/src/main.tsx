import "./instrument";

import { registerSW } from "virtual:pwa-register";
import * as Sentry from "@sentry/react";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

registerSW({
  immediate: true,
  onNeedRefresh() {
    // biome-ignore lint/suspicious/noConsole: logging
    console.log("onNeedRefresh");
  },
  onOfflineReady() {
    // biome-ignore lint/suspicious/noConsole: logging
    console.log("onOfflineReady");
  },
  onRegisteredSW(swScriptUrl, registration) {
    // biome-ignore lint/suspicious/noConsole: logging
    console.log("onRegisteredSW", swScriptUrl, registration);
  },
  onRegisterError(error) {
    // biome-ignore lint/suspicious/noConsole: logging
    console.error("onRegisterError", error);
  },
});

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root container missing in the DOM");
}
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary fallback={<p>An error has occurred</p>}>
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
);
