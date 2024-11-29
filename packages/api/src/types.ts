export type Course = {
  name: string;
};

export type InformationRow = {
  displayText: string;
  id: string;
  leaderboardSortOrder: number;
};

export type Player = {
  abbreviations: string;
  countryFlag: string;
  firstName: string;
  id: string;
  lastName: string;
  shortName: string;
};

export type PlayerRow = {
  id: string;
  leaderboardSortOrder: number;
  player: Player;
  scoringData: ScoringData;
};

export type RoundStatus =
  | "COMPLETE"
  | "GROUPINGS_OFFICIAL"
  | "IN_PROGRESS"
  | "OFFICIAL"
  | "SUSPENDED"
  | "UPCOMING";

export type RoundStatusColor = "BLUE" | "GRAY" | "GREEN" | "RED" | "YELLOW";

export type ScoringData = {
  id: string;
  position: string;
  score: string;
  scoreSort: number;
  teeTime?: number;
  thru: string;
  thruSort: number;
  total: string;
  totalSort: number;
};

export type StrokePlayLeaderboard = {
  id: string;
  rows: StrokePlayLeaderboardRow[];
};

export type StrokePlayLeaderboardRow = InformationRow | PlayerRow;

export type SweepstakesLeaderboard = {
  id: string;
  rows: SweepstakesLeaderboardRow[];
};

export type SweepstakesLeaderboardRow = {
  player: SweepstakesPlayer;
};

export type SweepstakesPlayer = {
  id: string;
  picks: PlayerRow[];
};

export type Tournament = {
  city: string;
  country: string;
  courses: Course[];
  displayDate: string;
  id: string;
  logos: string[];
  name: string;
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
  state: string;
  status: TournamentStatus;
  weather?: Weather;
};

export type TournamentStatus = "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";

export type Weather = {
  condition: WeatherCondition;
  tempC: string;
};

export type WeatherCondition =
  | "DAY_CLOUDY"
  | "DAY_FOG_MIST"
  | "DAY_MOSTLY_CLOUDY"
  | "DAY_MOSTLY_SUNNY"
  | "DAY_PARTLY_CLOUDY"
  | "DAY_RAINY"
  | "DAY_SCATTERED_SHOWERS"
  | "DAY_SNOW"
  | "DAY_SUNNY"
  | "DAY_THUNDERSTORMS"
  | "NIGHT_CLEAR"
  | "NIGHT_ISOLATED_CLOUDS"
  | "NIGHT_MOSTLY_CLOUDY"
  | "NIGHT_PARTLY_CLOUDY";
