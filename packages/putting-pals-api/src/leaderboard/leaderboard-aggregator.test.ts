import {
  CompetitionSchema,
  type Leaderboard,
  type PlayerRow,
} from "@putting-pals/putting-pals-core";
import { expect, suite, test } from "vitest";
import { aggregateLeaderboard } from "./leaderboard-aggregator";

type PlayerState = PlayerRow["scoringData"]["playerState"];

function playerRow(
  id: string,
  totalSort: number,
  position: string,
  playerState: PlayerState,
): PlayerRow {
  return {
    __typename: "PlayerRow",
    id,
    leaderboardSortOrder: 0,
    player: {
      countryFlag: "IRL",
      displayName: id,
      shortName: id,
      abbreviations: id,
      id,
    },
    scoringData: {
      position,
      playerState,
      total: totalSort > 0 ? `+${totalSort}` : `${totalSort}`,
      totalSort,
      thru: "F",
      thruSort: 0,
      score: "E",
      scoreSort: 0,
    },
  };
}

function competitor(id: string, picks: string[]) {
  return {
    id,
    country: "IRL",
    countryFlag: "IRL",
    displayName: id,
    shortName: id,
    picks,
  };
}

/**
 * Two Competitors: "alice" picks the Player under test plus two others, and
 * "bob" picks the Players who made the cut, the worst of whom is at +6.
 */
function scorePick(pick: PlayerRow) {
  const leaderboard: Leaderboard = {
    __typename: "Leaderboard",
    id: "R2026014",
    tournamentStatus: "IN_PROGRESS",
    leaderboardRoundHeader: "R3",
    players: [
      pick,
      playerRow("a2", 0, "T10", "ACTIVE"),
      playerRow("a3", 0, "T10", "ACTIVE"),
      playerRow("b1", -4, "1", "ACTIVE"),
      playerRow("b2", 2, "T20", "ACTIVE"),
      playerRow("b3", 6, "T50", "ACTIVE"),
    ],
  };
  const competition = CompetitionSchema.parse({
    tournamentId: "R2026014",
    scoringRules: "MISSED_CUT",
    competitors: [
      competitor("alice", [pick.id, "a2", "a3"]),
      competitor("bob", ["b1", "b2", "b3"]),
    ],
  });

  const row = aggregateLeaderboard(leaderboard, competition).players.find(
    (it) => it.__typename === "PlayerRow" && it.player.id === pick.id,
  );
  if (row?.__typename !== "PlayerRow") {
    throw new Error(`Pick ${pick.id} not found`);
  }
  return row.scoringData;
}

suite("missed cut rule", () => {
  test.each([
    ["missed the cut", "CUT", "CUT"],
    ["withdrew", "WD", "WITHDRAWN"],
    ["was disqualified", "DQ", "DISQUALIFIED"],
  ] as const)(
    "a Pick who %s keeps a worse score of their own",
    (_, position, playerState) => {
      const scoringData = scorePick(playerRow("x", 12, position, playerState));

      expect(scoringData.total).toBe("+12");
      expect(scoringData.totalSort).toBe(12);
    },
  );

  test.each([
    ["missed the cut", "CUT", "CUT"],
    ["withdrew", "WD", "WITHDRAWN"],
    ["was disqualified", "DQ", "DISQUALIFIED"],
  ] as const)(
    "a Pick who %s takes the worst made-cut score when theirs is better",
    (_, position, playerState) => {
      const scoringData = scorePick(playerRow("x", 3, position, playerState));

      expect(scoringData.total).toBe("+6*");
      expect(scoringData.totalSort).toBe(6);
    },
  );

  test("withdrawn and disqualified Picks are left out when finding the worst made-cut score", () => {
    const leaderboard: Leaderboard = {
      __typename: "Leaderboard",
      id: "R2026014",
      tournamentStatus: "IN_PROGRESS",
      leaderboardRoundHeader: "R3",
      players: [
        playerRow("cut", 3, "CUT", "CUT"),
        playerRow("wd", 20, "WD", "WITHDRAWN"),
        playerRow("dq", 15, "DQ", "DISQUALIFIED"),
        playerRow("made", 6, "T50", "ACTIVE"),
      ],
    };
    const competition = CompetitionSchema.parse({
      tournamentId: "R2026014",
      scoringRules: "MISSED_CUT",
      competitors: [
        competitor("alice", ["cut", "wd", "dq"]),
        competitor("bob", ["made"]),
      ],
    });

    const cutRow = aggregateLeaderboard(leaderboard, competition).players.find(
      (it) => it.__typename === "PlayerRow" && it.player.id === "cut",
    );

    expect(cutRow?.__typename === "PlayerRow" && cutRow.scoringData.total).toBe(
      "+6*",
    );
  });
});
