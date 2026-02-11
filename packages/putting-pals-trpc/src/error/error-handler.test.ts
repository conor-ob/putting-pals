import { NotFoundError, ServiceError } from "@putting-pals/putting-pals-core";
import { TRPCError } from "@trpc/server";
import { expect, suite, test } from "vitest";
import { onError } from "./error-handler";

suite("error-handler", () => {
  test("should throw TRPCError if cause is a ServiceError", () => {
    const serviceError = new ServiceError("NOT_FOUND", "Resource not found");
    const trpcError = new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
      cause: serviceError,
    });

    expect(() => onError(trpcError)).toThrow(TRPCError);

    try {
      onError(trpcError);
    } catch (error) {
      expect(error).toBeInstanceOf(TRPCError);
      const thrownError = error as TRPCError;
      expect(thrownError.code).toBe("NOT_FOUND");
      expect(thrownError.message).toBe("Resource not found");
      expect(thrownError.cause).toBeInstanceOf(ServiceError);
      expect(thrownError.cause).toBe(serviceError);
    }
  });

  test("should throw TRPCError with INTERNAL_SERVER_ERROR if cause is a TypeError", () => {
    const typeError = new TypeError("Failed to fetch");
    const trpcError = new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
      cause: typeError,
    });

    expect(() => onError(trpcError)).toThrow(TRPCError);

    try {
      onError(trpcError);
    } catch (error) {
      expect(error).toBeInstanceOf(TRPCError);
      const thrownError = error as TRPCError;
      expect(thrownError.code).toBe("INTERNAL_SERVER_ERROR");
      expect(thrownError.message).toBe("Failed to fetch");
      expect(thrownError.cause).toBeInstanceOf(TypeError);
      expect(thrownError.cause).toBe(typeError);
    }
  });

  test("should not throw if cause is not ServiceError or TypeError", () => {
    const otherError = new Error("Some other error");
    const trpcError = new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
      cause: otherError,
    });

    expect(() => onError(trpcError)).not.toThrow();
  });

  test("should not throw if cause is undefined", () => {
    const trpcError = new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
    });

    expect(() => onError(trpcError)).not.toThrow();
  });

  test("should preserve ServiceError code and message when rethrowing", () => {
    const serviceError = new NotFoundError("Tournament not found");
    const trpcError = new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Internal server error",
      cause: serviceError,
    });

    try {
      onError(trpcError);
      expect.fail("Expected onError to throw");
    } catch (error) {
      expect(error).toBeInstanceOf(TRPCError);
      const thrownError = error as TRPCError;
      expect(thrownError.code).toBe("NOT_FOUND");
      expect(thrownError.message).toBe("Tournament not found");
    }
  });
});
