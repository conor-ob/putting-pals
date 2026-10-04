import type { Tournament } from "@providers/trpc/types";
import type { Meta, StoryObj } from "@storybook/react";

import { TournamentStatusHeader } from "./tournament-status-header";

const meta: Meta<typeof TournamentStatusHeader> = {
  title: "components/app/TournamentStatusHeader",
  component: TournamentStatusHeader,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Upcoming: Story = {
  args: {
    tournament: {
      schedule: { status: "NOT_STARTED" },
      status: {
        roundDisplay: "R1",
        roundStatus: "UPCOMING",
        roundStatusColor: "GRAY",
        roundStatusDisplay: "Upcoming",
      },
    } as Tournament,
  },
};

export const Official: Story = {
  args: {
    tournament: {
      schedule: { status: "COMPLETED" },
      status: {
        roundDisplay: "R4",
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
      },
    } as Tournament,
  },
};

export const Round1GroupingsOfficial: Story = {
  args: {
    tournament: {
      schedule: { status: "NOT_STARTED" },
      status: {
        roundDisplay: "R1",
        roundStatus: "GROUPINGS_OFFICIAL",
        roundStatusColor: "BLUE",
        roundStatusDisplay: "Groupings Official",
      },
    } as Tournament,
  },
};

export const Round2InProgress: Story = {
  args: {
    tournament: {
      schedule: { status: "IN_PROGRESS" },
      status: {
        roundDisplay: "R2",
        roundStatus: "IN_PROGRESS",
        roundStatusColor: "RED",
        roundStatusDisplay: "In Progress",
      },
    } as Tournament,
  },
};

export const Round3Suspended: Story = {
  args: {
    tournament: {
      schedule: { status: "IN_PROGRESS" },
      status: {
        roundDisplay: "R3",
        roundStatus: "SUSPENDED",
        roundStatusColor: "YELLOW",
        roundStatusDisplay: "Suspended",
      },
    } as Tournament,
  },
};

export const Round4Complete: Story = {
  args: {
    tournament: {
      schedule: { status: "IN_PROGRESS" },
      status: {
        roundDisplay: "R4",
        roundStatus: "COMPLETE",
        roundStatusColor: "BLUE",
        roundStatusDisplay: "Complete",
      },
    } as Tournament,
  },
};

export const Round4Official: Story = {
  args: {
    tournament: {
      schedule: { status: "IN_PROGRESS" },
      status: {
        roundDisplay: "R4",
        roundStatus: "OFFICIAL",
        roundStatusColor: "GREEN",
        roundStatusDisplay: "Official",
      },
    } as Tournament,
  },
};
