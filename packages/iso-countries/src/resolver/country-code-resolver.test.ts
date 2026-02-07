import { expect, suite, test } from "vitest";
import { resolve } from "./country-code-resolver";

suite("country-code-resolver", () => {
  test.each([
    ["Türkiye", "TUR"],
  ])("should convert %s to %s", (countryName, expectedCode) => {
    expect(resolve(countryName)?.ioc).toBe(expectedCode);
  });
});
