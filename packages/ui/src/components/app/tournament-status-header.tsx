import * as React from "react";

import { cn } from "../../lib/utils";
import { RoundStatusBadge } from "./round-status-badge";
import { RoundStatusLabel } from "./round-status-label";

export type TournamentStatusHeaderProps = {
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
  tournamentStatus: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
} & React.HTMLAttributes<HTMLDivElement>;

function TournamentStatusHeader({
  className,
  roundDisplay,
  roundStatus,
  roundStatusColor,
  roundStatusDisplay,
  tournamentStatus,
  ...props
}: TournamentStatusHeaderProps) {
  if (
    (tournamentStatus === "NOT_STARTED" && roundStatus === "UPCOMING") ||
    (tournamentStatus === "COMPLETED" && roundStatus === "OFFICIAL")
  ) {
    return (
      <div className={className} {...props}>
        <RoundStatusBadge color={roundStatusColor}>
          {roundStatusDisplay}
        </RoundStatusBadge>
      </div>
    );
  } else {
    return (
      <div
        className={cn("flex flex-row items-center gap-0.5", className)}
        {...props}
      >
        <RoundStatusBadge color={roundStatusColor}>
          {roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel className="line-clamp-1" color={roundStatusColor}>
          {roundStatusDisplay}
        </RoundStatusLabel>
      </div>
    );
  }
}

export { TournamentStatusHeader };
