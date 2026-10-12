import {
  InferenceTourCodeSchema,
  InferenceTypeSchema,
} from "@putting-pals/putting-pals-core";
import { injectDependencies } from "@putting-pals/putting-pals-module";
import "./env/schema";

async function inferSchemas() {
  const { schemaInferenceObserver } = injectDependencies();

  const combinations = InferenceTourCodeSchema.options.flatMap((tourCode) =>
    InferenceTypeSchema.options.map((type) => ({ tourCode, type })),
  );
  const results = await Promise.allSettled(
    combinations.map(({ tourCode, type }) =>
      schemaInferenceObserver.inferSchema(tourCode, type).catch((err) => {
        // biome-ignore lint/suspicious/noConsole: error logging
        console.error(
          `inferSchema failed for tourCode=${tourCode} type=${type}`,
          err,
        );
        throw err;
      }),
    ),
  );

  const rejected = results.filter((result) => result.status === "rejected");
  if (rejected.length > 0) {
    throw new AggregateError(
      rejected.map((r) => r.reason),
      `Failed to infer schema: ${rejected.length} tour(s) failed`,
    );
  }
}

inferSchemas()
  .then(() => process.exit(0))
  .catch((err) => {
    if (err instanceof AggregateError) {
      // biome-ignore lint/suspicious/noConsole: error logging
      console.error(err.message);
      for (const e of err.errors) {
        // biome-ignore lint/suspicious/noConsole: error logging
        console.error(e);
      }
      process.exit(0);
    } else {
      // biome-ignore lint/suspicious/noConsole: error logging
      console.error(err);
      process.exit(1);
    }
  });
