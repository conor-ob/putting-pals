export type ServiceErrorCode = "NOT_FOUND" | "INTERNAL_SERVER_ERROR";

export class ServiceError extends Error {
  constructor(
    readonly code: ServiceErrorCode,
    message: string,
  ) {
    super(message);
  }
}

export class NotFoundError extends ServiceError {
  constructor(message = "Not found") {
    super("NOT_FOUND", message);
  }
}

export class InternalServerError extends ServiceError {
  constructor(message = "Internal server error") {
    super("INTERNAL_SERVER_ERROR", message);
  }
}
