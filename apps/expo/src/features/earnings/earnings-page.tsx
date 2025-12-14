import { ScrollView } from "react-native";
import { trpc } from "~/providers/trpc/utils/trpc";
import { useQuery } from "~/providers/trpc/utils/use-query";

export function EarningsPage() {
  const { data: earningsData, error: earningsError } = useQuery(
    trpc.stats.getEarnings.queryOptions(),
  );
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("earningsData", earningsData);
  // biome-ignore lint/suspicious/noConsole: testing
  console.log("earningsError", earningsError);

  return <ScrollView className="p-4 gap-4"></ScrollView>;
}
