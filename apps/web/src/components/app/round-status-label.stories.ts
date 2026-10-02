import type { Meta, StoryObj } from "@storybook/react";

import { RoundStatusLabel } from "./round-status-label";

const meta: Meta<typeof RoundStatusLabel> = {
  title: "components/app/RoundStatusLabel",
  component: RoundStatusLabel,
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
