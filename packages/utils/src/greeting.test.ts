import { describe, expect, test } from "vitest";

import { greeting } from "./greeting";

describe("greeting", () => {
  test("says hello", () => {
    expect(greeting("world")).toBe("Hello, world!");
  });
});
