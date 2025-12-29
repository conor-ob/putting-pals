import { TournamentStatus } from "@putting-pals/pga-tour-schema/types";
import type {
  LeaderboardSnapshotV1,
  RoundStatusChangedV1,
  TournamentStatusChangedV1,
} from "@putting-pals/putting-pals-db/schema";

type Event = RoundStatusChangedV1 | TournamentStatusChangedV1;

type Rule = {
  matches: (
    before: LeaderboardSnapshotV1,
    after: LeaderboardSnapshotV1,
  ) => boolean;
  emit: (
    before: LeaderboardSnapshotV1,
    after: LeaderboardSnapshotV1,
  ) => Event[];
};

export const RoundStatusChangedRule: Rule = {
  matches: (before, after) => before.roundStatus !== after.roundStatus,
  emit: (_, after) => [
    {
      __typename: "RoundStatusChangedV1" as const,
      roundDisplay: after.roundDisplay,
      roundStatus: after.roundStatus,
      roundStatusColor: after.roundStatusColor,
      roundStatusDisplay: after.roundStatusDisplay,
    } satisfies RoundStatusChangedV1,
  ],
};

export const TournamentStatusChangedRule: Rule = {
  matches: (before, after) =>
    after.tournamentStatus !== TournamentStatus.NotStarted &&
    before.tournamentStatus !== after.tournamentStatus,
  emit: (_, after) => [
    {
      __typename: "TournamentStatusChangedV1",
      tournamentName: after.tournamentName,
      tournamentStatus: after.tournamentStatus,
      customText:
        after.tournamentStatus === TournamentStatus.Completed
          ? `${after.tournamentName} has completed`
          : `${after.tournamentName} has started`,
    } satisfies TournamentStatusChangedV1,
  ],
};

export const NewPuttingPalsLeaderRule: Rule = {
  matches: (before, after) => {
    return false;
  },
  emit: (before, after) => {
    return [];
  },
};

export const PuttingPalsPlayerPositionIncreasedRule: Rule = {
  matches: (before, after) => {
    return false; // before !== "-"
  },
  emit: (before, after) => {
    return [];
  },
};

export const PlayerPositionIncreasedRule: Rule = {
  matches: (before, after) => {
    return false;
  },
  emit: (before, after) => {
    return [];
  },
};

export const PuttingPalsPlayerPositionDecreasedRule: Rule = {
  matches: (before, after) => {
    return false;
  },
  emit: (before, after) => {
    return [];
  },
};

export const PlayerPositionDecreasedRule: Rule = {
  matches: (before, after) => {
    return false;
  },
  emit: (before, after) => {
    return [];
  },
};
