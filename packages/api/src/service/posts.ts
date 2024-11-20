import { RESTDataSource } from "@apollo/datasource-rest";

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
    return this.get<Post>(`posts/${id}`);
  }

  public async getPosts() {
    return this.get<PostsResponse>("posts");
  }
}
