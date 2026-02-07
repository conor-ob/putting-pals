import type z from "zod";
import type { ApiTourCodeSchema } from "./schemas";

export type ApiTourCode = z.infer<typeof ApiTourCodeSchema>;
