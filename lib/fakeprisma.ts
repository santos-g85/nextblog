import { count } from 'node:console';
import { categories, posts } from '../data/fakedata';

export const fakePrisma = {
  category: {
    findMany: async () => categories,
    findUnique: async ({ where: { id } }: { where: { id: number } }) =>
      categories.find(cat => cat.id === id.toString()) || null,
  },
  post: {
    findMany({ skip = 0, take = 10 } = {}) {
      return posts.slice(skip, skip + take);
    },
    findUnique: async ({ where: { id } }: { where: { id: number } }) =>
      posts.find(post => post.id === id.toString()) || null,
    
    count: async () => {
      let postcount = 0;
      posts.forEach(element => {
        postcount += 1;
      });
      return postcount;
    },
  },
};
