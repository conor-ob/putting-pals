import { composeStories } from "@storybook/react";
import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import * as Stories from "./HelloWorld.stories";

const { Hello, Goodbye } = composeStories(Stories);

describe("HelloWorld", () => {
  test("says hello", async () => {
    // ARRANGE
    // render(<Default />);
    await Hello.run();

    // ACT
    // await screen.findByRole("heading");

    // ASSERT
    expect(screen.getByTestId("container")).toHaveTextContent("Hello World!");
  });

  test("says goodbye", async () => {
    // ARRANGE
    // render(<Default />);
    await Goodbye.run();

    // ACT
    // await screen.findByRole("heading");

    // ASSERT
    expect(screen.getByTestId("container")).toHaveTextContent("Goodbye World!");
  });
});
