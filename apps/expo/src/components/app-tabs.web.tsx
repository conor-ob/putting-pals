import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export function AppTabs() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="(index)"
        options={{
          title: "Leaderboard",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="trophy" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="newspaper-o" color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="schedule"
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="calendar" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="earnings"
        options={{
          title: "Earnings",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="money" color={color} />
          ),
        }}
      /> */}
    </Tabs>
  );
}

// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import {
//   TabList,
//   type TabListProps,
//   TabSlot,
//   Tabs,
//   TabTrigger,
//   type TabTriggerSlotProps,
// } from "expo-router/ui";
// import type { ComponentProps } from "react";
// import { Pressable, View } from "react-native";
// import { useCSSVariable } from "uniwind";
// import { Text } from "~/components/ui/text";
// import { cn } from "~/lib/utils";
// import { useTourCode } from "~/providers/tour-code/tour-code-provider";

// type IconName = ComponentProps<typeof FontAwesome>["name"];

// export function AppTabs() {
//   const { tourCode } = useTourCode();

//   return (
//     <Tabs className="flex-1">
//       <TabSlot style={{ flex: 1 }} />
//       <TabList asChild>
//         <AppTabList>
//           <TabTrigger
//             name="leaderboard"
//             href={`/${tourCode}/leaderboard`}
//             asChild
//           >
//             <TabButton icon="trophy">Leaderboard</TabButton>
//           </TabTrigger>
//           <TabTrigger name="feed" href={`/${tourCode}/feed`} asChild>
//             <TabButton icon="newspaper-o">Feed</TabButton>
//           </TabTrigger>
//           <TabTrigger name="schedule" href={`/${tourCode}/schedule`} asChild>
//             <TabButton icon="calendar">Schedule</TabButton>
//           </TabTrigger>
//         </AppTabList>
//       </TabList>
//     </Tabs>
//   );
// }

// // `style` is destructured away so TabList's own row layout does not fight the
// // absolute positioning below.
// function AppTabList({ children, style, ...props }: TabListProps) {
//   return (
//     <View
//       {...props}
//       pointerEvents="box-none"
//       className="absolute inset-x-0 bottom-0 items-center px-4 pb-4"
//     >
//       <View
//         className="border-border bg-card/70 flex-row items-center gap-1 rounded-full border p-1 backdrop-blur-xl"
//         style={{ boxShadow: "0 8px 24px rgb(0 0 0 / 0.12)" }}
//       >
//         {children}
//       </View>
//     </View>
//   );
// }

// function TabButton({
//   children,
//   icon,
//   isFocused,
//   ...props
// }: TabTriggerSlotProps & { icon: IconName }) {
//   const [foreground, mutedForeground] = useCSSVariable([
//     "--color-foreground",
//     "--color-muted-foreground",
//   ]);
//   const color = String(isFocused ? foreground : mutedForeground);

//   return (
//     <Pressable
//       {...props}
//       className={cn(
//         "flex-row items-center gap-2 rounded-full px-4 py-2",
//         isFocused && "bg-secondary",
//       )}
//       style={({ pressed }) => (pressed ? { opacity: 0.7 } : undefined)}
//     >
//       <FontAwesome name={icon} size={16} color={color} />
//       <Text
//         variant="small"
//         className={cn(isFocused ? "text-foreground" : "text-muted-foreground")}
//       >
//         {children}
//       </Text>
//     </Pressable>
//   );
// }
