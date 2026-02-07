import countries from "i18n-iso-countries";

countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// https://github.com/ersel/country-code-info
export function countryNameToIsoCode(countryName: string): string | undefined {
  return countries.getAlpha3Code(countryName, "en");
}
