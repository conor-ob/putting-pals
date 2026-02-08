import type z from "zod";
import type { ApiEventSchema } from "./schemas";

export type ApiEvent = z.infer<typeof ApiEventSchema>;
