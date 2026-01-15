import type {
  LeaderboardAggregateQuery,
  LeaderboardHoleByHoleAggregateQuery,
  TournamentAggregateQuery,
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
  function matchesField(
    path: string,
    field: NestedPaths<T>,
    matchType: string,
  ): boolean {
    const pattern = new RegExp(
      `^/${typename}:[a-zA-Z0-9-]+/${field}${matchType}`,
    );
    return pattern.test(path);
  }

  return {
    matchesLooseField(path: string, field: NestedPaths<T>): boolean {
      return matchesField(path, field, "(?:/|$)");
    },
    matchesExactField(path: string, field: NestedPaths<T>): boolean {
      return matchesField(path, field, "$");
    },
  };
}

export const matchesTournamentField =
  createFieldMatcher<
    NonNullable<TournamentAggregateQuery["tournamentAggregate"]>
  >("Tournament");

export const matchesPuttingPalsPlayerRowField = createFieldMatcher<
  Extract<
    NonNullable<
      LeaderboardAggregateQuery["leaderboardAggregate"]["players"][number]
    >,
    { __typename: "PuttingPalsPlayerRow" }
  >
>("PuttingPalsPlayerRow");

export const matchesLeaderboardHoleByHoleField = createFieldMatcher<
  NonNullable<
    LeaderboardHoleByHoleAggregateQuery["leaderboardHoleByHoleAggregate"]
  >
>("LeaderboardHoleByHole");
