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
import type { AppRouter } from "@putting-pals/putting-pals-api/router";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";

export default {
  async fetch(_request, env, _ctx): Promise<Response> {
    return Response.json({ env });
  },

  async scheduled(controller, env, _ctx): Promise<void> {
    const client = createTRPCClient<AppRouter>({
      links: [
        httpBatchLink({
          url: env.TRPC_API_URL,
          transformer: superjson,
        }),
      ],
    });

    const response = await client.event.processEvent.mutate({
      cron: controller.cron,
      scheduledTime: controller.scheduledTime,
    });
    // biome-ignore lint/suspicious/noConsole: testing
    console.log("processed event", response);
  },
} satisfies ExportedHandler<Env>;
