import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TRPCError } from "@trpc/server";

export function onError(error: TRPCError) {
  const cause = error.cause;
  if (cause instanceof ServiceError) {
    throw new TRPCError({
      code: cause.code,
      message: cause.message,
      cause,
    });
  }

  if (cause instanceof TypeError) {
    throw new TRPCError({
      code: "NOT_IMPLEMENTED",
      message: "GraphQL query not implemented",
      cause,
    });
  }

  // Log database errors with more detail for debugging
  if (cause && typeof cause === "object" && "code" in cause) {
    // biome-ignore lint/suspicious/noConsole: error logging
    console.error("Database error:", {
      code: cause.code,
      message: cause.message,
      detail: "detail" in cause ? cause.detail : undefined,
      constraint: "constraint" in cause ? cause.constraint : undefined,
    });
  }
}
