import { View, type ViewProps } from "react-native";
import { TournamentInfo } from "~/components/tournament-info";
import { TournamentLogo } from "~/components/tournament-logo";
import { TournamentName } from "~/components/tournament-name";
import { TournamentStatus } from "~/components/tournament-status";
import { cn } from "~/lib/utils";
import type { Tournament } from "~/providers/trpc/types";

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
      <TournamentLogo source={tournament.images.logo} />
      <View className="flex flex-col gap-1">
        <TournamentStatus tournament={tournament} />
        <TournamentName>{tournament.name}</TournamentName>
        <TournamentInfo tournament={tournament} />
      </View>
    </View>
  );
}
