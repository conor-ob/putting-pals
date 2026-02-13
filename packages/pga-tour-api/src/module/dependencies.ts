import type {
  ActiveTournamentClient,
  BatchTournamentClient,
  LeaderboardClient,
  ScheduleClient,
  SeasonClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "../generated/graphql";
import { PgaTourApiLeaderboardClient } from "../leaderboard/leaderboard-client";
import { PgaTourApiScheduleClient } from "../schedule/schedule-client";
import { PgaTourApiSeasonClient } from "../season/season-client";
import { PgaTourWebScraperActiveTournamentClient } from "../tournament/active-tournament-client";
import { PgaTourApiBatchTournamentClient } from "../tournament/batch-tournament-client";
import { PgaTourApiTournamentClient } from "../tournament/tournament-client";

export function injectDependencies(): {
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  seasonClient: SeasonClient;
  tournamentClient: TournamentClient;
  batchTournamentClient: BatchTournamentClient;
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
    seasonClient: new PgaTourApiSeasonClient(sdk),
    scheduleClient: new PgaTourApiScheduleClient(sdk),
    tournamentClient: new PgaTourApiTournamentClient(sdk),
    batchTournamentClient: new PgaTourApiBatchTournamentClient(sdk),
    activeTournamentClient: new PgaTourWebScraperActiveTournamentClient(
      "https://www.pgatour.com",
    ),
  };
}
