import { View, type ViewProps } from "react-native";
import { RoundStatusBadge } from "~/components/round-status-badge";
import { RoundStatusLabel } from "~/components/round-status-label";
import { cn } from "~/lib/utils";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export function TournamentStatus({
  className,
  tournament,
  ...props
}: { tournament: RouterOutputs["tournament"]["getById"] } & ViewProps) {
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

function isTournamentInProgress(
  tournament: RouterOutputs["tournament"]["getById"],
) {
  const isNotStarted =
    tournament.tournamentStatus === "NOT_STARTED" &&
    tournament.roundStatus === "UPCOMING";
  const isCompleted =
    tournament.tournamentStatus === "COMPLETED" &&
    tournament.roundStatus === "OFFICIAL";

  return !isNotStarted && !isCompleted;
}
