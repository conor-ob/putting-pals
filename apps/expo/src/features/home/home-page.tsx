import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  const { data: tournament } = useQuery(
    trpc.tournament.getById.queryOptions({ id: undefined }),
  );

  return (
    <View className="">
      {tournament && (
        <TournamentHeader tournament={tournament} className="p-4" />
      )}
    </View>
  );
}
