import z from "zod";

export const CompetitorSchema = z
  .object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    country: z.string(),
  })
  .transform((val) => {
    return {
      ...val,
      shortName: `${val.firstName.slice(0, 1)}. ${val.lastName}`,
      displayName: `${val.firstName} ${val.lastName}`,
    };
  });
