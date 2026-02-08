import type { TourCode } from "@putting-pals/putting-pals-core";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { ApiNewsSchema } from "./domain/schemas";

export class EspnSportsApiNewsClient {
  async getNewsFeed(tourCode: TourCode) {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const response = await fetch(
      `https://site.web.api.espn.com/apis/site/v2/sports/golf/${apiTourCode}/news`,
    );
    const data = await response.json();
    return ApiNewsSchema.parse(data);
  }

  getNewsArticle(_id: number) {}
}
