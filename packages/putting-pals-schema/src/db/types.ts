import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";

export type LeaderboardSnapshotTypes = LeaderboardSnapshotV1;

export type LeaderboardSnapshotV1 = {
  __typename: "LeaderboardSnapshotV1";
  tournamentName: string;
  tournamentStatus: TournamentStatus;
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
  rows: {
    __typename: "PlayerRowV3";
    id: string;
    leaderboardSortOrder: number;
    player: {
      abbreviations: string;
      amateur: boolean;
      countryFlag: string;
      displayName: string;
      id: string;
      shortName: string;
    };
    scoringData: {
      position: string;
      score: string;
      scoreSort: number;
      teeTime: Date | undefined;
      thru: string;
      thruSort: number;
      total: string;
      totalSort: number;
    };
  }[];
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
