"use client";

import { useParams } from "next/navigation";
import * as React from "react";
import { Post } from "@/types/category";


const Postspage = () => {
  const { id } = useParams() as { id: string };
  const [post, setPost] = React.useState<Post | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await fetch(`/api/posts/${id}`);
        const postData = await postRes.json();
        setPost(postData);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchData();
  }, [id]);

  if (loading) return <div className="p-4 text-center">Loading post...</div>;
  if (!post) return <div className="p-4 text-center text-red-600">Post not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={post.image}
        alt={post.title}
        width={800}
        height={500}
        className="w-full h-64 object-cover rounded-lg shadow"
      />
      <h1 className="mt-6 text-3xl font-bold">{post.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{post.description}</p>
    </div>
  );
};

export default Postspage;
