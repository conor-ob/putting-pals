import z from "zod";
import { assertNever } from "./type-utils";

export const getDatabaseUrlSchema = () => {
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
