/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { RESTDataSource } from "@apollo/datasource-rest";
import * as cheerio from "cheerio";

export class PgaTourWebScraper extends RESTDataSource {
  override baseURL = "https://www.pgatour.com";

  constructor() {
    super({ fetch: fetch });
  }

  async getCurrentTournamentId() {
    return super.get<string>("leaderboard").then((text) => {
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
