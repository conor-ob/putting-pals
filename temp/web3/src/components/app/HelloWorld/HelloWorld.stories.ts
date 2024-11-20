import type { Meta, StoryObj } from "@storybook/react";

import { HelloWorld } from "./HelloWorld";

const meta: Meta<typeof HelloWorld> = {
  title: "app/components/HelloWorld",
  component: HelloWorld,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Hello: Story = {
  args: {
    text: "Hello World!",
  },
};

export const Goodbye: Story = {
  args: {
    text: "Goodbye World!",
  },
};
