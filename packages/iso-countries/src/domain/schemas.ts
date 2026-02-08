import { z } from "zod";

const BaseEntitySchema = z.object({
  iso2: z.string().min(2).max(6),
  name: z.string(),
  alias: z.array(z.string()).readonly().optional(),
});

export const EntitySchema = z.discriminatedUnion("__typename", [
  BaseEntitySchema.extend({
    __typename: z.literal("Country"),
    iso3: z.string().length(3),
    ioc: z.string().length(3).optional(),
  }),
  BaseEntitySchema.extend({
    __typename: z.literal("Subdivision"),
    parent: z.string().length(2),
    iso3: z.string().length(3),
    ioc: z.string().length(3),
  }),
  BaseEntitySchema.extend({
    __typename: z.literal("State"),
    parent: z.string().length(2),
  }),
]);
