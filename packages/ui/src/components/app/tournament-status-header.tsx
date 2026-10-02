import * as React from "react";

import type { Tournament } from "@pkg/api/types";

import { cn } from "../../lib/utils";
import { RoundStatusBadge } from "./round-status-badge";
import { RoundStatusLabel } from "./round-status-label";

export type TournamentStatusHeaderProps = {
  tournament: Tournament;
} & React.HTMLAttributes<HTMLDivElement>;

function TournamentStatusHeader({
  className,
  tournament,
  ...props
}: TournamentStatusHeaderProps) {
  if (
    (tournament.status === "NOT_STARTED" &&
      tournament.roundStatus === "UPCOMING") ||
    (tournament.status === "COMPLETED" && tournament.roundStatus === "OFFICIAL")
  ) {
    return (
      <div className={className} {...props}>
        <RoundStatusBadge color={tournament.roundStatusColor}>
          {tournament.roundStatusDisplay}
        </RoundStatusBadge>
      </div>
    );
  } else {
    return (
      <div
        className={cn("flex flex-row items-center gap-0.5", className)}
        {...props}
      >
        <RoundStatusBadge color={tournament.roundStatusColor}>
          {tournament.roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel
          className="line-clamp-1"
          color={tournament.roundStatusColor}
        >
          {tournament.roundStatusDisplay}
        </RoundStatusLabel>
      </div>
    );
  }
}

export { TournamentStatusHeader };
