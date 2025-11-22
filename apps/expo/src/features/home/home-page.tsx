import { Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { trpc } from "~/providers/trpc/utils/trpc";

export function HomePage() {
  const { data } = useQuery(trpc.posts.getAll.queryOptions());

  return (
    <View className="bg-background flex-1 items-center justify-center">
      {data?.map((post) => (
        <Text key={post.id} className="text-blue-500">
          {post.title}
        </Text>
      )) ?? <Text className="text-foreground">Loading...</Text>}
    </View>
  );
}
