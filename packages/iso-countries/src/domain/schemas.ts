import { z } from "zod";

export const CountrySchema = z.discriminatedUnion("__typename", [
  z.object({
    __typename: z.literal("Country"),
    alpha2: z.string(),
    alpha3: z.string(),
    ioc: z.string().optional(),
    name: z.string(),
    alias: z.array(z.string()).readonly().optional(),
  }),
  z.object({
    __typename: z.literal("Subdivision"),
    alpha2: z.string(),
    alpha3: z.string(),
    ioc: z.string(),
    name: z.string(),
  }),
  z.object({
    __typename: z.literal("State"),
    alpha2: z.string(),
    name: z.string(),
  }),
]);
