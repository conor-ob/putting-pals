import type {
  LeaderboardHoleByHole,
  LeaderboardV3,
  RoundStatus,
  RoundStatusColor,
  Tournament,
  TournamentStatus,
} from "@putting-pals/putting-pals-api";

export type TournamentSnapshot = Tournament;

export const LeaderboardSnapshotHash = "f048028d" as const;
export const LeaderboardSnapshotVersion = 1 as const;

export type LeaderboardSnapshot = {
  tournament: Tournament;
  leaderboard: LeaderboardV3;
  leaderboardHoleByHole: LeaderboardHoleByHole;
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
    players: (
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
        }
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
        }
    )[];
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
