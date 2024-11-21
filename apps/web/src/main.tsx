import "./instrument";

import React from "react";
import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";

import App from "./App";

registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log("onNeedRefresh");
  },
  onOfflineReady() {
    console.log("onOfflineReady");
  },
  onRegisteredSW(swScriptUrl, registration) {
    console.log("onRegisteredSW", swScriptUrl, registration);
  },
  onRegisterError(error) {
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
