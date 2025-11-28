import { ServiceError } from "@putting-pals/putting-pals-core/service-error";
import { TRPCError } from "@trpc/server";

export function onError(error: unknown) {
  if (error instanceof ServiceError) {
    throw new TRPCError({ code: error.code, message: error.message });
  } else if (error instanceof TypeError) {
    throw new TRPCError({
      code: "NOT_IMPLEMENTED",
      message: "GraphQL query not implemented",
    });
  } else {
    throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
  }
}
