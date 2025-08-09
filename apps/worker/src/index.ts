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
		const { results } = await env.DB.prepare('SELECT * FROM feed ORDER BY id DESC').run();
		return Response.json(results);
	},

	// The scheduled handler is invoked at the interval set in our wrangler.jsonc's
	// [[triggers]] configuration.
	async scheduled(event, env, ctx): Promise<void> {
		console.log('starting scheduled job');
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
			const rowData = results[0].data as string;
			if (leaderboardData !== rowData) {
				console.log('leaderboard changed');
				await env.DB.prepare('UPDATE leaderboard_v3 SET data = ?1 WHERE id = ?2').bind(JSON.stringify(players), leaderboardId).run();

				const response = await env.AI.run(
					'@cf/meta/llama-4-scout-17b-16e-instruct',
					{
						messages: [
							{
								role: 'system',
								// content: `You are a charismatic, funny and well-informed golf commentator.
								// 	You will receive 2 leaderboard JSON strings "leaderboardBefore" and "leaderboardAfter".
								// 	Your job is to compare the differences between them.
								// 	Try to figure out if a player that has improved their score has made a birdie or an eagle.
								// 	Make remarks if a player has improved their position.
								// 	Respond with the most significant difference. Do not use filler words.
								// 	If there are multiple changes just comment on the change of the person closest to the top of the leaderboard.
								// 	Imagine you are commentating to a real audience.
								// 	Reply with 1 or 2 sentences. Use golf language.
								// 	Do not use filler like "The most significant difference is ..." or "The only change is ...".
								// 	Just say what has changed and NOTHING ELSE."`,
								content: `
									You are a witty, sarcastic golf commentator in a private fantasy golf group. 
									You are reacting to changes between two snapshots of a PGA Tour event leaderboard.

									You will be given two JSON objects representing snapshots of the same PGA Tour leaderboard taken at different times during a tournament.  
									Your job:
									- Focus on the biggest or funniest moves (up or down the board).
									- Be concise: 2-4 sentences max.
									- Include playful jabs or encouragement.
									- Make it sound like you're watching live and enjoying the drama.
									- Avoid being polite or bland. It's okay to exaggerate or be absurd.
									- Always address the player(s) by name.
									- If a player drops in position, you can mock them.
									- If a player moves up, you can celebrate — but in a tongue-in-cheek way.

									Example tones:
									- “Looks like Rory's driver finally woke up — three birdies in five holes. About time.”
									- “Spieth is free-falling faster than my crypto portfolio. Somebody get him a parachute.”
									- “Scheffler's climbing the board like it's a ladder to the clubhouse bar.”
								`,
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
			} else {
				console.log('leaderboard did not change');
			}
		} else {
			console.log('unexpected state');
		}
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
