import { Pressable, ScrollView, Text } from "react-native";
import { cn } from "~/lib/utils";
import type { Season } from "~/providers/trpc/types";

export function SeasonPicker({
  seasons,
  selected,
  onSelect,
}: {
  seasons: readonly Season[];
  selected: number | undefined;
  onSelect: (season: number) => void;
}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2"
    >
      {[...seasons]
        .sort((a, b) => b.value - a.value)
        .map((season) => {
          const isSelected = season.value === selected;
          return (
            <Pressable
              key={season.value}
              className={cn(
                "rounded-full px-3 py-1.5",
                isSelected ? "bg-primary" : "bg-card",
              )}
              onPress={() => onSelect(season.value)}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected }}
            >
              <Text
                className={cn(
                  "text-sm font-semibold",
                  isSelected ? "text-primary-foreground" : "text-foreground",
                )}
              >
                {season.displayValue}
              </Text>
            </Pressable>
          );
        })}
    </ScrollView>
  );
}
