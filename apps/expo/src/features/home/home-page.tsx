import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { TournamentHeader } from "~/components/tournament-header";
import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  const { data: tournament } = useQuery(
    trpc.tournament.getById.queryOptions({ id: undefined }),
  );

  const { data: leaderboard } = useQuery(
    trpc.leaderboard.getById.queryOptions({ id: undefined }),
  );

  const { data: competition } = useQuery(
    trpc.competition.getAll.queryOptions(),
  );

  const { data: schedule } = useQuery(trpc.schedule.get.queryOptions());

  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("leaderboard", leaderboard);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("competition", competition);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("schedule", schedule);

  return (
    <View className="">
      {tournament && (
        <TournamentHeader tournament={tournament} className="p-4" />
      )}
    </View>
  );
}
