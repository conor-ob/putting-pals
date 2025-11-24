import * as cheerio from "cheerio";

export class PgaTourWebScraper {
  async getCurrentTournamentId() {
    return fetch("https://www.pgatour.com/leaderboard")
      .then((response) => response.text())
      .then((text) => {
        const $ = cheerio.load(text);

        const scriptsById = $("#__NEXT_DATA__")
          .map((_, el) => $(el).html())
          .toArray();

        for (const text of scriptsById) {
          try {
            return JSON.parse(text).props.pageProps.leaderboardId as string;
          } catch (e) {
            console.error(
              "Failed parsing 'props.pageProps.leaderboardId' on <script id='#__NEXT_DATA__'>",
              e,
            );
          }

          try {
            return JSON.parse(text).props.pageProps.tournament.id as string;
          } catch (e) {
            console.error(
              "Failed parsing 'props.pageProps.tournament.id' on <script id='#__NEXT_DATA__'>",
              e,
            );
          }

          try {
            const tournaments =
              JSON.parse(text).props.pageProps.pageContext.tournaments;
            const pgaTourTournaments = tournaments.filter(
              (it: any) => it.tourCode === "R",
            );
            return pgaTourTournaments[0].id as string;
          } catch (e) {
            console.error(
              "Failed parsing 'props.pageProps.pageContext.tournaments' on <script id='#__NEXT_DATA__'>",
              e,
            );
          }
        }

        const allScripts = $("script")
          .map((_, el) => $(el).html())
          .filter((_, it) => it !== "")
          .toArray();

        for (const text of allScripts) {
          try {
            return JSON.parse(text).props.pageProps.leaderboardId as string;
          } catch (e) {
            console.error(
              "Failed parsing 'props.pageProps.leaderboardId' on all scripts",
              e,
            );
          }

          try {
            return JSON.parse(text).props.pageProps.tournament.id as string;
          } catch (e) {
            console.error(
              "Failed parsing 'props.pageProps.tournament.id' on all scripts",
              e,
            );
          }

          try {
            const tournaments =
              JSON.parse(text).props.pageProps.pageContext.tournaments;
            const pgaTourTournaments = tournaments.filter(
              (it: any) => it.tourCode === "R",
            );
            return pgaTourTournaments[0].id as string;
          } catch (e) {
            console.error(
              "Failed parsing 'props.pageProps.pageContext.tournaments' on all scripts",
              e,
            );
          }
        }

        throw new Error("Query 'pgaTourActiveTournamentId' failed");
      });
  }
}
