import type {
  LeaderboardHoleByHoleQuery,
  LeaderboardV3Query,
  TournamentQuery,
} from "@putting-pals/putting-pals-api";

type NestedPaths<T, Prefix extends string = ""> = T extends readonly unknown[]
  ? never
  : T extends object
    ? {
        [K in keyof T & string]: K extends "__typename"
          ? never
          : NonNullable<T[K]> extends readonly unknown[]
            ? `${Prefix}${K}`
            : T[K] extends object | null | undefined
              ?
                  | `${Prefix}${K}`
                  | NestedPaths<NonNullable<T[K]>, `${Prefix}${K}/`>
              : `${Prefix}${K}`;
      }[keyof T & string]
    : never;

function createFieldMatcher<T extends { readonly __typename: string }>(
  typename: T["__typename"],
) {
  return function matchesField(path: string, field: NestedPaths<T>): boolean {
    const pattern = new RegExp(`^/${typename}:[a-zA-Z0-9-]+/${field}$`);
    return pattern.test(path);
  };
}

export const matchesTournamentField =
  createFieldMatcher<NonNullable<TournamentQuery["tournament"]>>("Tournament");

export const matchesPuttingPalsPlayerRowField = createFieldMatcher<
  Extract<
    NonNullable<LeaderboardV3Query["leaderboardV3"]["players"][number]>,
    { __typename: "PuttingPalsPlayerRow" }
  >
>("PuttingPalsPlayerRow");

export const matchesLeaderboardHoleByHoleField = createFieldMatcher<
  NonNullable<LeaderboardHoleByHoleQuery["leaderboardHoleByHole"]>
>("LeaderboardHoleByHole");
