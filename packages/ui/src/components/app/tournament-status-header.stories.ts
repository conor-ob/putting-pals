import type { Meta, StoryObj } from "@storybook/react";

import type { Tournament } from "@pkg/api/types";

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
      roundDisplay: "R1",
      roundStatus: "UPCOMING",
      roundStatusColor: "GRAY",
      roundStatusDisplay: "Upcoming",
      status: "NOT_STARTED",
    } as Tournament,
  },
};

export const Official: Story = {
  args: {
    tournament: {
      roundDisplay: "R4",
      roundStatus: "OFFICIAL",
      roundStatusColor: "GREEN",
      roundStatusDisplay: "Official",
      status: "COMPLETED",
    } as Tournament,
  },
};

export const Round1GroupingsOfficial: Story = {
  args: {
    tournament: {
      roundDisplay: "R1",
      roundStatus: "GROUPINGS_OFFICIAL",
      roundStatusColor: "BLUE",
      roundStatusDisplay: "Groupings Official",
      status: "NOT_STARTED",
    } as Tournament,
  },
};

export const Round2InProgress: Story = {
  args: {
    tournament: {
      roundDisplay: "R2",
      roundStatus: "IN_PROGRESS",
      roundStatusColor: "RED",
      roundStatusDisplay: "In Progress",
      status: "IN_PROGRESS",
    } as Tournament,
  },
};

export const Round3Suspended: Story = {
  args: {
    tournament: {
      roundDisplay: "R3",
      roundStatus: "SUSPENDED",
      roundStatusColor: "YELLOW",
      roundStatusDisplay: "Suspended",
      status: "IN_PROGRESS",
    } as Tournament,
  },
};

export const Round4Complete: Story = {
  args: {
    tournament: {
      roundDisplay: "R4",
      roundStatus: "COMPLETE",
      roundStatusColor: "BLUE",
      roundStatusDisplay: "Complete",
      status: "IN_PROGRESS",
    } as Tournament,
  },
};

export const Round4Official: Story = {
  args: {
    tournament: {
      roundDisplay: "R4",
      roundStatus: "OFFICIAL",
      roundStatusColor: "GREEN",
      roundStatusDisplay: "Official",
      status: "IN_PROGRESS",
    } as Tournament,
  },
};
