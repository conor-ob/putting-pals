import z from "zod";

export const ApiNewsSchema = z.object({
  header: z.string(),
  articles: z.array(
    z.object({
      id: z.number(),
      nowId: z.string(),
      contentKey: z.string(),
      dataSourceIdentifier: z.string(),
      type: z.string(),
      headline: z.string(),
      description: z.string(),
      lastModified: z.string(),
      published: z.string(),
      images: z.array(
        z.object({
          dataSourceIdentifier: z.string(),
          id: z.number(),
          type: z.string(),
          name: z.string(),
          credit: z.string(),
          height: z.number(),
          width: z.number(),
          url: z.string(),
        }),
      ),
      links: z.object({
        api: z.object({
          self: z.object({
            href: z.string(),
          }),
        }),
      }),
    }),
  ),
});
