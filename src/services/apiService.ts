import { Post } from '../type/types';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${API_URL}/posts`);
    if (!response.ok) {
      throw new Error('Network response error');
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    throw error;
  }
};
