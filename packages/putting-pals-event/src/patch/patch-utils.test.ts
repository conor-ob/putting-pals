/** biome-ignore-all lint/suspicious/noConsole: test output */
import { expect, suite, test } from "vitest";
import {
  matchesLeaderboardHoleByHoleField,
  matchesPuttingPalsPlayerRowField,
  matchesTournamentField,
} from "./patch-utils";

suite("patch-utils", () => {
  suite("Tournament.tournamentStatus", () => {
    test.each([
      ["/Tournament:R2025100/tournamentStatus", true],
      ["/Tournament:R2024014/tournamentStatus", true],
      ["/Tournament:R2025100/tournamentStatus/foo", false],
      ["/Tournament:R2025100/roundStatus", false],
      ["/Tournament/tournamentStatus", false],
      ["/LeaderboardV3:R2025100/tournamentStatus", false],
    ])("matches %s with expected %s", (path, expected) => {
      expect(matchesTournamentField(path, "tournamentStatus")).toBe(expected);
    });
  });

  suite("Tournament.roundStatus", () => {
    test.each([
      ["/Tournament:R2025100/roundStatus", true],
      ["/Tournament:R2024014/roundStatus", true],
      ["/Tournament:R2025100/roundStatus/foo", false],
      ["/Tournament:R2025100/tournamentStatus", false],
      ["/Tournament/roundStatus", false],
    ])("matches %s with expected %s", (path, expected) => {
      expect(matchesTournamentField(path, "roundStatus")).toBe(expected);
    });
  });

  suite("PuttingPalsPlayerRow.scoringData.position", () => {
    test.each([
      ["/PuttingPalsPlayerRow:45234/scoringData/position", true],
      ["/PuttingPalsPlayerRow:45234/scoringData/position/foo", false],
      ["/PuttingPalsPlayerRow:45234/scoringData/foo", false],
      ["/PuttingPalsPlayerRow/scoringData/position", false],
      ["/PlayerRowV3:45234/scoringData/position", false],
    ])("matches %s with expected %s", (path, expected) => {
      expect(
        matchesPuttingPalsPlayerRowField(path, "scoringData/position"),
      ).toBe(expected);
    });
  });

  suite("LeaderboardHoleByHole.currentRound", () => {
    test.each([
      ["/LeaderboardHoleByHole:R2025100/currentRound", true],
      ["/LeaderboardHoleByHole:R2024014/currentRound", true],
      ["/LeaderboardHoleByHole:R2025100/currentRound/foo", false],
      ["/LeaderboardHoleByHole:R2025100/currentRound/foo", false],
      ["/LeaderboardHoleByHole/currentRound", false],
      ["/LeaderboardV3:R2025100/currentRound", false],
    ])("matches %s with expected %s", (path, expected) => {
      expect(matchesLeaderboardHoleByHoleField(path, "currentRound")).toBe(
        expected,
      );
    });
  });
});
