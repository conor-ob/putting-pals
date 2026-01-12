import type { PgaTourWebScraper } from "@putting-pals/putting-pals-api";
import * as cheerio from "cheerio";

type NextDataProps = {
  props: {
    pageProps: {
      pageContext?: {
        tournaments?: {
          id?: string;
          tourCode?: string;
        }[];
      };
      leaderboardId?: string;
      tournament?: {
        id?: string;
      };
    };
  };
};

export class PgaTourCheerioWebScraper implements PgaTourWebScraper {
  async getCurrentTournamentId(): Promise<string | undefined> {
    const response = await fetch("https://www.pgatour.com/leaderboard");
    const text = await response.text();
    const $ = cheerio.load(text);
    const nextDataScript = $("#__NEXT_DATA__").html();

    if (nextDataScript) {
      try {
        const data = JSON.parse(nextDataScript) as NextDataProps;

        if (data.props.pageProps.leaderboardId !== undefined) {
          return data.props.pageProps.leaderboardId;
        }

        if (data.props.pageProps.tournament?.id !== undefined) {
          return data.props.pageProps.tournament.id;
        }

        const tournaments = data.props.pageProps.pageContext?.tournaments;
        if (tournaments !== undefined) {
          const tournament = tournaments.find((it) => it.tourCode === "R");
          if (tournament?.id !== undefined) {
            return tournament.id;
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
