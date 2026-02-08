import { View, type ViewProps } from "react-native";
import { RoundStatusBadge } from "~/components/round-status-badge";
import { RoundStatusLabel } from "~/components/round-status-label";
import { cn } from "~/lib/utils";
import type { Tournament } from "~/providers/trpc/types";

export function TournamentStatus({
  className,
  tournament,
  ...props
}: { tournament: Tournament } & ViewProps) {
  if (isTournamentInProgress(tournament)) {
    return (
      <View
        className={cn("flex flex-row items-center gap-1.5", className)}
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
      </View>
    );
  } else {
    return (
      <View className={className} {...props}>
        <RoundStatusBadge color={tournament.status.roundStatusColor}>
          {tournament.status.roundStatusDisplay}
        </RoundStatusBadge>
      </View>
    );
  }
}

function isTournamentInProgress(tournament: Tournament) {
  const isNotStarted =
    tournament.status.tournamentStatus === "NOT_STARTED" &&
    tournament.status.roundStatus === "UPCOMING";
  const isCompleted =
    tournament.status.tournamentStatus === "COMPLETED" &&
    tournament.status.roundStatus === "OFFICIAL";

  return !isNotStarted && !isCompleted;
}
