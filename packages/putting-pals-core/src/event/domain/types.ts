import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/putting-pals-schema";

export type LeaderboardFeedEvent =
  | HotStreakV1
  | LeaderChangedV1
  | PlayerDisqualifiedV1
  | PlayerMissedCutV1
  | PlayerWithdrawnV1
  | RoundStatusChangedV1
  | TournamentStatusChangedV1;

export interface EventEmitter {
  emit(): LeaderboardFeedEvent[];
  getPriority(): number;
}

export interface ProcessEventResult {
  emitters: EventEmitter[];
  commitSnapshot: () => Promise<void>;
}

type Event<TName extends string, T> = {
  __typename: TName;
} & T;

type ChangeEvent<TName extends string, T> = {
  __typename: TName;
  prev: T;
  next: T;
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

export type HotStreakV1 = Event<
  "HotStreakV1",
  {
    players: {
      id: string;
    }[];
  }
>;
