import { cn } from "@lib/utils";
import type { Tournament } from "@providers/trpc/types";
import type * as React from "react";
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
    (tournament.schedule.status === "NOT_STARTED" &&
      tournament.status.roundStatus === "UPCOMING") ||
    (tournament.schedule.status === "COMPLETED" &&
      tournament.status.roundStatus === "OFFICIAL")
  ) {
    return (
      <div className={className} {...props}>
        <RoundStatusBadge color={tournament.status.roundStatusColor}>
          {tournament.status.roundStatusDisplay}
        </RoundStatusBadge>
      </div>
    );
  } else {
    return (
      <div
        className={cn("flex flex-row items-center gap-0.5", className)}
        {...props}
      >
        <RoundStatusBadge color={tournament.status.roundStatusColor}>
          {tournament.status.roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel
          className="line-clamp-1"
          color={tournament.status.roundStatusColor}
        >
          {tournament.status.roundStatusDisplay}
        </RoundStatusLabel>
      </div>
    );
  }
}

export { TournamentStatusHeader };
