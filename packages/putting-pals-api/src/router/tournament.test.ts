import type { IncomingHttpHeaders } from "node:http";
import type { IncomingHttpHeaders as IncomingHttp2Headers } from "node:http2";
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
        headers: {} as IncomingHttpHeaders | IncomingHttp2Headers,
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
