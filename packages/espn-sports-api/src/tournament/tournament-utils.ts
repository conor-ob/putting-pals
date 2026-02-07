import countries from "i18n-iso-countries";

// https://github.com/ersel/country-code-info
export function countryNameToIsoCode(countryName: string): string | undefined {
  return countries.getAlpha3Code(countryName, "en");
}
