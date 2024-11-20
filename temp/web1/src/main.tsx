import "./instrument";

import React from "react";
import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

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
