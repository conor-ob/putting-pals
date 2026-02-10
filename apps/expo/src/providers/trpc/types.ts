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

export type PlayerRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "PlayerRow" }
>;

export type PuttingPalsPlayerRow = Extract<
  RouterOutputs["leaderboard"]["getById"]["players"][number],
  { __typename: "PuttingPalsPlayerRow" }
>;

export type RoundStatus =
  RouterOutputs["tournament"]["getById"]["status"]["roundStatus"];

export type RoundStatusChangedV1 =
  RouterOutputs["feed"]["get"]["events"][number]["payload"] & {
    __typename: "RoundStatusChangedV1";
  };

export type RoundStatusColor =
  RouterOutputs["tournament"]["getById"]["status"]["roundStatusColor"];

export type Tour = RouterOutputs["tour"]["getTours"][number];

export type TourCode = RouterOutputs["tour"]["getTours"][number]["tourCode"];

export type Tournament = RouterOutputs["tournament"]["getById"];

export type TournamentStatusChangedV1 =
  RouterOutputs["feed"]["get"]["events"][number]["payload"] & {
    __typename: "TournamentStatusChangedV1";
  };
