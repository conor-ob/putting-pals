import { integer, pgTableCreator, text } from "drizzle-orm/pg-core";

import { env } from "./env/schema";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const pgTable = pgTableCreator(
  (name) => `${env.DATABASE_PREFIX}_${name}`,
);

export const posts = pgTable("posts", {
  id: integer("id").primaryKey().notNull(),
  title: text("title").notNull(),
  body: text("body").notNull(),
});
