import { expect, suite, test } from "vitest";
import { countryNameToIsoCode } from "./tournament-utils";

suite("tournament-utils", () => {
  test.each([
    ["Australia", "AUS"],
    // ["South Africa", "RSA"],
    ["Mauritius", "MUS"],
    // ["United Arab Emirates", "UAE"],
    ["Bahrain", "BHR"],
    ["Qatar", "QAT"],
    ["Turkey", "TUR"],
    ["Türkiye", "TUR"],
  ])("should convert %s to %s", (countryName, expectedCode) => {
    expect(countryNameToIsoCode(countryName)).toBe(expectedCode);
  });
});
