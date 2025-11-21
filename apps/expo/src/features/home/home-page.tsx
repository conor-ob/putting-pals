import { Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import { trpc } from "../../providers/trpc/utils/trpc";

export function HomePage() {
  const { data } = useQuery(trpc.posts.getAll.queryOptions());

  return (
    <View className="flex-1 items-center justify-center bg-background">
      {data?.map((post) => (
        <Text key={post.id} className="text-foreground">
          {post.title}
        </Text>
      ))}
    </View>
  );
}
