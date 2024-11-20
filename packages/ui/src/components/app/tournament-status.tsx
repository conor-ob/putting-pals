import * as React from "react";

import { cn } from "../../lib/utils";
import { RoundStatus } from "./round-status";
import { RoundStatusBadge } from "./round-status-badge";

export type TournamentStatusProps = {
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

function TournamentStatus({
  className,
  roundDisplay,
  roundStatus,
  roundStatusColor,
  roundStatusDisplay,
  tournamentStatus,
  ...props
}: TournamentStatusProps) {
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
        <RoundStatus color={roundStatusColor}>{roundStatusDisplay}</RoundStatus>
      </div>
    );
  }
}

export { TournamentStatus };
