import type z from "zod";
import type { EntitySchema } from "./schemas";

export type Entity = z.infer<typeof EntitySchema>;
