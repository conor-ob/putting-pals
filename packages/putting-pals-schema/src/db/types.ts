import type {
  DomainLeaderboardHoleByHole,
  DomainLeaderboardV3,
  DomainRoundStatus,
  DomainRoundStatusColor,
  DomainTournament,
  DomainTournamentStatus,
} from "../generated/graphql";

export type TournamentSnapshot = DomainTournament;

export const LeaderboardSnapshotHash = "f048028d" as const;
export const LeaderboardSnapshotVersion = 1 as const;

export type LeaderboardSnapshot = {
  tournament: DomainTournament;
  leaderboard: DomainLeaderboardV3;
  leaderboardHoleByHole: DomainLeaderboardHoleByHole;
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
    roundStatus: DomainRoundStatus;
    roundStatusColor: DomainRoundStatusColor;
    roundStatusDisplay: string;
  }
>;

export type TournamentStatusChangedV1 = ChangeEvent<
  "TournamentStatusChangedV1",
  {
    tournamentStatus: DomainTournamentStatus;
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
          __typename: "PuttingPalsPlayerRowV3";
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
