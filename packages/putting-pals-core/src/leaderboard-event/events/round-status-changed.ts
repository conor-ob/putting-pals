import { RoundStatus } from "@putting-pals/pga-tour-schema/types";
import type { RoundStatusChangedV1 } from "@putting-pals/putting-pals-schema/types";
import { AbstractEventEmitter, type LeaderboardEvent } from "../event-emitter";

export class RoundStatusChanged extends AbstractEventEmitter {
  override filter(): boolean {
    return (
      this.after.roundStatus !== RoundStatus.Upcoming &&
      this.after.roundStatus !== this.before.roundStatus
    );
  }

  override emit(): LeaderboardEvent[] {
    return [
      {
        order: this.getEventOrder(),
        event: {
          __typename: "RoundStatusChangedV1" as const,
          before: {
            roundDisplay: this.before.roundDisplay,
            roundStatus: this.before.roundStatus,
            roundStatusColor: this.before.roundStatusColor,
            roundStatusDisplay: this.before.roundStatusDisplay,
          },
          after: {
            roundDisplay: this.after.roundDisplay,
            roundStatus: this.after.roundStatus,
            roundStatusColor: this.after.roundStatusColor,
            roundStatusDisplay: this.after.roundStatusDisplay,
          },
        } satisfies RoundStatusChangedV1,
      },
    ];
  }

  private getEventOrder(): number {
    return 1;
  }
}
