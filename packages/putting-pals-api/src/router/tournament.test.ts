import type {
  CompetitionService,
  FeedService,
  LeaderboardEventProcessor,
  LeaderboardService,
  ScheduleService,
  ScheduleYearsService,
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
        competitionService: vi.fn() as unknown as CompetitionService,
        leaderboardService: vi.fn() as unknown as LeaderboardService,
        leaderboardEventProcessor:
          vi.fn() as unknown as LeaderboardEventProcessor,
        feedService: vi.fn() as unknown as FeedService,
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
