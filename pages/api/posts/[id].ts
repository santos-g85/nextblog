import { fakePrisma } from "@/lib/fakeprisma";

export default async function handler(req:any, res:any) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    try{
        const data = await fakePrisma.post.findUnique({ where: { id: Number(id) } });
        if (!data) {
            return res.status(404).json({ message: 'Post not found' });
        }
        return res.status(200).json(data);
    }catch(error){
        return res.status(400).json(error)
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
