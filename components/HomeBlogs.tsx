"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PostPagination } from "./PostPagination";

export function HomeBlogs(){
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1); 
  const [totalpages ,settotalpages] = useState(1);
  const limit =process.env.NEXT_PUBLIC_PAGINATION_LIMIT;

  useEffect(() => {
    const fetchData = async () => {
      const postRes = await fetch(`/api/posts?page=${page}&limit=${limit}`);
      const postsData = await postRes.json();
      setPosts(postsData.posts);
      console.log(postsData.posts);
      settotalpages(postsData.totalpages)
    };
    fetchData();
  }, [page]);


  return (
    <>
    <div className="">
      <h1 className="text-3xl font-bold mb-8 text-center">Recommended Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post:any) => (
          <Card
            key={post.id}
            className="hover:shadow-lg transition-shadow duration-300"
            onClick={() => router.push(`posts/${post.id}`)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground">
                {post.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    <PostPagination page={page} setPage={setPage} totalpages={totalpages}/>
    </>
  );
};

