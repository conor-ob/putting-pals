import { ServiceError } from "@putting-pals/putting-pals-core";
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
}
