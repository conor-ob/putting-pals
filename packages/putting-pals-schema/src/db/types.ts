import type {
  ApiLeaderboard,
  ApiLeaderboardHoleByHole,
  ApiTournament,
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";

// Auto-generated hash - run `pnpm update:snapshot` after changing LeaderboardSnapshot
export const LeaderboardSnapshotHash = "465419f4" as const;
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

export type RoundStatusChangedV1 = {
  __typename: "RoundStatusChangedV1";
  before: {
    roundDisplay: string;
    roundStatus: RoundStatus;
    roundStatusColor: RoundStatusColor;
    roundStatusDisplay: string;
  };
  after: {
    roundDisplay: string;
    roundStatus: RoundStatus;
    roundStatusColor: RoundStatusColor;
    roundStatusDisplay: string;
  };
};

export type TournamentStatusChangedV1 = {
  __typename: "TournamentStatusChangedV1";
  tournamentName: string;
  before: {
    tournamentStatus: TournamentStatus;
  };
  after: {
    tournamentStatus: TournamentStatus;
  };
};

export type NewLeaderV1 = {
  __typename: "NewLeaderV1";
  before: {
    leaders: {
      displayName: string;
    }[];
  };
  after: {
    leaders: {
      displayName: string;
    }[];
  };
};
