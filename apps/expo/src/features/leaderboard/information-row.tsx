import { Text, View } from "react-native";
import type { InformationRow as InformationRowType } from "~/providers/trpc/types";

export function InformationRow({ row }: { row: InformationRowType }) {
  return (
    <View className="flex flex-row items-center gap-2">
      <Text className="text-foreground w-1/3">{row.displayText}</Text>
    </View>
  );
}
