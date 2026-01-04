import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@putting-pals/pga-tour-schema/types";

export type LeaderboardSnapshot = LeaderboardSnapshotV1;

export type LeaderboardSnapshotV1 = {
  __typename: "LeaderboardSnapshotV1";
  tournament: {
    beautyImageAsset: {
      assetType?: string | null;
      deliveryType?: string | null;
      fallbackImage?: string | null;
      imageOrg: string;
      imagePath: string;
    };
    roundDisplay: string;
    roundStatus: RoundStatus;
    roundStatusColor: RoundStatusColor;
    roundStatusDisplay: string;
    tournamentLogoAsset: {
      assetType?: string | null;
      deliveryType?: string | null;
      fallbackImage?: string | null;
      imageOrg: string;
      imagePath: string;
    }[];
    tournamentName: string;
    tournamentStatus: TournamentStatus;
  };
  leaderboard: {
    players: (
      | {
          __typename: "InformationRow";
        }
      | {
          __typename: "PlayerRowV3";
          player: {
            id: string;
            displayName: string;
          };
          scoringData: {
            position: string;
            total: string;
          };
        }
      | {
          __typename: "PuttingPalsPlayerRow";
          player: {
            id: string;
            displayName: string;
          };
          scoringData: {
            position: string;
            total: string;
          };
        }
    )[];
  };
  leaderboardHoleByHole: {
    tournamentId: string;
  };
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
