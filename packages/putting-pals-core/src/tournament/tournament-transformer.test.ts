import { expect, suite, test } from "vitest";
import { parseStartDate } from "./tournament-transformer";

suite("tournament-transformer", () => {
  test("should parse start date", () => {
    expect(parseStartDate("Feb 10 - 13, 2025")).toBe("2025-02-10T00:00:00Z");
  });
});
