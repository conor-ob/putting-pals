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

export type InformationRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "InformationRow" }
>;

export type PlayerRowV3 = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "PlayerRowV3" }
>;

export type PuttingPalsPlayerRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "PuttingPalsPlayerRow" }
>;

export type RoundStatus = RouterOutputs["tournament"]["getById"]["roundStatus"];

export type RoundStatusChangedV1 =
  RouterOutputs["feed"]["get"]["items"][number]["payload"] & {
    __typename: "RoundStatusChangedV1";
  };

export type RoundStatusColor =
  RouterOutputs["tournament"]["getById"]["roundStatusColor"];

export type TourCode = RouterOutputs["tour"]["getTours"][number]["tourCode"];

export type Tournament = RouterOutputs["tournament"]["getById"];

export type TournamentStatusChangedV1 =
  RouterOutputs["feed"]["get"]["items"][number]["payload"] & {
    __typename: "TournamentStatusChangedV1";
  };
