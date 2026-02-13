import { fromPartial } from "@total-typescript/shoehorn";
import { expect, suite, test } from "vitest";
import { parseDate, parseStartDate } from "./tournament-utils";

suite("tournament-utils", () => {
  test("should parse start date (same month)", () => {
    expect(
      parseStartDate(fromPartial({ displayDate: "Feb 10 - 13, 2025" })),
    ).toBe("2025-02-10T00:00:00Z");
  });

  test("parseDate: same month (Jan 29 - 30, 2026)", () => {
    const result = parseDate("COMPLETED", "Jan 29 - 30, 2026");
    expect(result.startDate).toBe("2026-01-29T00:00:00Z");
    expect(result.endDate).toBe("2026-01-30T00:00:00Z");
    expect(result.displayDate).toBe("Jan 29 - 30, 2026");
  });

  test("parseDate: different months (Jan 29 - Feb 1, 2026)", () => {
    const result = parseDate("COMPLETED", "Jan 29 - Feb 1, 2026");
    expect(result.startDate).toBe("2026-01-29T00:00:00Z");
    expect(result.endDate).toBe("2026-02-01T00:00:00Z");
    expect(result.displayDate).toBe("Jan 29 - Feb 1, 2026");
  });
});
