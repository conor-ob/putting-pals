import { cn } from "../../lib/utils";
import { TournamentName } from "./tournament-name";
import { TournamentStatus } from "./tournament-status";

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
  tournamentLogo: string;
  tournamentName: string;
  tournamentStatus: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
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
  ...props
}: TournamentHeaderProps) {
  return (
    <div
      className={cn("flex flex-row items-center gap-3", className)}
      {...props}
    >
      <img
        className="ml-[1px] h-20 w-20 rounded-full ring-1 ring-gray-300 dark:ring-0"
        src={tournamentLogo}
      />
      <div className="flex flex-col gap-1">
        <TournamentStatus
          className="mb-0.5"
          roundDisplay={roundDisplay}
          roundStatus={roundStatus}
          roundStatusColor={roundStatusColor}
          roundStatusDisplay={roundStatusDisplay}
          tournamentStatus={tournamentStatus}
        />
        <TournamentName>{tournamentName}</TournamentName>
        <div className="text-base font-medium leading-tight tracking-tight text-[#757575]">
          {courses[0]?.courseName}
        </div>
      </div>
    </div>
  );
}
