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
import { LeaderboardClient } from '@pkg/graphql/leaderboard';

export default {
	async fetch(req) {
		const leaderboardClient = new LeaderboardClient();
		const leaderboard = await leaderboardClient.getLeaderboard('R2025027');
		return Response.json(leaderboard);
	},

	// The scheduled handler is invoked at the interval set in our wrangler.jsonc's
	// [[triggers]] configuration.
	async scheduled(event, env, ctx): Promise<void> {
		const leaderboardClient = new LeaderboardClient();
		const leaderboard = await leaderboardClient.getLeaderboard('R2025027');
		console.log(leaderboard);

		console.log(`trigger fired at ${event.cron}: ${leaderboard.id}`);
	},
} satisfies ExportedHandler<Env>;
