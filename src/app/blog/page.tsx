import { getAllPosts } from "@/app/lib/getPosts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  console.log('/Blog/page.tsx ... posts: ',posts);
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-500 hover:underline"
            >
              {post.title} ({post.date})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
