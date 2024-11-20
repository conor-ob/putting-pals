import type { Meta, StoryObj } from "@storybook/react";

import { RoundStatus } from "./round-status";

const meta: Meta<typeof RoundStatus> = {
  title: "components/app/RoundStatus",
  component: RoundStatus,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Complete: Story = {
  args: {
    color: "BLUE",
    children: "Complete",
  },
};

export const GroupingsOfficial: Story = {
  args: {
    color: "BLUE",
    children: "Groupings Official",
  },
};

export const InProgress: Story = {
  args: {
    color: "RED",
    children: "In Progress",
  },
};

export const Official: Story = {
  args: {
    color: "GREEN",
    children: "Official",
  },
};

export const Suspended: Story = {
  args: {
    color: "YELLOW",
    children: "Suspended",
  },
};

export const Upcoming: Story = {
  args: {
    color: "GRAY",
    children: "Upcoming",
  },
};
