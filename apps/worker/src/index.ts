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

import { LeaderboardClient } from './graphql/client/leaderboard';

/**
 * Welcome to Cloudflare Workers!
 *
 * This is a template for a Scheduled Worker: a Worker that can run on a
 * configurable interval:
 * https://developers.cloudflare.com/workers/platform/triggers/cron-triggers/
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to see your Worker in action
 * - Run `npm run deploy` to publish your Worker
 *
 * Bind resources to your Worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default {
	async fetch(request, env, ctx): Promise<Response> {
		const leaderboardId = 'R2025027';
		const leaderboardClient = new LeaderboardClient();
		const leaderboard = await leaderboardClient.getLeaderboard('R2025027');

		const { results } = await env.DB.prepare('SELECT * FROM leaderboard_v3 where id = ?').bind(leaderboardId).run();

		if (results.length === 0) {
			await env.DB.prepare('INSERT INTO leaderboard_v3 (id, data) VALUES (?1, ?2)').bind(leaderboardId, JSON.stringify(leaderboard)).run();
		}

		return new Response(
			`Results: ${JSON.stringify(await env.DB.prepare('SELECT * FROM leaderboard_v3 where id = ?').bind(leaderboardId).run(), null, 2)}`,
		);
	},

	// The scheduled handler is invoked at the interval set in our wrangler.jsonc's
	// [[triggers]] configuration.
	async scheduled(event, env, ctx): Promise<void> {
		const leaderboardId = 'R2025027';
		const leaderboardClient = new LeaderboardClient();
		const leaderboard = await leaderboardClient.getLeaderboard('R2025027');
		console.log(`trigger fired at ${event.cron}: ${leaderboard.id}`);
	},
} satisfies ExportedHandler<Env>;
