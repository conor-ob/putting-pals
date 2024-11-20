import { z } from "zod";

import { PostsService } from "../service/posts";
import { publicProcedure, router } from "../trpc";

export const postsRouter = router({
  getById: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ input }) => {
      return new PostsService().getPost({ id: input.id });
    }),

  getAll: publicProcedure.query(() => {
    return new PostsService().getPosts();
  }),
});
