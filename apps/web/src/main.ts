import { trpc } from "./trpc";

const app = document.querySelector<HTMLDivElement>("#app");
if (app) {
  app.innerHTML =
    '<h1>Hello, world!</h1><pre id="tours">Loading tours...</pre>';

  trpc.tour.getTours
    .query()
    .then((tours) => {
      const pre = document.querySelector<HTMLPreElement>("#tours");
      if (pre) {
        pre.textContent = JSON.stringify(tours, null, 2);
      }
    })
    .catch((error: unknown) => {
      const pre = document.querySelector<HTMLPreElement>("#tours");
      if (pre) {
        pre.textContent = `Failed to load tours: ${String(error)}`;
      }
    });
}
