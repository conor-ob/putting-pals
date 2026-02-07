import { z } from "zod";

export const CountrySchema = z.object({
  __typename: z.enum(["Country", "Subdivision"]),
  alpha2: z.string(),
  alpha3: z.string(),
  ioc: z.string(),
  name: z.string(),
  alias: z.array(z.string()).optional(),
});
