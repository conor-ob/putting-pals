import type { TourCode } from "../tour/domain/types";

export type ServiceErrorCode =
  | "INTERNAL_SERVER_ERROR"
  | "NOT_FOUND"
  | "NOT_IMPLEMENTED";

export class ServiceError extends Error {
  constructor(
    readonly code: ServiceErrorCode,
    message: string,
  ) {
    super(message);
  }
}

export class InternalServerError extends ServiceError {
  constructor(message = "Internal server error") {
    super("INTERNAL_SERVER_ERROR", message);
  }
}

export class NotFoundError extends ServiceError {
  constructor(message = "Not found") {
    super("NOT_FOUND", message);
  }
}

export class NotImplementedError extends ServiceError {
  constructor(message = "Not implemented") {
    super("NOT_IMPLEMENTED", message);
  }
}

export class UnsupportedTourCodeError extends ServiceError {
  constructor(tourCode: TourCode) {
    super("NOT_IMPLEMENTED", `Unsupported tour code: ${tourCode}`);
  }
}
