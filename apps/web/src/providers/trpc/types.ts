import type { AppRouter } from "@putting-pals/putting-pals-trpc";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export type Leaderboard = RouterOutputs["leaderboard"]["getById"];

export type LeaderboardRow = Leaderboard["players"][number];

export type InformationRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "InformationRow" }
>;

export type PlayerRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "PlayerRow" }
>;

export type PuttingPalsPlayerRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "PuttingPalsPlayerRow" }
>;

export type RoundStatusColor =
  RouterOutputs["tournament"]["getById"]["status"]["roundStatusColor"];

export type TourCode = RouterOutputs["tour"]["getTours"][number]["tourCode"];

export type Tournament = RouterOutputs["tournament"]["getById"];
