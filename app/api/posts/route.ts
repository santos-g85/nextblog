import { NextResponse } from "next/server";
import { fakePrisma } from "@/lib/fakeprisma";  

export async function GET() {
  try {
    const posts = await fakePrisma.post.findMany();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}