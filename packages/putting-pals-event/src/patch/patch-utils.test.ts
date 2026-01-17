import { expect, suite, test } from "vitest";
import {
  matchesLeaderboardHoleByHoleField,
  matchesPuttingPalsPlayerRowField,
  matchesTournamentField,
} from "./patch-utils";

suite("patch-utils", () => {
  suite("matchesTournamentField", () => {
    suite("matchesExactField", () => {
      suite("tournamentStatus", () => {
        test.each([
          // Valid matches
          ["/Tournament:R2025100/tournamentStatus", true],
          ["/Tournament:R2024014/tournamentStatus", true],
          ["/Tournament:abc123/tournamentStatus", true],
          ["/Tournament:ABC/tournamentStatus", true],
          // Invalid - has trailing path
          ["/Tournament:R2025100/tournamentStatus/foo", false],
          ["/Tournament:R2025100/tournamentStatus/nested/deep", false],
          // Invalid - wrong field
          ["/Tournament:R2025100/roundStatus", false],
          ["/Tournament:R2025100/tournamentName", false],
          // Invalid - missing ID separator
          ["/Tournament/tournamentStatus", false],
          // Invalid - wrong typename
          ["/LeaderboardV3:R2025100/tournamentStatus", false],
          ["/tournament:R2025100/tournamentStatus", false],
          // Invalid - empty/malformed
          ["", false],
          ["/", false],
          ["Tournament:R2025100/tournamentStatus", false],
          ["/Tournament:R2025100/tournamentStatus/", false],
        ])("path '%s' matches: %s", (path, expected) => {
          expect(
            matchesTournamentField.matchesExactField(path, "tournamentStatus"),
          ).toBe(expected);
        });
      });

      suite("roundStatus", () => {
        test.each([
          ["/Tournament:R2025100/roundStatus", true],
          ["/Tournament:R2024014/roundStatus", true],
          ["/Tournament:R2025100/roundStatus/foo", false],
          ["/Tournament:R2025100/tournamentStatus", false],
          ["/Tournament/roundStatus", false],
        ])("path '%s' matches: %s", (path, expected) => {
          expect(
            matchesTournamentField.matchesExactField(path, "roundStatus"),
          ).toBe(expected);
        });
      });

      // suite("currentRound", () => {
      //   test.each([
      //     ["/Tournament:R2025100/currentRound", true],
      //     ["/Tournament:xyz/currentRound", true],
      //     ["/Tournament:R2025100/currentRound/extra", false],
      //     ["/Tournament/currentRound", false],
      //   ])("path '%s' matches: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesExactField(path, "currentRound"),
      //     ).toBe(expected);
      //   });
      // });

      // suite("nested weather field", () => {
      //   test.each([
      //     ["/Tournament:R2025100/weather", true],
      //     ["/Tournament:R2025100/weather/tempF", false],
      //     ["/Tournament:R2025100/weather/condition", false],
      //     ["/Tournament/weather", false],
      //   ])("path '%s' matches weather: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesExactField(path, "weather"),
      //     ).toBe(expected);
      //   });
      // });

      // suite("deeply nested weather/tempF field", () => {
      //   test.each([
      //     ["/Tournament:R2025100/weather/tempF", true],
      //     ["/Tournament:R2024014/weather/tempF", true],
      //     ["/Tournament:R2025100/weather/tempF/extra", false],
      //     ["/Tournament:R2025100/weather", false],
      //     ["/Tournament:R2025100/weather/tempC", false],
      //     ["/Tournament/weather/tempF", false],
      //   ])("path '%s' matches weather/tempF: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesExactField(path, "weather/tempF"),
      //     ).toBe(expected);
      //   });
      // });

      // suite("beautyImageAsset nested fields", () => {
      //   test.each([
      //     ["/Tournament:R2025100/beautyImageAsset", true],
      //     ["/Tournament:R2025100/beautyImageAsset/imageOrg", false],
      //     ["/Tournament/beautyImageAsset", false],
      //   ])("path '%s' matches beautyImageAsset: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesExactField(path, "beautyImageAsset"),
      //     ).toBe(expected);
      //   });

      //   test.each([
      //     ["/Tournament:R2025100/beautyImageAsset/imageOrg", true],
      //     ["/Tournament:R2025100/beautyImageAsset/imagePath", false],
      //     ["/Tournament:R2025100/beautyImageAsset", false],
      //   ])("path '%s' matches beautyImageAsset/imageOrg: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesExactField(
      //         path,
      //         "beautyImageAsset/imageOrg",
      //       ),
      //     ).toBe(expected);
      //   });
      // });
    });

    suite("matchesLooseField", () => {
      suite("tournamentStatus", () => {
        test.each([
          // Exact match (no trailing path)
          ["/Tournament:R2025100/tournamentStatus", true],
          // With trailing slash
          ["/Tournament:R2025100/tournamentStatus/", true],
          // With nested path
          ["/Tournament:R2025100/tournamentStatus/nested", true],
          ["/Tournament:R2025100/tournamentStatus/nested/deep/path", true],
          // Invalid - wrong field
          ["/Tournament:R2025100/roundStatus", false],
          // Invalid - missing ID
          ["/Tournament/tournamentStatus", false],
          // Invalid - wrong typename
          ["/LeaderboardV3:R2025100/tournamentStatus", false],
        ])("path '%s' matches loosely: %s", (path, expected) => {
          expect(
            matchesTournamentField.matchesLooseField(path, "tournamentStatus"),
          ).toBe(expected);
        });
      });

      // suite("weather", () => {
      //   test.each([
      //     ["/Tournament:R2025100/weather", true],
      //     ["/Tournament:R2025100/weather/", true],
      //     ["/Tournament:R2025100/weather/tempF", true],
      //     ["/Tournament:R2025100/weather/condition", true],
      //     ["/Tournament:R2025100/weather/logoAsset/imageOrg", true],
      //     ["/Tournament:R2025100/beautyImageAsset", false],
      //     ["/Tournament/weather", false],
      //   ])("path '%s' matches weather loosely: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesLooseField(path, "weather"),
      //     ).toBe(expected);
      //   });
      // });

      // suite("weather/tempF (exact nested)", () => {
      //   test.each([
      //     ["/Tournament:R2025100/weather/tempF", true],
      //     ["/Tournament:R2025100/weather/tempF/", true],
      //     ["/Tournament:R2025100/weather/tempF/extra", true],
      //     ["/Tournament:R2025100/weather", false],
      //     ["/Tournament:R2025100/weather/tempC", false],
      //   ])("path '%s' matches weather/tempF loosely: %s", (path, expected) => {
      //     expect(
      //       matchesTournamentField.matchesLooseField(path, "weather/tempF"),
      //     ).toBe(expected);
      //   });
      // });
    });
  });

  suite("matchesPuttingPalsPlayerRowField", () => {
    suite("matchesExactField", () => {
      suite("id", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/id", true],
          ["/PuttingPalsPlayerRow:abc123/id", true],
          ["/PuttingPalsPlayerRow:45234/id/extra", false],
          ["/PuttingPalsPlayerRow/id", false],
          ["/PlayerRowV3:45234/id", false],
        ])("path '%s' matches: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(path, "id"),
          ).toBe(expected);
        });
      });

      suite("leaderboardSortOrder", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/leaderboardSortOrder", true],
          ["/PuttingPalsPlayerRow:99999/leaderboardSortOrder", true],
          ["/PuttingPalsPlayerRow:45234/leaderboardSortOrder/extra", false],
          ["/PuttingPalsPlayerRow/leaderboardSortOrder", false],
        ])("path '%s' matches: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(
              path,
              "leaderboardSortOrder",
            ),
          ).toBe(expected);
        });
      });

      suite("player (nested object)", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/player", true],
          ["/PuttingPalsPlayerRow:45234/player/id", false],
          ["/PuttingPalsPlayerRow:45234/player/displayName", false],
          ["/PuttingPalsPlayerRow/player", false],
        ])("path '%s' matches player: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(path, "player"),
          ).toBe(expected);
        });
      });

      suite("player/id", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/player/id", true],
          ["/PuttingPalsPlayerRow:abc/player/id", true],
          ["/PuttingPalsPlayerRow:45234/player/id/extra", false],
          ["/PuttingPalsPlayerRow:45234/player", false],
          ["/PuttingPalsPlayerRow/player/id", false],
        ])("path '%s' matches player/id: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(
              path,
              "player/id",
            ),
          ).toBe(expected);
        });
      });

      suite("player/displayName", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/player/displayName", true],
          ["/PuttingPalsPlayerRow:45234/player/displayName/extra", false],
          ["/PuttingPalsPlayerRow:45234/player/shortName", false],
          ["/PuttingPalsPlayerRow/player/displayName", false],
        ])("path '%s' matches player/displayName: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(
              path,
              "player/displayName",
            ),
          ).toBe(expected);
        });
      });

      suite("scoringData/position", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/scoringData/position", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/position/foo", false],
          ["/PuttingPalsPlayerRow:45234/scoringData/foo", false],
          ["/PuttingPalsPlayerRow:45234/scoringData", false],
          ["/PuttingPalsPlayerRow/scoringData/position", false],
          ["/PlayerRowV3:45234/scoringData/position", false],
        ])("path '%s' matches: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(
              path,
              "scoringData/position",
            ),
          ).toBe(expected);
        });
      });

      suite("scoringData/total", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/scoringData/total", true],
          ["/PuttingPalsPlayerRow:xyz123/scoringData/total", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/total/extra", false],
          ["/PuttingPalsPlayerRow:45234/scoringData/totalSort", false],
          ["/PuttingPalsPlayerRow/scoringData/total", false],
        ])("path '%s' matches scoringData/total: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(
              path,
              "scoringData/total",
            ),
          ).toBe(expected);
        });
      });

      suite("scoringData/totalSort", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/scoringData/totalSort", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/totalSort/extra", false],
          ["/PuttingPalsPlayerRow:45234/scoringData/total", false],
        ])("path '%s' matches scoringData/totalSort: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesExactField(
              path,
              "scoringData/totalSort",
            ),
          ).toBe(expected);
        });
      });
    });

    suite("matchesLooseField", () => {
      suite("scoringData", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/scoringData", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/position", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/total", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/totalSort", true],
          ["/PuttingPalsPlayerRow:45234/player", false],
          ["/PuttingPalsPlayerRow/scoringData", false],
        ])("path '%s' matches scoringData loosely: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesLooseField(
              path,
              "scoringData",
            ),
          ).toBe(expected);
        });
      });

      suite("player", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/player", true],
          ["/PuttingPalsPlayerRow:45234/player/", true],
          ["/PuttingPalsPlayerRow:45234/player/id", true],
          ["/PuttingPalsPlayerRow:45234/player/displayName", true],
          ["/PuttingPalsPlayerRow:45234/player/countryFlag", true],
          ["/PuttingPalsPlayerRow:45234/scoringData", false],
          ["/PuttingPalsPlayerRow/player", false],
        ])("path '%s' matches player loosely: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesLooseField(path, "player"),
          ).toBe(expected);
        });
      });

      suite("scoringData/position (exact nested, loose match)", () => {
        test.each([
          ["/PuttingPalsPlayerRow:45234/scoringData/position", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/position/", true],
          ["/PuttingPalsPlayerRow:45234/scoringData/position/extra", true],
          ["/PuttingPalsPlayerRow:45234/scoringData", false],
          ["/PuttingPalsPlayerRow:45234/scoringData/total", false],
        ])("path '%s' matches scoringData/position loosely: %s", (path, expected) => {
          expect(
            matchesPuttingPalsPlayerRowField.matchesLooseField(
              path,
              "scoringData/position",
            ),
          ).toBe(expected);
        });
      });
    });
  });

  suite("matchesLeaderboardHoleByHoleField", () => {
    suite("matchesExactField", () => {
      suite("currentRound", () => {
        test.each([
          ["/LeaderboardHoleByHole:R2025100/currentRound", true],
          ["/LeaderboardHoleByHole:R2024014/currentRound", true],
          ["/LeaderboardHoleByHole:abc123/currentRound", true],
          ["/LeaderboardHoleByHole:R2025100/currentRound/foo", false],
          ["/LeaderboardHoleByHole/currentRound", false],
          ["/LeaderboardV3:R2025100/currentRound", false],
        ])("path '%s' matches: %s", (path, expected) => {
          expect(
            matchesLeaderboardHoleByHoleField.matchesExactField(
              path,
              "currentRound",
            ),
          ).toBe(expected);
        });
      });

      suite("tournamentId", () => {
        test.each([
          ["/LeaderboardHoleByHole:R2025100/tournamentId", true],
          ["/LeaderboardHoleByHole:xyz/tournamentId", true],
          ["/LeaderboardHoleByHole:R2025100/tournamentId/extra", false],
          ["/LeaderboardHoleByHole/tournamentId", false],
        ])("path '%s' matches tournamentId: %s", (path, expected) => {
          expect(
            matchesLeaderboardHoleByHoleField.matchesExactField(
              path,
              "tournamentId",
            ),
          ).toBe(expected);
        });
      });

      suite("tournamentName", () => {
        test.each([
          ["/LeaderboardHoleByHole:R2025100/tournamentName", true],
          ["/LeaderboardHoleByHole:R2025100/tournamentName/extra", false],
          ["/LeaderboardHoleByHole:R2025100/tournamentId", false],
          ["/LeaderboardHoleByHole/tournamentName", false],
        ])("path '%s' matches tournamentName: %s", (path, expected) => {
          expect(
            matchesLeaderboardHoleByHoleField.matchesExactField(
              path,
              "tournamentName",
            ),
          ).toBe(expected);
        });
      });
    });

    suite("matchesLooseField", () => {
      suite("currentRound", () => {
        test.each([
          ["/LeaderboardHoleByHole:R2025100/currentRound", true],
          ["/LeaderboardHoleByHole:R2025100/currentRound/", true],
          ["/LeaderboardHoleByHole:R2025100/currentRound/extra", true],
          ["/LeaderboardHoleByHole:R2025100/tournamentId", false],
          ["/LeaderboardHoleByHole/currentRound", false],
        ])("path '%s' matches currentRound loosely: %s", (path, expected) => {
          expect(
            matchesLeaderboardHoleByHoleField.matchesLooseField(
              path,
              "currentRound",
            ),
          ).toBe(expected);
        });
      });

      suite("tournamentId", () => {
        test.each([
          ["/LeaderboardHoleByHole:R2025100/tournamentId", true],
          ["/LeaderboardHoleByHole:R2025100/tournamentId/", true],
          ["/LeaderboardHoleByHole:R2025100/tournamentId/nested", true],
          ["/LeaderboardHoleByHole:R2025100/currentRound", false],
        ])("path '%s' matches tournamentId loosely: %s", (path, expected) => {
          expect(
            matchesLeaderboardHoleByHoleField.matchesLooseField(
              path,
              "tournamentId",
            ),
          ).toBe(expected);
        });
      });
    });
  });

  suite("edge cases", () => {
    suite("ID format variations", () => {
      test.each([
        // Standard formats
        ["/Tournament:R2025100/tournamentStatus", true],
        ["/Tournament:R2024014/tournamentStatus", true],
        // Alphanumeric IDs
        ["/Tournament:abc123/tournamentStatus", true],
        ["/Tournament:ABC123/tournamentStatus", true],
        ["/Tournament:a1b2c3/tournamentStatus", true],
        // Single character IDs
        ["/Tournament:R/tournamentStatus", true],
        ["/Tournament:1/tournamentStatus", true],
        // Long IDs
        ["/Tournament:R2025100abcdefghijklmnop/tournamentStatus", true],
      ])("ID format '%s' is valid: %s", (path, expected) => {
        expect(
          matchesTournamentField.matchesExactField(path, "tournamentStatus"),
        ).toBe(expected);
      });
    });

    suite("invalid path structures", () => {
      test.each([
        // Empty and whitespace
        ["", false],
        [" ", false],
        ["  ", false],
        // Missing leading slash
        ["Tournament:R2025100/tournamentStatus", false],
        // Double leading slash
        ["//Tournament:R2025100/tournamentStatus", false],
        // Missing colon
        ["/TournamentR2025100/tournamentStatus", false],
        // Empty ID
        ["/Tournament:/tournamentStatus", false],
        // Trailing slash only
        ["/Tournament:R2025100/", false],
        // No field
        ["/Tournament:R2025100", false],
        // Just typename
        ["/Tournament", false],
      ])("invalid path '%s' returns false", (path, expected) => {
        expect(
          matchesTournamentField.matchesExactField(path, "tournamentStatus"),
        ).toBe(expected);
      });
    });

    suite("typename case sensitivity", () => {
      test.each([
        ["/Tournament:R2025100/tournamentStatus", true],
        ["/tournament:R2025100/tournamentStatus", false],
        ["/TOURNAMENT:R2025100/tournamentStatus", false],
        ["/ToUrNaMeNt:R2025100/tournamentStatus", false],
      ])("typename case in '%s' is valid: %s", (path, expected) => {
        expect(
          matchesTournamentField.matchesExactField(path, "tournamentStatus"),
        ).toBe(expected);
      });
    });

    suite("similar but different typenames", () => {
      test("Tournament vs TournamentV2", () => {
        expect(
          matchesTournamentField.matchesExactField(
            "/TournamentV2:R2025100/tournamentStatus",
            "tournamentStatus",
          ),
        ).toBe(false);
      });

      test("PuttingPalsPlayerRow vs PlayerRow", () => {
        expect(
          matchesPuttingPalsPlayerRowField.matchesExactField(
            "/PlayerRow:45234/scoringData/position",
            "scoringData/position",
          ),
        ).toBe(false);
      });

      test("LeaderboardHoleByHole vs Leaderboard", () => {
        expect(
          matchesLeaderboardHoleByHoleField.matchesExactField(
            "/Leaderboard:R2025100/currentRound",
            "currentRound",
          ),
        ).toBe(false);
      });

      test("LeaderboardHoleByHole vs LeaderboardHoleByHoleV2", () => {
        expect(
          matchesLeaderboardHoleByHoleField.matchesExactField(
            "/LeaderboardHoleByHoleV2:R2025100/currentRound",
            "currentRound",
          ),
        ).toBe(false);
      });
    });

    suite("field substring matching prevention", () => {
      test("tournamentStatus should not match tournamentStatusDisplay", () => {
        // exact field should not match when there's more text
        expect(
          matchesTournamentField.matchesExactField(
            "/Tournament:R2025100/tournamentStatusDisplay",
            "tournamentStatus",
          ),
        ).toBe(false);
      });

      test("total should not match totalSort in scoringData", () => {
        expect(
          matchesPuttingPalsPlayerRowField.matchesExactField(
            "/PuttingPalsPlayerRow:45234/scoringData/totalSort",
            "scoringData/total",
          ),
        ).toBe(false);
      });

      test("tournamentId should not match tournamentIdExtra path", () => {
        // The path has tournamentIdExtra, field is tournamentId - should not match
        expect(
          matchesLeaderboardHoleByHoleField.matchesExactField(
            "/LeaderboardHoleByHole:R2025100/tournamentIdExtra",
            "tournamentId",
          ),
        ).toBe(false);
      });
    });

    // suite("loose vs exact field behavior comparison", () => {
    //   const testPath = "/Tournament:R2025100/weather/tempF";

    //   test("exact matches only the complete path", () => {
    //     expect(
    //       matchesTournamentField.matchesExactField(testPath, "weather/tempF"),
    //     ).toBe(true);
    //     expect(
    //       matchesTournamentField.matchesExactField(testPath, "weather"),
    //     ).toBe(false);
    //   });

    //   test("loose matches the field and any subpaths", () => {
    //     expect(
    //       matchesTournamentField.matchesLooseField(testPath, "weather/tempF"),
    //     ).toBe(true);
    //     expect(
    //       matchesTournamentField.matchesLooseField(testPath, "weather"),
    //     ).toBe(true);
    //   });
    // });
  });
});
