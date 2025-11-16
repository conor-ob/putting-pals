import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod/v4";

import { publicProcedure } from "../trpc";

let posts = [
  {
    id: "1",
    title: "Hello, world!",
    content: "This is a test post",
  },
  {
    id: "2",
    title: "Hello, world!",
    content: "This is a test post",
  },
  {
    id: "3",
    title: "Hello, world!",
    content: "This is a test post",
  },
];

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return posts;
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return posts.find((post) => post.id === input.id);
    }),

  create: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return posts.push({ id: crypto.randomUUID(), ...input });
    }),

  delete: publicProcedure.input(z.string()).mutation(({ ctx, input }) => {
    posts = posts.filter((post) => post.id !== input);
    return posts.filter((post) => post.id !== input);
  }),
} satisfies TRPCRouterRecord;
