import { RESTDataSource } from "@apollo/datasource-rest";

import type {
  PaddyPowerCompetitionResponse,
  PaddyPowerOdds,
} from "../types/types";
import usOpen2025 from "../data/2025/usOpen";

export class OddsClient extends RESTDataSource {
  override baseURL = "https://apisms.paddypower.com";

  constructor() {
    super({ fetch: fetch });
  }

  public async getPaddyPowerOdds(id: string): Promise<PaddyPowerOdds> {
    const useSnapshot = false;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (useSnapshot) {
      return this.parsePaddyPowerResponse({
        id: id,
        json: usOpen2025 as PaddyPowerCompetitionResponse,
      });
    } else {
      return super
        .get<PaddyPowerCompetitionResponse>("smspp/competition-page/v3", {
          params: {
            _ak: "WKswHK3FUkbN0lak",
            betexRegion: "IRL",
            capiJurisdiction: "intl",
            competitionId: id,
            countryCode: "IE",
            currencyCode: "EUR",
            eventTypeId: "3",
            exchangeLocale: "en_GB",
            includeBadges: "true",
            includeLayout: "true",
            includePrices: "true",
            includeSeoCards: "true",
            includeSeoFooter: "true",
            language: "en",
            loggedIn: "false",
            regionCode: "IRE",
          },
        })
        .then((json) => this.parsePaddyPowerResponse({ id, json }));
    }
  }

  parsePaddyPowerResponse({
    id,
    json,
  }: {
    id: string;
    json: PaddyPowerCompetitionResponse;
  }): PaddyPowerOdds {
    const outrightWinnerMarket = Object.values(json.attachments.markets).find(
      (market) => market.marketType === "OUTRIGHT_WINNER",
    );

    if (!outrightWinnerMarket) {
      throw new Error(
        `No outright winner market found for competition ID: ${id}`,
      );
    }

    return {
      id,
      runners: outrightWinnerMarket.runners.map((runner) => ({
        id: runner.selectionId.toString(),
        name: runner.runnerName,
        odds: {
          numerator: runner.winRunnerOdds.trueOdds.fractionalOdds.numerator,
          denominator: runner.winRunnerOdds.trueOdds.fractionalOdds.denominator,
          decimal:
            runner.winRunnerOdds.trueOdds.fractionalOdds.numerator /
            runner.winRunnerOdds.trueOdds.fractionalOdds.denominator,
          // decimal:
          //   (runner.winRunnerOdds.trueOdds.fractionalOdds.numerator /
          //     runner.winRunnerOdds.trueOdds.fractionalOdds.denominator) +
          //   1, // Convert fractional odds to decimal odds
        },
      })),
    };
  }
}
