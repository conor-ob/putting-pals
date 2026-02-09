import type z from "zod";
import type { ApiNewsSchema } from "./schemas";

export type News = z.infer<typeof ApiNewsSchema>;
