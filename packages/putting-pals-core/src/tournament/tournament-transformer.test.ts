import { fromPartial } from "@total-typescript/shoehorn";
import { expect, suite, test } from "vitest";
import { parseStartDate } from "./tournament-utils";

suite("tournament-transformer", () => {
  test("should parse start date", () => {
    expect(
      parseStartDate(fromPartial({ displayDate: "Feb 10 - 13, 2025" })),
    ).toBe("2025-02-10T00:00:00Z");
  });
});
