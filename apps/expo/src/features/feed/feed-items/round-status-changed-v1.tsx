import { assertNever } from "@putting-pals/putting-pals-utils";
import { Text, View } from "react-native";
import { RoundStatusBadge } from "~/components/round-status-badge";
import { RoundStatusLabel } from "~/components/round-status-label";
import type {
  RoundStatus,
  RoundStatusChangedV1 as RoundStatusChangedV1Type,
} from "~/providers/trpc/types";

export function RoundStatusChangedV1({
  item,
}: {
  item: RoundStatusChangedV1Type;
}) {
  return (
    <View className="flex flex-col gap-2 p-4">
      <View className="flex flex-row items-center gap-1.5">
        <RoundStatusBadge color={item.next.roundStatusColor}>
          {item.next.roundDisplay}
        </RoundStatusBadge>
        <RoundStatusLabel
          className="line-clamp-1"
          color={item.next.roundStatusColor}
        >
          {item.next.roundStatusDisplay}
        </RoundStatusLabel>
      </View>
      <Text className="text-foreground">
        {getRoundStatusChangedText(
          item.next.roundDisplay,
          item.next.roundStatus,
        )}
      </Text>
    </View>
  );
}

function getRoundStatusChangedText(
  roundDisplay: string,
  roundStatus: RoundStatus,
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
      assertNever(roundStatus);
  }
}

function getRoundNumberText(roundDisplay: string) {
  const roundNumber = parseInt(roundDisplay.replace("R", ""), 10);
  return `Round ${roundNumber}`;
}
