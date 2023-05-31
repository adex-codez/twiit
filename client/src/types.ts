export type Author  = {
  id: string;
  username: string;
  emailAddress: string;
};

export type Post = {
  id: string,
  content: string,
  author: Author,
  createdAt: string
}
export type PostWithUser = {
  post: Post,
  author: Author
}

