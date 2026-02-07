import type {
  ActiveTournamentClient,
  TourCode,
} from "@putting-pals/putting-pals-core";
import { ApiActiveTournamentSchema } from "../../domain/schemas";
import { mapDomainToApiTourCode } from "../../utils/tour-code";

// https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=all&region=us&lang=en&event=${tempId}
// https://site.api.espn.com/apis/site/v2/sports/golf/eur/scoreboard
// https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=eur&region=us&lang=en
// https://site.web.api.espn.com/apis/site/v2/sports/golf/leaderboard?league=eur
// https://site.web.api.espn.com/apis/site/v2/sports/golf/eur/tourschedule?region=us&lang=en&season=2026
// https://site.web.api.espn.com/apis/personalized/site/v2/sports/golf/leaderboard/streams?sport=golf&league=eur
// https://fcast.espncdn.com/FastcastService/pubsub/profiles/12000/topic/golf-leaderboard-eur/message/719850/checkpoint
// https://www.espn.com/golf/schedule/_/tour/eur?_xhr=pageContent

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
