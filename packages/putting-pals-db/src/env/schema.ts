import "dotenv/config";
import { z } from "zod";

const getDatabaseUrlSchema = () => {
  const nodeEnv = z
    .enum(["production", "test", "development"])
    .default("development")
    .parse(process.env.NODE_ENV);

  switch (nodeEnv) {
    case "production":
      return z.url();
    case "development":
      return z.url().refine((val) => val.includes("localhost"), {
        message:
          "DATABASE_URL must contain 'localhost' in development environment",
      });
    case "test":
      return z
        .preprocess(
          (val) => (val === "" || val === undefined ? undefined : val),
          z.string().optional(),
        )
        .default(
          "postgresql://postgres:postgres@localhost:5432/putting-pals-test-db",
        )
        .refine((val) => val.includes("localhost"), {
          message: "DATABASE_URL must contain 'localhost' in test environment",
        });
    default:
      assertNever(nodeEnv);
  }
};

const envSchema = z.object({
  DATABASE_URL: getDatabaseUrlSchema(),
});

export const env = envSchema.parse(process.env);

function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}
