import { z } from "zod";

export const EntitySchema = z.discriminatedUnion("__typename", [
  z.object({
    __typename: z.literal("Country"),
    iso2: z.string().length(2),
    iso3: z.string().length(3),
    ioc: z.string().length(3).optional(),
    name: z.string(),
    alias: z.array(z.string()).readonly().optional(),
  }),
  z.object({
    __typename: z.literal("Subdivision"),
    parent: z.string().length(2),
    iso2: z.string().length(6),
    iso3: z.string().length(3),
    ioc: z.string().length(3),
    name: z.string(),
  }),
  z.object({
    __typename: z.literal("State"),
    parent: z.string().length(2),
    iso2: z.string().length(5),
    name: z.string(),
  }),
]);
