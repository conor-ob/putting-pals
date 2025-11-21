import { Text, View } from "react-native";
import { trpc } from "@/providers/trpc/utils/trpc";
import { useQuery } from "@tanstack/react-query";

export function HomePage() {
  const { data } = useQuery(trpc.posts.getAll.queryOptions());

  return (
    <View className="flex-1 items-center justify-center bg-background">
      {data?.map((post) => (
        <Text key={post.id} className="text-blue-500">
          {post.title}
        </Text>
      )) ?? <Text className="text-foreground">Loading...</Text>}
    </View>
  );
}
