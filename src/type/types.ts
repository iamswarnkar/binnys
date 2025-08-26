export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type RootStackParamList = {
  Login: undefined;
  PostList: undefined;
  PostDetails: { post: Post };
  Counter: undefined;
};
