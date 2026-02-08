import type {
  ActiveTournamentClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { mapDomainToApiTourCode } from "../utils/tour-code";
import { ApiActiveTournamentSchema } from "./domain/schemas";

export class EspnSportsApiActiveTournamentClient
  implements ActiveTournamentClient
{
  async getActiveTournamentId(tourCode: TourCode): Promise<string | undefined> {
    const apiTourCode = mapDomainToApiTourCode(tourCode);
    const response = await fetch(
      `https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=${apiTourCode}`,
    );
    const data = await response.json();
    const responseData = ApiActiveTournamentSchema.parse(data);
    return responseData.events[0]?.id;
  }
}
