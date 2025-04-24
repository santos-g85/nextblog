import { Featured } from "@/components/Featured";
import { Navbar } from "@/components/Navbar";
import { CategoryCarosel } from "@/components/CategoryCarosel";
import { RecentPosts } from "@/components/RecentPosts";
import { HomeBlogs } from "@/components/HomeBlogs";
import { Footer } from "@/components/Footer";

export default function IndexPage() {
  return (
    <div className="max-w-7xl mx-auto min-h-screen px-6 py-9">
      <Navbar />
      <Featured />
      <main className=" px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          
          <h2 className="text-xl font-semibold">Categories</h2>
          <CategoryCarosel />
          <HomeBlogs/>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <RecentPosts />
        </aside>
      </main>
      <Footer/>
    </div>
  );
}
