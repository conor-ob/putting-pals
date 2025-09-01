/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@pkg/api/router";
import { createTrpcContext } from "@pkg/api/context";

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const url = new URL(request.url);

    console.log('url', url)

		if (url.pathname.startsWith("/trpc")) {
      return fetchRequestHandler({
        endpoint: "/trpc",
        req: request,
        router: appRouter,
        createContext: createTrpcContext,
      });
    }

		return env.ASSETS.fetch(request);
	},
} satisfies ExportedHandler<Env>;
