import { Image } from "expo-image";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";

export function TournamentPage() {
  const { tourCode } = useTourCode();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: tournament, error: tournamentError } = useQuery(
    trpc.tournament.getById.queryOptions({ tourCode, id }),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament.data", tournament);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("tournament.error", tournamentError);

  return (
    <ScrollView>
      <Image source={tournament?.images.cover} className="h-40" />
    </ScrollView>
  );
}
