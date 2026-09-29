import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  TabList,
  type TabListProps,
  TabSlot,
  Tabs,
  TabTrigger,
  type TabTriggerSlotProps,
} from "expo-router/ui";
import type { ComponentProps } from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCSSVariable } from "uniwind";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { useTourCode } from "~/providers/tour-code/tour-code-provider";

type IconName = ComponentProps<typeof FontAwesome>["name"];

export function AppTabs() {
  const { tourCode } = useTourCode();

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <AppTabList>
          <TabTrigger
            name="leaderboard"
            href={`/${tourCode}/leaderboard`}
            asChild
          >
            <TabButton icon="trophy">Leaderboard</TabButton>
          </TabTrigger>
          <TabTrigger name="schedule" href={`/${tourCode}/schedule`} asChild>
            <TabButton icon="calendar">Schedule</TabButton>
          </TabTrigger>
        </AppTabList>
      </TabList>
    </Tabs>
  );
}

// `style` is destructured away so TabList's own row layout does not fight the
// absolute positioning below.
function AppTabList({ children, style, ...props }: TabListProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      {...props}
      pointerEvents="box-none"
      className="absolute inset-x-0 bottom-0 items-center"
      style={{ paddingBottom: insets.bottom }}
    >
      {/* Scrim so scrolled content dissolves into the background behind the
          bar instead of colliding with it. */}
      <View
        pointerEvents="none"
        className="from-background via-background/80 to-background/0 absolute inset-x-0 bottom-0 h-32 bg-linear-to-t"
      />
      <View
        className="border-border bg-card/60 mb-4 flex-row items-center gap-1 rounded-full border p-1 backdrop-blur-2xl backdrop-saturate-150"
        style={{
          boxShadow: [
            "0 8px 32px rgb(0 0 0 / 0.18)",
            "inset 0 1px 0 rgb(255 255 255 / 0.18)",
          ].join(", "),
        }}
      >
        {children}
      </View>
    </View>
  );
}

function TabButton({
  children,
  icon,
  isFocused,
  ...props
}: TabTriggerSlotProps & { icon: IconName }) {
  const [foreground, mutedForeground] = useCSSVariable([
    "--color-foreground",
    "--color-muted-foreground",
  ]);
  const color = String(isFocused ? foreground : mutedForeground);

  return (
    <Pressable
      {...props}
      className={cn(
        "flex-col items-center gap-2 rounded-full px-4 py-2 transition-colors duration-200",
        isFocused && "bg-secondary/80",
      )}
      style={({ pressed }) => (pressed ? { opacity: 0.7 } : undefined)}
    >
      <FontAwesome name={icon} size={16} color={color} />
      <Text
        variant="small"
        className={cn(isFocused ? "text-foreground" : "text-muted-foreground")}
      >
        {children}
      </Text>
    </Pressable>
  );
}
