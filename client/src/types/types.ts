export type User  = {
  _id: string;
  username: string;
  email: string;
};


export type PostWithUser = {
  _id: string,
  content: string,
  createdAt: string
  author: User
}

export type  LoginDetails = {
  username: string,
  password: string
}


export type UserData = {
  username: string,
  email: string,
  password: string
}