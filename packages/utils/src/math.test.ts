import { describe, expect, test } from "vitest";

import { sum } from "./math";

describe("sum", () => {
  test("1 + 1 = 2", () => {
    expect(sum(1, 1)).toBe(2);
  });

  test("3 + 4 = 7", () => {
    expect(sum(3, 4)).toBe(7);
  });
});
