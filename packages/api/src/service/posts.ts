import { RESTDataSource } from "@apollo/datasource-rest";
import { eq } from "drizzle-orm";

import { db } from "@pkg/db";
import { posts } from "@pkg/db/schema";

type PostsResponse = {
  posts: Post[];
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  views: number;
  reactions: Reactions;
  tags: string[];
};

type Reactions = {
  likes: number;
  dislikes: number;
};

export class PostsService extends RESTDataSource {
  override baseURL = "https://dummyjson.com/";
  // override baseURL = 'https://jsonplaceholder.typicode.com/';

  public async getPost({ id }: { id: string }) {
    return db.query.posts
      .findFirst({
        where: eq(posts.id, Number(id)),
      })
      .then((postEntity) => {
        if (postEntity !== undefined) {
          return postEntity;
        } else {
          return this.get<Post>(`posts/${id}`).then((post) => {
            return db
              .insert(posts)
              .values(post)
              .returning()
              .then((postEntity) => {
                return postEntity[0];
              });
          });
        }
      });
  }

  public async getPosts() {
    return db.query.posts.findMany().then((postEntities) => {
      if (postEntities.length > 0) {
        return { posts: postEntities };
      } else {
        return this.get<PostsResponse>("posts").then((response) => {
          return db
            .insert(posts)
            .values(response.posts)
            .returning()
            .then((postEntities) => {
              return { posts: postEntities };
            });
        });
      }
    });
  }
}
