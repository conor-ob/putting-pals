// import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";
import { TournamentHeader, tournament } from "~/components/tournament-header";
// import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  // const { data } = useQuery(trpc.posts.getAll.queryOptions());

  return (
    <View className="">
      <TournamentHeader tournament={tournament} className="p-4" />
      {/* {data?.map((post) => (
        <Text key={post.id} className="text-blue-500">
          {post.title}
        </Text>
      )) ?? <Text className="text-foreground">Loading...</Text>} */}
    </View>
  );
}
