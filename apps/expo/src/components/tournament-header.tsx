import { View, type ViewProps } from "react-native";
import { TournamentInfo } from "~/components/tournament-info";
import { TournamentLogo } from "~/components/tournament-logo";
import { TournamentName } from "~/components/tournament-name";
import { TournamentStatus } from "~/components/tournament-status";
import { cn } from "~/lib/utils";

export type Tournament = {
  beautyImage: string;
  city: string;
  country: string;
  courses: {
    courseName: string;
  }[];
  displayDate: string;
  formatType: "STROKE_PLAY" | "MATCH_PLAY" | "TEAM_STROKE" | "TEAM_CUP" | "STABLEFORD";
  id: string;
  roundDisplay: string;
  roundStatus:
    | "IN_PROGRESS"
    | "SUSPENDED"
    | "COMPLETE"
    | "OFFICIAL"
    | "GROUPINGS_OFFICIAL"
    | "UPCOMING";
  roundStatusColor: "GREEN" | "YELLOW" | "RED" | "BLUE" | "GRAY";
  roundStatusDisplay: string;
  state: string;
  timezone: string;
  tournamentLogo: string[];
  tournamentName: string;
  tournamentStatus: "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
  weather: {
    condition:
      | "DAY_SUNNY"
      | "DAY_MOSTLY_SUNNY"
      | "DAY_PARTLY_CLOUDY"
      | "DAY_MOSTLY_CLOUDY"
      | "DAY_CLOUDY"
      | "DAY_RAINY"
      | "DAY_SCATTERED_SHOWERS"
      | "DAY_THUNDERSTORMS"
      | "DAY_FOG_MIST"
      | "DAY_SNOW"
      | "NIGHT_CLEAR"
      | "NIGHT_ISOLATED_CLOUDS"
      | "NIGHT_PARTLY_CLOUDY"
      | "NIGHT_MOSTLY_CLOUDY";
    precipitation: string;
    tempC: string;
    windDirection:
      | "NORTH"
      | "NORTH_EAST"
      | "EAST"
      | "SOUTH_EAST"
      | "SOUTH"
      | "SOUTH_WEST"
      | "WEST"
      | "NORTH_WEST";
    windSpeedKPH: string;
  };
};

export const tournament = {
  beautyImage:
    "https://res.cloudinary.com/pgatour-prod/ar_0.667,c_crop/d_placeholders:tournamentBackgroundSolid.png/pgatour/courses/r493/776/holes/hole18.jpg",
  city: "St. Simons Island",
  country: "USA",
  courses: [
    {
      courseName: "Sea Island Golf Club (Seaside Course)",
    },
    {
      courseName: "Sea Island Golf Club (Plantation Course)",
    },
  ],
  displayDate: "Nov 20 - 23, 2025",
  formatType: "STROKE_PLAY",
  id: "R2025493",
  roundDisplay: "R3",
  roundStatus: "IN_PROGRESS",
  roundStatusColor: "RED",
  roundStatusDisplay: "In Progress",
  state: "Georgia",
  timezone: "America/New_York",
  tournamentLogo: [
    "https://res.cloudinary.com/pgatour-prod/d_tournaments:logos:R000.png/tournaments/logos/R493.png",
  ],
  tournamentName: "The RSM Classic",
  tournamentStatus: "IN_PROGRESS",
  weather: {
    condition: "DAY_PARTLY_CLOUDY",
    precipitation: "1%",
    tempC: "25°C",
    windDirection: "SOUTH_WEST",
    windSpeedKPH: "17",
  },
} satisfies Tournament;

export function TournamentHeader({
  className,
  tournament,
  ...props
}: { tournament: Tournament } & ViewProps) {
  return (
    <View className={cn("flex flex-row items-center gap-4", className)} {...props}>
      <TournamentLogo source={tournament.tournamentLogo[0]} />
      <View className="flex flex-col gap-1">
        <TournamentStatus tournament={tournament} />
        <TournamentName>{tournament.tournamentName}</TournamentName>
        <TournamentInfo tournament={tournament} />
      </View>
    </View>
  );
}
