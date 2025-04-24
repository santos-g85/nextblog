import { categories, posts } from '../data/fakedata';

export const fakePrisma = {
  category: {
    findMany: async () => categories,
    findUnique: async ({ where: { id } }: { where: { id: number } }) =>
      categories.find(cat => cat.id === id) || null,
  },
  post: {
    findMany: async () => posts,
    findUnique: async ({ where: { id } }: { where: { id: number } }) =>
      posts.find(post => post.id === id) || null,
  },
};
