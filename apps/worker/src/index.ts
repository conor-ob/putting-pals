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
import { PlayerRowV3 } from './graphql/types';

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
		const leaderboard = await leaderboardClient.getLeaderboard(leaderboardId);
		const players = leaderboard.players
			// .slice(0, 10)
			.filter((row) => row.__typename === 'PlayerRowV3')
			.map((row) => {
				const playerRow = row as PlayerRowV3;
				return {
					player: {
						name: playerRow.player.displayName,
					},
					scoringData: {
						position: playerRow.scoringData.position,
						totalScore: playerRow.scoringData.total,
						todayScore: playerRow.scoringData.score,
						holesPlayed: playerRow.scoringData.thru,
					},
				};
			});

		const { results } = await env.DB.prepare('SELECT * FROM leaderboard_v3 WHERE id = ?').bind(leaderboardId).run();

		if (results.length === 0) {
			await env.DB.prepare('INSERT INTO leaderboard_v3 (id, data) VALUES (?1, ?2)').bind(leaderboardId, JSON.stringify(players)).run();
		} else if (results.length === 1) {
			const leaderboardData = JSON.stringify(players);
			const rowData = results[0].data;
			if (leaderboardData !== rowData) {
				console.log('leaderboard changed');
				await env.DB.prepare('UPDATE leaderboard_v3 SET data = ?1 WHERE id = ?2').bind(JSON.stringify(players), leaderboardId).run();

				const response = await env.AI.run('@cf/meta/llama-4-scout-17b-16e-instruct', {
					prompt: `Can you find the differences between these 2 leaderboard objects and create a couple of sentences about what changed? before=${rowData}, after=${leaderboardData}. Pick the most significant change and talk about that. Do not include filler words like "The changes are as follows". Keep it short and simple and use golf lingo.`,
				});

				return Response.json(response);
			}
		}

		return Response.json(await env.DB.prepare('SELECT * FROM leaderboard_v3 WHERE id = ?').bind(leaderboardId).run());
	},

	// The scheduled handler is invoked at the interval set in our wrangler.jsonc's
	// [[triggers]] configuration.
	async scheduled(event, env, ctx): Promise<void> {
		const leaderboardId = 'R2025027';
		const leaderboardClient = new LeaderboardClient();
		const leaderboard = await leaderboardClient.getLeaderboard(leaderboardId);

		const { results } = await env.DB.prepare('SELECT * FROM leaderboard_v3 where id = ?').bind(leaderboardId).run();

		if (results.length === 0) {
			console.log('inserting into db');
			await env.DB.prepare('INSERT INTO leaderboard_v3 (id, data) VALUES (?1, ?2)').bind(leaderboardId, JSON.stringify(leaderboard)).run();
		} else if (results.length === 1) {
			const row = results[0];
		}

		console.log(`trigger fired at ${event.cron}: ${leaderboard.id}`);
	},
} satisfies ExportedHandler<Env>;
