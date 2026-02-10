import { expectTypeOf } from "vitest";
import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "../../tournament/domain/types";
import type { LeaderboardFeedEvent } from "./types";

type Locked = {
  HotStreakV1: {
    __typename: "HotStreakV1";
  } & {
    players: {
      id: string;
    }[];
  };
  LeaderChangedV1: {
    __typename: "LeaderChangedV1";
    prev: {
      players: (
        | {
            __typename: "PlayerRow";
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
    };
    next: {
      players: (
        | {
            __typename: "PlayerRow";
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
    };
  };
  PlayerDisqualifiedV1: {
    __typename: "PlayerDisqualifiedV1";
  } & {
    players: {
      id: string;
    }[];
  };
  PlayerMissedCutV1: {
    __typename: "PlayerMissedCutV1";
  } & {
    players: {
      id: string;
    }[];
  };
  PlayerWithdrawnV1: {
    __typename: "PlayerWithdrawnV1";
  } & {
    players: {
      id: string;
    }[];
  };
  RoundStatusChangedV1: {
    __typename: "RoundStatusChangedV1";
    prev: {
      roundDisplay: string;
      roundStatus: RoundStatus;
      roundStatusColor: RoundStatusColor;
      roundStatusDisplay: string;
    };
    next: {
      roundDisplay: string;
      roundStatus: RoundStatus;
      roundStatusColor: RoundStatusColor;
      roundStatusDisplay: string;
    };
  };
  TournamentStatusChangedV1: {
    __typename: "TournamentStatusChangedV1";
    prev: {
      tournamentStatus: TournamentStatus;
    };
    next: {
      tournamentStatus: TournamentStatus;
    };
  };
};

type Versions = keyof Locked;

/* 🔒 Exact version set */
expectTypeOf<LeaderboardFeedEvent["__typename"]>().toEqualTypeOf<Versions>();

/* 🔒 Exact shape per version */
type ByVersion<V extends Versions> = Extract<
  LeaderboardFeedEvent,
  { __typename: V }
>;

type ShapeCheck = {
  [V in Versions]: ByVersion<V> extends Locked[V]
    ? Locked[V] extends ByVersion<V>
      ? true
      : never
    : never;
};

expectTypeOf<ShapeCheck>().toEqualTypeOf<Record<Versions, true>>();

const _tests: Record<Versions, () => void> = {
  HotStreakV1: () => {
    expectTypeOf<ByVersion<"HotStreakV1">>().toEqualTypeOf<
      Locked["HotStreakV1"]
    >();
  },
  LeaderChangedV1: () => {
    expectTypeOf<ByVersion<"LeaderChangedV1">>().toEqualTypeOf<
      Locked["LeaderChangedV1"]
    >();
  },
  PlayerDisqualifiedV1: () => {
    expectTypeOf<ByVersion<"PlayerDisqualifiedV1">>().toEqualTypeOf<
      Locked["PlayerDisqualifiedV1"]
    >();
  },
  PlayerMissedCutV1: () => {
    expectTypeOf<ByVersion<"PlayerMissedCutV1">>().toEqualTypeOf<
      Locked["PlayerMissedCutV1"]
    >();
  },
  PlayerWithdrawnV1: () => {
    expectTypeOf<ByVersion<"PlayerWithdrawnV1">>().toEqualTypeOf<
      Locked["PlayerWithdrawnV1"]
    >();
  },
  RoundStatusChangedV1: () => {
    expectTypeOf<ByVersion<"RoundStatusChangedV1">>().toEqualTypeOf<
      Locked["RoundStatusChangedV1"]
    >();
  },
  TournamentStatusChangedV1: () => {
    expectTypeOf<ByVersion<"TournamentStatusChangedV1">>().toEqualTypeOf<
      Locked["TournamentStatusChangedV1"]
    >();
  },
};
