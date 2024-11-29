export type Course = {
  name: string;
};

export type RoundStatus =
  | "COMPLETE"
  | "GROUPINGS_OFFICIAL"
  | "IN_PROGRESS"
  | "OFFICIAL"
  | "SUSPENDED"
  | "UPCOMING";

export type RoundStatusColor = "BLUE" | "GRAY" | "GREEN" | "RED" | "YELLOW";

export type StrokePlayLeaderboard = {
  id: string;
};

export type SweepstakesLeaderboard = {
  id: string;
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
