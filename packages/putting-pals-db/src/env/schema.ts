import { getDatabaseUrlSchema } from "@putting-pals/putting-pals-utils/schema-utils";
import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: getDatabaseUrlSchema(),
});

export const env = envSchema.parse(process.env);
