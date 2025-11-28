import { expect, suite, test } from "vitest";
import { parseEndDate, parseStartDate } from "./tournament-transformer";

suite("tournament-transformer", () => {
  test("should parse start date", () => {
    expect(parseStartDate("Feb 10 - 13, 2025")).toBe("2025-02-10T00:00:00Z");
  });

  test("should parse end date", () => {
    expect(parseEndDate("Feb 10 - 13, 2025")).toBe("2025-02-13T00:00:00Z");
  });
});
