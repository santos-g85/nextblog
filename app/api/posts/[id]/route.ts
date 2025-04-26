import { fakePrisma } from "@/lib/fakeprisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

const id = params.id
  // const id = req.nextUrl.searchParams.get('id');
  // console.log("id:", id);
  try {
    if (!id) {
      return NextResponse.json({ message: 'ID is required' }, { status: 400 });
    }
    
    const data = await fakePrisma.post.findUnique({ where: { id: Number(id) } });
    if (!data) {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error', error },
      { status: 500 }
    );
  }
}