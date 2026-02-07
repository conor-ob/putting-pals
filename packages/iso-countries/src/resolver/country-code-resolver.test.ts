import { expect, suite, test } from "vitest";
import { resolve } from "./country-code-resolver";

suite("country-code-resolver", () => {
  test.each([
    ["Türkiye", "TUR"],
  ])("should convert %s to %s", (countryName, expectedCode) => {
    const result = resolve(countryName);
    switch (result?.__typename) {
      case "Country":
        expect(result.ioc).toBe(expectedCode);
        break;
      case "Subdivision":
        expect(result?.ioc).toBe(expectedCode);
        break;
      case "State":
        expect(result?.alpha2).toBe(expectedCode);
        break;
      default:
        expect(result).toBeNull();
        break;
    }
  });

  test("resolve('US-CA') returns California state", () => {
    const result = resolve("US-CA");
    expect(result).not.toBeNull();
    expect(result?.__typename).toBe("State");
    expect(result?.name).toBe("California");
    expect(result?.alpha2).toBe("US-CA");
  });

  test("resolve('CA') returns Canada country, not California", () => {
    const result = resolve("CA");
    expect(result).not.toBeNull();
    expect(result?.__typename).toBe("Country");
    expect(result?.name).toBe("Canada");
    expect(result?.alpha2).toBe("CA");
  });
});
