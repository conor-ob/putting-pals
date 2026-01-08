import type {
  ApiLeaderboard,
  ApiLeaderboardHoleByHole,
  ApiTournament,
  RoundStatus,
  RoundStatusColor,
  Sdk,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";

export type Leader = Awaited<ReturnType<Sdk["LeaderboardV3"]>>["leaderboardV3"];

// Auto-generated hash - run `pnpm update:snapshot` after changing LeaderboardSnapshot
export const LeaderboardSnapshotHash = "bdb266bf" as const;
export const LeaderboardSnapshotVersion = 1 as const;

export type LeaderboardSnapshot = {
  tournament: ApiTournament;
  leaderboard: Omit<ApiLeaderboard, "players"> & {
    players: ReadonlyArray<
      | ApiLeaderboard["players"][number]
      | {
          __typename: "PuttingPalsPlayerRow";
          id: string;
          leaderboardSortOrder: number;
          picks: string[];
          player: {
            countryFlag: string;
            displayName: string;
            id: string;
            shortName: string;
          };
          scoringData: {
            position: string;
            total: string;
            totalSort: number;
          };
        }
    >;
  };
  leaderboardHoleByHole: ApiLeaderboardHoleByHole;
};

type Event<TName extends string, T> = {
  __typename: TName;
} & T;

type ChangeEvent<TName extends string, T> = {
  __typename: TName;
  before: T;
  after: T;
};

export type RoundStatusChangedV1 = ChangeEvent<
  "RoundStatusChangedV1",
  {
    roundDisplay: string;
    roundStatus: RoundStatus;
    roundStatusColor: RoundStatusColor;
    roundStatusDisplay: string;
  }
>;

export type TournamentStatusChangedV1 = ChangeEvent<
  "TournamentStatusChangedV1",
  {
    tournamentStatus: TournamentStatus;
  }
>;

export type LeaderChangedV1 = ChangeEvent<
  "LeaderChangedV1",
  {
    players:
      | {
          __typename: "PlayerRowV3";
          player: {
            id: string;
          };
          scoringData: {
            position: string;
            total: string;
            totalSort: number;
            thru: string;
            thruSort: number;
            score: string;
            scoreSort: number;
          };
        }[]
      | {
          __typename: "PuttingPalsPlayerRow";
          player: {
            id: string;
          };
          scoringData: {
            position: string;
            total: string;
            totalSort: number;
          };
        }[];
  }
>;

export type PlayerDisqualifiedV1 = Event<
  "PlayerDisqualifiedV1",
  {
    players: {
      id: string;
    }[];
  }
>;

export type PlayerMissedCutV1 = Event<
  "PlayerMissedCutV1",
  {
    players: {
      id: string;
    }[];
  }
>;

export type PlayerWithdrawnV1 = Event<
  "PlayerWithdrawnV1",
  {
    players: {
      id: string;
    }[];
  }
>;
