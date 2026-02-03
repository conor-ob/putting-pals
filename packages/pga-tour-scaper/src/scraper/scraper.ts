import type { TourCode } from "@putting-pals/putting-pals-api";
import type { PgaTourWebScraper } from "@putting-pals/putting-pals-core";
import * as cheerio from "cheerio";

type NextDataProps = {
  props: {
    pageProps: {
      pageContext?: {
        tournaments?: {
          id?: string;
          leaderboardId?: string;
          tourCode?: string;
        }[];
      };
    };
  };
};

export class PgaTourCheerioWebScraper implements PgaTourWebScraper {
  async getActiveTournamentId(tourCode: TourCode): Promise<string | undefined> {
    const response = await fetch("https://www.pgatour.com/leaderboard");
    const text = await response.text();
    const $ = cheerio.load(text);
    const nextDataScript = $("#__NEXT_DATA__").html();

    if (nextDataScript) {
      try {
        const data = JSON.parse(nextDataScript) as NextDataProps;

        const tournaments = data.props.pageProps.pageContext?.tournaments;
        if (tournaments !== undefined) {
          const tournament = tournaments.find((it) => it.tourCode === tourCode);
          if (tournament?.leaderboardId !== undefined) {
            return tournament.leaderboardId;
          }
        }
      } catch {
        // Not valid JSON or doesn't match expected structure
        // Silently continue to next script
      }
    }

    return undefined;
  }
}
