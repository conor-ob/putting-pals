import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useCSSVariable } from "uniwind";

export function AppTabs() {
  const [card, cardForeground, mutedForeground, accent] = useCSSVariable([
    "--color-card",
    "--color-card-foreground",
    "--color-muted-foreground",
    "--color-accent",
  ]);

  return (
    <NativeTabs
      backgroundColor={asColor(card)}
      indicatorColor={asColor(accent)}
      iconColor={{
        default: asColor(mutedForeground),
        selected: asColor(cardForeground),
      }}
      labelStyle={{
        default: { color: asColor(mutedForeground) },
        selected: { color: asColor(cardForeground) },
      }}
    >
      <NativeTabs.Trigger name="leaderboard">
        <NativeTabs.Trigger.Label>Leaderboard</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "trophy", selected: "trophy.fill" }}
          src={
            <NativeTabs.Trigger.VectorIcon family={FontAwesome} name="trophy" />
          }
        />
      </NativeTabs.Trigger>

      {/* <NativeTabs.Trigger name="feed">
        <NativeTabs.Trigger.Label>Feed</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "newspaper", selected: "newspaper.fill" }}
          src={
            <NativeTabs.Trigger.VectorIcon
              family={FontAwesome}
              name="newspaper-o"
            />
          }
        />
      </NativeTabs.Trigger> */}

      <NativeTabs.Trigger name="schedule">
        <NativeTabs.Trigger.Label>Schedule</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: "calendar", selected: "calendar" }}
          src={
            <NativeTabs.Trigger.VectorIcon
              family={FontAwesome}
              name="calendar"
            />
          }
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

function asColor(value: string | number | undefined) {
  return value === undefined ? undefined : String(value);
}
