import { View, type ViewProps } from "react-native";
import { cn } from "~/lib/utils";
import { RoundStatusBadge } from "./round-status-badge";
import { RoundStatusLabel } from "./round-status-label";
import type { Tournament } from "./tournament-header";

export function TournamentStatus({
  className,
  tournament,
  ...props
}: { tournament: Tournament } & ViewProps) {
  if (isTournamentInProgress(tournament)) {
    return (
      <View className={cn("flex flex-row items-center gap-1.5", className)} {...props}>
        <RoundStatusBadge color={tournament.roundStatusColor}>
          {tournament.roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel className="line-clamp-1" color={tournament.roundStatusColor}>
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
  const isTournamentNotStarted =
    tournament.tournamentStatus === "NOT_STARTED" && tournament.roundStatus === "UPCOMING";

  if (isTournamentNotStarted) {
    return false;
  }

  const isTournamentCompleted =
    tournament.tournamentStatus === "COMPLETED" && tournament.roundStatus === "OFFICIAL";

  if (isTournamentCompleted) {
    return false;
  }

  return true;
}
