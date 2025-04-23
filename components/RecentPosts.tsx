const posts = [
    {
      title: "Exploring the Hidden Gems of Japan",
      date: "April 20, 2024",
      category: "Travel",
      image: "/code.jpg",
    },
    {
      title: "10 Tips for a More Organized Workspace",
      date: "April 18, 2024",
      category: "Productivity",
      image: "/hello.jpg",
    },
    {
      title: "A Guide to Making Perfect Pasta",
      date: "April 15, 2024",
      category: "Food",
      image: "/code.jpg",
    },
    {
        title: "A Guide to Making Perfect Pasta",
        date: "April 15, 2024",
        category: "Food",
        image: "/code.jpg",
      },
      {
        title: "A Guide to Making Perfect Pasta",
        date: "April 15, 2024",
        category: "Food",
        image: "/code.jpg",
      },
      {
        title: "A Guide to Making Perfect Pasta",
        date: "April 15, 2024",
        category: "Food",
        image: "/code.jpg",
      },
      {
        title: "A Guide to Making Perfect Pasta",
        date: "April 15, 2024",
        category: "Food",
        image: "/code.jpg",
      },
  ];
  //todo limit to 7 posts
  export function RecentPosts() {
    return (
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div key={index} className="flex items-start gap-4">
            <img src={post.image} alt="" className="w-16 h-16 rounded-md object-cover" />
            <div>
              <p className="text-xs text-gray-500">{post.category}</p>
              <h3 className="text-sm font-medium">{post.title}</h3>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  