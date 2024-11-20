import type { Meta, StoryObj } from "@storybook/react";

import { TournamentStatus } from "./tournament-status";

const meta: Meta<typeof TournamentStatus> = {
  title: "components/app/TournamentStatus",
  component: TournamentStatus,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Upcoming: Story = {
  args: {
    roundDisplay: "R1",
    roundStatus: "UPCOMING",
    roundStatusColor: "GRAY",
    roundStatusDisplay: "Upcoming",
    tournamentStatus: "NOT_STARTED",
  },
};

export const Official: Story = {
  args: {
    roundDisplay: "R4",
    roundStatus: "OFFICIAL",
    roundStatusColor: "GREEN",
    roundStatusDisplay: "Official",
    tournamentStatus: "COMPLETED",
  },
};

export const Round1GroupingsOfficial: Story = {
  args: {
    roundDisplay: "R1",
    roundStatus: "GROUPINGS_OFFICIAL",
    roundStatusColor: "BLUE",
    roundStatusDisplay: "Groupings Official",
    tournamentStatus: "NOT_STARTED",
  },
};

export const Round2InProgress: Story = {
  args: {
    roundDisplay: "R2",
    roundStatus: "IN_PROGRESS",
    roundStatusColor: "RED",
    roundStatusDisplay: "In Progress",
    tournamentStatus: "IN_PROGRESS",
  },
};

export const Round3Suspended: Story = {
  args: {
    roundDisplay: "R3",
    roundStatus: "SUSPENDED",
    roundStatusColor: "YELLOW",
    roundStatusDisplay: "Suspended",
    tournamentStatus: "IN_PROGRESS",
  },
};

export const Round4Complete: Story = {
  args: {
    roundDisplay: "R4",
    roundStatus: "COMPLETE",
    roundStatusColor: "BLUE",
    roundStatusDisplay: "Complete",
    tournamentStatus: "IN_PROGRESS",
  },
};

export const Round4Official: Story = {
  args: {
    roundDisplay: "R4",
    roundStatus: "OFFICIAL",
    roundStatusColor: "GREEN",
    roundStatusDisplay: "Official",
    tournamentStatus: "IN_PROGRESS",
  },
};
