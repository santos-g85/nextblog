import { NextRequest, NextResponse } from "next/server";
import { fakePrisma } from "@/lib/fakeprisma";  
import { URL } from "node:url";

export async function GET(req:NextRequest) {
  try {
    const {searchParams}= new URL(req.url);
    const page = parseInt(searchParams.get("page")|| "1");
    const limit = parseInt(searchParams.get("limit")||"10");
    const skip = (page -1)*limit;

    const [posts, total] = await Promise.all([
      fakePrisma.post.findMany({
        skip,
        take:limit
      }),
      fakePrisma.post.count(),
    ]);
    
    const totalpages = Math.ceil(total/limit);
    
    const response = NextResponse.json({ posts, totalpages });
    
    response.headers.set("Cache-Control", "public, max-age=60, stale-while-revalidate=30");

    return response
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}