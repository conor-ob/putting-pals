import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { PageLayout } from "./PageLayout";

describe("PageLayout", () => {
  test("should render", () => {
    // ARRANGE
    render(
      <PageLayout title="title">
        <div>Content</div>
      </PageLayout>,
    );

    // ACT
    // await screen.findByRole("heading");

    // ASSERT
    expect(screen.getByText("title")).toBeInTheDocument();
  });
});
