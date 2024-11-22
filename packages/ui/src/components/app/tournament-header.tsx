import type {
  RoundStatus,
  RoundStatusColor,
  TournamentStatus,
} from "@pkg/api/pga";

import { cn } from "../../lib/utils";
import { TournamentName } from "./tournament-name";
import { TournamentStatusHeader } from "./tournament-status-header";

export type TournamentHeaderProps = {
  courses: { courseName: string }[];
  roundDisplay: string;
  roundStatus: RoundStatus;
  roundStatusColor: RoundStatusColor;
  roundStatusDisplay: string;
  tournamentLogo: string;
  tournamentName: string;
  tournamentStatus: TournamentStatus;
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
        className="h-20 w-20 rounded-full ring-1 ring-gray-300 dark:ring-0"
        src={tournamentLogo}
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
        <TournamentName>{tournamentName}</TournamentName>
        <div className="line-clamp-1 text-base font-medium leading-tight tracking-tight text-[#757575]">
          {courses[0]?.courseName}
        </div>
      </div>
    </div>
  );
}
