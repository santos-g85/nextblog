import { fakePrisma } from "@/lib/fakeprisma";

export default async function handler(req:any, res:any) {
  if (req.method === 'GET') {
    try{
        const data = await fakePrisma.post.findMany();
        return res.status(200).json(data);
    }catch(error){
        return res.status(400).json(error)
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
