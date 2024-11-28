import { cn } from "../../lib/utils";
import { TournamentInfo } from "./tournament-info";
import { TournamentName } from "./tournament-name";
import { TournamentStatusHeader } from "./tournament-status-header";

export type TournamentHeaderProps = {
  courses: { courseName: string }[];
  roundDisplay: string;
  roundStatus:
    | "COMPLETE"
    | "GROUPINGS_OFFICIAL"
    | "IN_PROGRESS"
    | "OFFICIAL"
    | "SUSPENDED"
    | "UPCOMING";
  roundStatusColor: "BLUE" | "GRAY" | "GREEN" | "RED" | "YELLOW";
  roundStatusDisplay: string;
  tournamentLogo: string[];
  tournamentName: string;
  tournamentStatus: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
  city: string;
  country: string;
  state: string;
  displayDate: string;
  weather?: {
    condition:
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
    tempC: string;
  } | null;
} & React.HTMLAttributes<HTMLDivElement>;

export function TournamentHeader({
  className,
  courses,
  roundDisplay,
  roundStatus,
  roundStatusColor,
  roundStatusDisplay,
  tournamentLogo,
  tournamentName,
  tournamentStatus,
  city,
  country,
  state,
  displayDate,
  weather,
  ...props
}: TournamentHeaderProps) {
  return (
    <div
      className={cn("flex flex-row items-center gap-4", className)}
      {...props}
    >
      <img
        className="h-20 w-20 rounded-full ring-1 ring-gray-300 dark:ring-0"
        src={tournamentLogo[0]}
      />
      <div className="flex flex-col gap-1">
        <TournamentStatusHeader
          className="mb-0.5"
          roundDisplay={roundDisplay}
          roundStatus={roundStatus}
          roundStatusColor={roundStatusColor}
          roundStatusDisplay={roundStatusDisplay}
          tournamentStatus={tournamentStatus}
        />
        <TournamentName tournamentName={tournamentName} />
        <TournamentInfo
          courses={courses}
          city={city}
          country={country}
          state={state}
          displayDate={displayDate}
          weather={weather}
        />
      </div>
    </div>
  );
}
