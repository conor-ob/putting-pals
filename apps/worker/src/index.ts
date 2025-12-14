/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to see your Worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { drizzle } from "drizzle-orm/d1";
import { leaderboardFeedTable } from "./db/schema";

export default {
  // biome-ignore lint/correctness/noUnusedFunctionParameters: dev
  async fetch(request, env, ctx): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/leaderboard-feed") {
      const db = drizzle(env.DB);
      const result = await db
        .insert(leaderboardFeedTable)
        .values({
          tournamentId: "R2025100",
          tourCode: "P",
        })
        .returning();
      return Response.json(result);
    }
    const url = new URL(request.url);
    url.pathname = "/__scheduled";
    url.searchParams.append("cron", "* * * * *");
    return new Response(
      `To test the scheduled handler, ensure you have used the "--test-scheduled" then try running "curl ${url.href}".`,
    );
  },

  // The scheduled handler is invoked at the interval set in our wrangler.jsonc's
  // [[triggers]] configuration.
  // biome-ignore lint/correctness/noUnusedFunctionParameters: dev
  async scheduled(event, env, ctx): Promise<void> {
    const db = drizzle(env.DB);
    const result = await db
      .insert(leaderboardFeedTable)
      .values({
        tournamentId: "R2025100",
        tourCode: "P",
      })
      .returning();
    // biome-ignore lint/suspicious/noConsole: dev
    console.log("result", result);
    // A Cron Trigger can make requests to other endpoints on the Internet,
    // publish to a Queue, query a D1 Database, and much more.
    //
    // We'll keep it simple and make an API call to a Cloudflare API:
    const resp = await fetch("https://api.cloudflare.com/client/v4/ips");
    const wasSuccessful = resp.ok ? "success" : "fail";

    // You could store this result in KV, write to a D1 Database, or publish to a Queue.
    // In this template, we'll just log the result:
    // biome-ignore lint/suspicious/noConsole: dev
    console.log(`trigger fired at ${event.cron}: ${wasSuccessful}`);
  },
} satisfies ExportedHandler<Env>;
