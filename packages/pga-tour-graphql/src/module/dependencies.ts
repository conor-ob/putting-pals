import type {
  LeaderboardClient,
  ScheduleClient,
  TournamentClient,
} from "@putting-pals/putting-pals-core";
import { getSdk } from "@putting-pals/putting-pals-schema";
import { GraphQLClient } from "graphql-request";
import { LeaderboardGraphQlClient } from "../client/leaderboard-client";
import { ScheduleGraphQlClient } from "../client/schedule-client";
import { TournamentGraphQlClient } from "../client/tournament-client";

export function injectDependencies(): {
  leaderboardClient: LeaderboardClient;
  scheduleClient: ScheduleClient;
  tournamentClient: TournamentClient;
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
    leaderboardClient: new LeaderboardGraphQlClient(sdk),
    scheduleClient: new ScheduleGraphQlClient(sdk),
    tournamentClient: new TournamentGraphQlClient(sdk),
  };
}
