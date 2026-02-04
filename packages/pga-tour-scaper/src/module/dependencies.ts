import type { PgaTourWebScraper } from "@putting-pals/putting-pals-core";
import { PgaTourCheerioWebScraper } from "../scraper/scraper";

export function injectDependencies(): {
  pgaTourWebScraper: PgaTourWebScraper;
} {
  return {
    pgaTourWebScraper: new PgaTourCheerioWebScraper(),
  };
}
