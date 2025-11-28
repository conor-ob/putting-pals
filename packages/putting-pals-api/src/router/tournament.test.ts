import { TRPCError } from "@trpc/server";
import { expect, suite, test } from "vitest";
import { ZodError } from "zod";
import { appRouter } from "../api";
import { createCallerFactory, createTrpcContext } from "../trpc";

suite("tournamentRouter", () => {
  test("should return error if tournament id is invalid", async () => {
    const createCaller = createCallerFactory(appRouter);
    const caller = createCaller(
      createTrpcContext({
        // biome-ignore lint/suspicious/noExplicitAny: mocking request context
        opts: { req: {} as any, res: {} as any, info: {} as any },
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
