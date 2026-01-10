import type { LeaderboardEventProcessor } from "@putting-pals/putting-pals-core/leaderboard-event";
import type {
  CompetitionService,
  LeaderboardFeedRepository,
  LeaderboardService,
  ScheduleService,
  ScheduleYearsService,
  TournamentResolver,
  TournamentService,
} from "@putting-pals/putting-pals-schema";
import { TRPCError } from "@trpc/server";
import { expect, suite, test, vi } from "vitest";
import { ZodError } from "zod";
import { appRouter } from "../api";
import { createCallerFactory, createTrpcContext } from "../trpc";

suite("tournamentRouter", () => {
  test("should return error if tournament id is invalid", async () => {
    const createCaller = createCallerFactory(appRouter);
    const caller = createCaller(
      createTrpcContext({
        tournamentService: vi.fn() as unknown as TournamentService,
        tournamentResolver: vi.fn() as unknown as TournamentResolver,
        competitionService: vi.fn() as unknown as CompetitionService,
        leaderboardService: vi.fn() as unknown as LeaderboardService,
        leaderboardEventProcessor:
          vi.fn() as unknown as LeaderboardEventProcessor,
        leaderboardFeedRepository:
          vi.fn() as unknown as LeaderboardFeedRepository,
        scheduleService: vi.fn() as unknown as ScheduleService,
        scheduleYearsService: vi.fn() as unknown as ScheduleYearsService,
      }),
    );

    try {
      await caller.tournament.getById({
        tourCode: "P",
        id: "123",
      });
    } catch (error) {
      expect(error).toBeInstanceOf(TRPCError);
      expect((error as TRPCError).cause).toBeInstanceOf(ZodError);
    }
  });
});
