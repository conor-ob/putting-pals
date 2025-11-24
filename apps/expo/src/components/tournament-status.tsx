import { View, type ViewProps } from "react-native";
import { RoundStatusBadge } from "~/components/round-status-badge";
import { RoundStatusLabel } from "~/components/round-status-label";
import type { Tournament } from "~/components/tournament-header";
import { cn } from "~/lib/utils";

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
        <RoundStatusBadge color={tournament.roundStatusColor}>
          {tournament.roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel
          className="line-clamp-1"
          color={tournament.roundStatusColor}
        >
          {tournament.roundStatusDisplay}
        </RoundStatusLabel>
      </View>
    );
  } else {
    return (
      <View className={className} {...props}>
        <RoundStatusBadge color={tournament.roundStatusColor}>
          {tournament.roundStatusDisplay}
        </RoundStatusBadge>
      </View>
    );
  }
}

function isTournamentInProgress(tournament: Tournament) {
  const isNotStarted =
    tournament.tournamentStatus === "NOT_STARTED" &&
    tournament.roundStatus === "UPCOMING";
  const isCompleted =
    tournament.tournamentStatus === "COMPLETED" &&
    tournament.roundStatus === "OFFICIAL";

  return !isNotStarted && !isCompleted;
}
