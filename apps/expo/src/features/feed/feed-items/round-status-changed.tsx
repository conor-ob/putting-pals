import { Text, View } from "react-native";
import { RoundStatusBadge } from "~/components/round-status-badge";
import { RoundStatusLabel } from "~/components/round-status-label";
import type { RouterOutputs } from "~/providers/trpc/utils/trpc";

export function RoundStatusChanged({
  item,
}: {
  item: RouterOutputs["feed"]["get"]["items"][number]["feedItem"] & {
    __typename: "RoundStatusChangedV1";
  };
}) {
  return (
    <View className="flex flex-col gap-2 p-4">
      <View className="flex flex-row items-center gap-1.5">
        <RoundStatusBadge color={item.roundStatusColor}>
          {item.roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel
          className="line-clamp-1"
          color={item.roundStatusColor}
        >
          {item.roundStatusDisplay}
        </RoundStatusLabel>
      </View>
      <Text className="text-foreground">
        {getRoundStatusChangedText(item.roundDisplay, item.roundStatus)}
      </Text>
    </View>
  );
}

function getRoundStatusChangedText(
  roundDisplay: string,
  roundStatus: RouterOutputs["tournament"]["getById"]["roundStatus"],
) {
  switch (roundStatus) {
    case "UPCOMING":
      return `${getRoundNumberText(roundDisplay)} is upcoming`;
    case "GROUPINGS_OFFICIAL":
      return `${getRoundNumberText(roundDisplay)} groups are available`;
    case "IN_PROGRESS":
      return `${getRoundNumberText(roundDisplay)} is in progress`;
    case "COMPLETE":
      return `${getRoundNumberText(roundDisplay)} is complete`;
    case "SUSPENDED":
      return `${getRoundNumberText(roundDisplay)} has been suspended`;
    case "OFFICIAL":
      return `${getRoundNumberText(roundDisplay)} scores are official`;
    default:
      return `${getRoundNumberText(roundDisplay)} has been updated`;
  }
}

function getRoundNumberText(roundDisplay: string) {
  const roundNumber = parseInt(roundDisplay.replace("R", ""), 10);
  return `Round ${roundNumber}`;
}
