import type { Meta, StoryObj } from "@storybook/react";

import { TournamentName } from "./tournament-name";

const meta: Meta<typeof TournamentName> = {
  title: "components/app/TournamentName",
  component: TournamentName,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TheSentry: Story = {
  args: {
    children: "The Sentry",
  },
};

export const SonyOpenInHawaii: Story = {
  args: {
    children: "Sony Open in Hawaii",
  },
};

export const TheAmericanExpress: Story = {
  args: {
    children: "The American Express",
  },
};

export const MastersTournament: Story = {
  args: {
    children: "Masters Tournament",
  },
};

export const TheMemorialTournamentPresentedByWorkday: Story = {
  args: {
    children: "the Memorial Tournament presented by Workday",
  },
};
