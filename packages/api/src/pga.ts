export type LeaderboardCompressedV3 = {
  id: string;
  payload: string;
};

export type LeaderboardV3 = {
  id: string;
  players: LeaderboardRowV3[];
};

export type LeaderboardRowV3 = InformationRow | PlayerRowV3;

export type InformationRow = {
  __typename: "InformationRow";
  id: string;
  leaderboardSortOrder: number;
  displayText: string;
};

export type PlayerRowV3 = {
  __typename: "PlayerRowV3";
  id: string;
  leaderboardSortOrder: number;
  player: PlayerV3;
  scoringData: ScoringDataV3;
};

export type PlayerV3 = {
  id: string;
  firstName: string;
  lastName: string;
  amateur: boolean;
  displayName: string;
  abbreviations: string;
  abbreviationAccessibiltyText: string;
  country: string;
  countryFlag: string;
  shortName: string;
  lineColor: string;
  tourBound: boolean;
  bettingProfile: string;
};

export type ScoringDataV3 = {
  position: string;
  total: string;
  totalSort: number;
  thru: string;
  thruSort: number;
  score: string;
  scoreSort: number;
  courseId: string;
  groupNumber: number;
  currentRound: number;
  backNine: boolean;
  roundHeader: string;
  rounds: string[];
  movementDirection: string;
  movementAmount: string;
  playerState: string;
  rankingMovement: string;
  rankingMovementAmount: string;
  rankingMovementAmountSort: number;
  rankLogoLight: string;
  rankLogoDark: string;
  totalStrokes: string;
  official: string;
  officialSort: number;
  projected: string;
  projectedSort: number;
  hasStoryContent: false;
  storyContentRounds: string[];
  roundStatus: string;
};

export type Tournament = {
  id: string;
  tournamentName: string;
  tournamentLogo: string;
  tournamentLocation: string;
  tournamentStatus: TournamentStatus;
  roundStatusDisplay: string;
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  currentRound: number;
  courses: { courseName: string }[];
};

export type TournamentStatus = "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";

export type RoundStatus =
  | "COMPLETE"
  | "GROUPINGS_OFFICIAL"
  | "IN_PROGRESS"
  | "OFFICIAL"
  | "SUSPENDED"
  | "UPCOMING";

export type RoundStatusColor = "BLUE" | "GRAY" | "GREEN" | "RED" | "YELLOW";
