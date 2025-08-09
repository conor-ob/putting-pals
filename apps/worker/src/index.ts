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
		return handleRequest(env);
	},

	// The scheduled handler is invoked at the interval set in our wrangler.jsonc's
	// [[triggers]] configuration.
	async scheduled(event, env, ctx): Promise<void> {
		handleRequest(env);
	},
} satisfies ExportedHandler<Env>;

async function handleRequest(env: Env) {
	const leaderboardId = 'R2025027';
	const leaderboardClient = new LeaderboardClient();
	const leaderboard = await leaderboardClient.getLeaderboard(leaderboardId);
	const players = leaderboard.players
		.slice(0, 39)
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
					// todayScore: playerRow.scoringData.score,
					// holesPlayed: playerRow.scoringData.thru,
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

			const response = await env.AI.run(
				'@cf/meta/llama-4-scout-17b-16e-instruct',
				{
					messages: [
						{
							role: 'system',
							content:
								'You are a charismatic, funny and well informed golf commentator. You will receive 2 leaderboard JSON objects and analyse the differences between them. Respond with the most significant difference. Do not use filler words. Imagine you are commentating to a real audience. Reply with 1 or 2 sentences. Use golf language. Do not use filler like "The most significant difference is ..." or "The only change is ..." just say what has changed and NOTHING ELSE."',
						},
						{
							role: 'user',
							content: JSON.stringify({ leaderboardBefore: rowData, leaderboardAfter: leaderboardData }),
						},
					],
					max_tokens: 1024,
				},
				{
					returnRawResponse: true,
				},
			);

			const json = await response.json();

			const aiResponse = (json as { response: string }).response;

			await env.DB.prepare('INSERT INTO feed (post) VALUES (?)').bind(aiResponse).run();

			return Response.json(json);
		} else {
			console.log('leaderboard did not change');
		}
	}

	return Response.json(await env.DB.prepare('SELECT * FROM leaderboard_v3 WHERE id = ?').bind(leaderboardId).run());
}
