import { Featured } from "@/components/Featured";
import { Navbar } from "@/components/Navbar";
import { Category } from "@/components/Category";
import { RecentPosts } from "@/components/RecentPosts";

export default function IndexPage() {
  return (
    <div className="min-h-screen px-6 py-9">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <Featured />
          <h2 className="text-xl font-semibold">Categories</h2>
          <Category />
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <h2 className="text-xl font-semibold">Recent Posts</h2>
          <RecentPosts />
        </aside>
      </main>
    </div>
  );
}
