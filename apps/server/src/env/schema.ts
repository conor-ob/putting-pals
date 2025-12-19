import { config as dotenv } from "dotenv";
import { z } from "zod";

dotenv({
  encoding: "utf8",
  quiet: process.env.NODE_ENV === "production",
  debug: process.env.NODE_ENV !== "production",
});

const getDatabaseUrlSchema = () => {
  const nodeEnv = z
    .enum(["production", "test", "development"])
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
  NODE_ENV: z
    .enum(["production", "development", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((s) => parseInt(s, 10))
    .pipe(z.number()),
  ORIGIN: z.url(),
  DATABASE_URL: getDatabaseUrlSchema(),
  CI: z
    .string()
    .default("false")
    .transform((s) => s === "true")
    .pipe(z.boolean()),
});

export const env = envSchema.parse(process.env);

function assertNever(x: never): never {
  throw new Error(`Unexpected object: ${x}`);
}
