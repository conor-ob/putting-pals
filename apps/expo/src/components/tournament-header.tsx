import { View, type ViewProps } from "react-native";
import { TournamentInfo } from "~/components/tournament-info";
import { TournamentLogo } from "~/components/tournament-logo";
import { TournamentName } from "~/components/tournament-name";
import { TournamentStatus } from "~/components/tournament-status";
import { cn } from "~/lib/utils";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export type Tournament = RouterOutputs["tournament"]["getById"];

export function TournamentHeader({
  className,
  tournament,
  ...props
}: { tournament: Tournament } & ViewProps) {
  return (
    <View
      className={cn("flex flex-row items-center gap-4", className)}
      {...props}
    >
      <TournamentLogo source={tournament.tournamentLogo[0]} />
      <View className="flex flex-col gap-1">
        <TournamentStatus tournament={tournament} />
        <TournamentName>{tournament.tournamentName}</TournamentName>
        <TournamentInfo tournament={tournament} />
      </View>
    </View>
  );
}
