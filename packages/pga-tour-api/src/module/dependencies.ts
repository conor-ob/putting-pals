import type {
  ActiveTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";
import { PgaTourApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { PgaTourApiScheduleClient } from "../schedule/schedule-client";
import { PgaTourWebScraperActiveTournamentClient } from "../tournament/active-tournament-client";
import { PgaTourApiTournamentClient } from "../tournament/tournament-client";

export function injectDependencies(): {
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  tournamentClient: TournamentClient;
  activeTournamentClient: ActiveTournamentClient;
} {
  const client = new GraphQLClient("https://orchestrator.pgatour.com/graphql", {
    headers: {
      "content-type": "application/json",
      "x-api-key": "da2-gsrx5bibzbb4njvhl7t37wqyl4",
      "x-pgat-platform": "web",
    },
  });
  const sdk = getSdk(client);
  return {
    leaderboardClient: new PgaTourApiLeaderboardClient(sdk),
    scheduleClient: new PgaTourApiScheduleClient(sdk),
    tournamentClient: new PgaTourApiTournamentClient(sdk),
    activeTournamentClient: new PgaTourWebScraperActiveTournamentClient(
      "https://www.pgatour.com",
    ),
  };
}
