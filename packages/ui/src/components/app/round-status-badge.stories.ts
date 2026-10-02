import type { Meta, StoryObj } from "@storybook/react";

import { RoundStatusBadge } from "./round-status-badge";

const meta: Meta<typeof RoundStatusBadge> = {
  title: "components/app/RoundStatusBadge",
  component: RoundStatusBadge,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
  args: {
    color: "GRAY",
    children: "R1",
  },
};

export const Yellow: Story = {
  args: {
    color: "YELLOW",
    children: "R2",
  },
};

export const Red: Story = {
  args: {
    color: "RED",
    children: "R3",
  },
};

export const Green: Story = {
  args: {
    color: "GREEN",
    children: "R4",
  },
};

export const Blue: Story = {
  args: {
    color: "BLUE",
    children: "PLAYOFF",
  },
};
