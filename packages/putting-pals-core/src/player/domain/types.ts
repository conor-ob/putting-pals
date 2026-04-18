import type z from "zod";
import type { PlayerSchema } from "./schemas";

export type Player = z.infer<typeof PlayerSchema>;
