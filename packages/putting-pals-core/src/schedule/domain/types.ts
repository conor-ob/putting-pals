import type z from "zod";
import type { ScheduleSchema } from "./schemas";

export type Schedule = z.infer<typeof ScheduleSchema>;
