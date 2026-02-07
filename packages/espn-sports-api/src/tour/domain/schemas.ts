import { z } from "zod";

export const ApiTourCodeSchema = z.enum([
  "pga",
  "tgl",
  "lpga",
  "champions-tour",
  "liv",
  "eur",
  "ntw",
]);
