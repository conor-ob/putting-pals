import type z from "zod";
import type { CountrySchema } from "./schemas";

export type Country = z.infer<typeof CountrySchema>;
